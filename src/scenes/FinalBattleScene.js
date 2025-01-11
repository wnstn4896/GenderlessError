export class FinalBattleScene extends Phaser.Scene {
    constructor() {
        super('FinalBattleScene');
        this.playerHP = 120; // 플레이어 체력
        this.enemyHP = 800;  // 적 체력
        this.respawnCount = 0; // 적 부활 횟수
    }

    create() {
        // 배경 설정
        this.background = this.add.tileSprite(640, 360, 1280, 720, 'digitalBackground_final'); // 월드 크기와 동일하게 설정
        this.physics.world.setBounds(0, 0, 1280, 720); // 월드 경계 설정

         // 플레이어 생성
        this.player = this.physics.add.sprite(200, 300, 'openion2_32bit');
        this.player.setCollideWorldBounds(true);
        this.player.setScale(0.09);

         // 두 번째 플레이어 캐릭터 생성
         this.partner = this.physics.add.sprite(200, 400, 'openion_32bit');
         this.partner.setCollideWorldBounds(true);
         this.partner.setScale(0.09);

        // 피탄 판정 히트박스 생성
        this.playerHitbox = this.add.circle(this.player.x, this.player.y, 5, 0xff0000); // 반경 5px
        this.physics.add.existing(this.playerHitbox, false); // 물리 엔진에 추가 (false = 정적)

        // 입력 키 설정
        this.cursors = this.input.keyboard.createCursorKeys();

        // 환경 감지: PC인지 모바일인지 확인
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // **가상 조이스틱 생성**
            this.joystickBase = this.add.circle(100, 600, 50, 0x808080, 0.5);
            this.joystickHandle = this.add.circle(100, 600, 30, 0xffffff, 0.8);
            this.input.on('pointerdown', this.startJoystick, this);
            this.input.on('pointermove', this.moveJoystick, this);
            this.input.on('pointerup', this.stopJoystick, this);

            // **발사 버튼 생성**
            this.fireButton = this.add.circle(1180, 600, 80, 0xff0000, 0.8).setInteractive(); // 터치 영역 확대
            this.fireButtonText = this.add.text(1180, 600, '발사', {
                font: '20px Arial',
                fill: '#ffffff',
            })
            .setOrigin(0.5); // 텍스트를 버튼의 정 중앙에 배치

            // 발사 버튼 이벤트 처리
            this.fireButton.on('pointerdown', () => {
                this.spaceKeyDown = true;
            });
            this.fireButton.on('pointerup', () => {
                this.spaceKeyDown = false;
            });
        }

        // 플레이어 체력 바
        this.playerHPBar = this.add.graphics();
        this.updatePlayerHPBar(); // 체력 바 초기화

        // 적 체력 바
        this.enemyHPBar = this.add.graphics();
        this.updateEnemyHPBar(); // 체력 바 초기화

        // 탄막 그룹 설정
        this.playerBullets = this.physics.add.group();
        this.enemyBullets = this.physics.add.group();

        // 스페이스바 눌림 상태 이벤트 설정
        this.input.keyboard.on('keydown-SPACE', () => {
            this.spaceKeyDown = true;
        });

        this.input.keyboard.on('keyup-SPACE', () => {
            this.spaceKeyDown = false;
        });

        // 탄막 연사 이벤트
        this.time.addEvent({
            delay: 80,
            callback: this.shootPlayerBullet,
            callbackScope: this,
            loop: true,
        });

        // 두 번째 플레이어 탄막 자동 발사
        this.time.addEvent({
            delay: 700,
            callback: this.shootPartnerBullet,
            callbackScope: this,
            loop: true,
        });

        // 적 생성
        this.enemies = this.physics.add.group({
            key: 'clonihil2_32bit',
            repeat: 0, // 적 1개만 생성
            setXY: { x: 900, y: 300 },
        });

        this.enemies.children.iterate((enemy) => {
            enemy.setScale(0.12);
            enemy.setCollideWorldBounds(true); // 월드 경계 밖으로 못 나가게 설정
            enemy.setBounce(1); // 충돌 시 반전
            enemy.setVelocityY(50); // 초기 속도 설정
            enemy.setVelocityX(-50);
        });

        // ✅ **두 번째 적 생성**
        this.enemy2 = this.physics.add.sprite(900, 400, 'clonihil_32bit');
        this.enemy2.setScale(0.10);
        this.enemy2.setCollideWorldBounds(true);
        this.enemy2.setBounce(1);
        this.enemy2.setVelocityY(-50);
        this.enemy2.setVelocityX(50);

        // 적 텔레포트 및 360도 탄막 발사 이벤트
        this.time.addEvent({
            delay: 300, // 텔레포트 주기
            callback: this.teleportEnemy,
            callbackScope: this,
            loop: true,
        });

        // 두 번째 적 탄막 발사 이벤트
        this.time.addEvent({
            delay: 380, // 발사 주기
            callback: this.shootEnemy2Bullet,
            callbackScope: this,
            loop: true,
        });

        this.DefeatLog = sessionStorage.getItem("DefeatLog") === "true";
        if (this.DefeatLog){
            // 타이머 텍스트
            this.timerText = this.add.text(760, 30, '60', {
                fontSize: '32px',
                fill: '#ffffff',
                fontFamily: 'Arial'
            }).setOrigin(0.5);

            // 타이머 동작
            this.remainingTime = 60; // 남은 시간 (초)
            this.time.addEvent({
                delay: 1000, // 1초마다 실행
                callback: this.updateTimer,
                callbackScope: this,
                loop: true
            });
        }
        
        // 충돌 처리
        this.physics.add.overlap(this.playerBullets, this.enemies, this.handleBulletHit, null, this);
        this.physics.add.overlap(this.playerBullets, this.enemy2, this.handleBulletHit, null, this);
        this.physics.add.overlap(this.enemyBullets, this.playerHitbox, this.handlePlayerHit, null, this);
    }

    startJoystick(pointer) {
        if (Phaser.Math.Distance.Between(pointer.x, pointer.y, this.joystickBase.x, this.joystickBase.y) < 50) {
            this.joystickActive = true;
        }
    }
    
    moveJoystick(pointer) {
        if (this.joystickActive) {
            const angle = Phaser.Math.Angle.Between(
                this.joystickBase.x,
                this.joystickBase.y,
                pointer.x,
                pointer.y
            );
    
            const distance = Phaser.Math.Clamp(
                Phaser.Math.Distance.Between(
                    this.joystickBase.x,
                    this.joystickBase.y,
                    pointer.x,
                    pointer.y
                ),
                0,
                50
            );
    
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;
    
            this.joystickHandle.setPosition(this.joystickBase.x + dx, this.joystickBase.y + dy);
    
            // 플레이어 이동
            this.player.setVelocity(dx * 11, dy * 11);
        }
    }
    
    stopJoystick() {
        this.joystickActive = false;
        this.joystickHandle.setPosition(this.joystickBase.x, this.joystickBase.y);
        this.player.setVelocity(0, 0);
    }

    updatePlayerHPBar() {
        this.playerHPBar.clear();

        // 음수 값으로 인한 체력 바 역행 문제 방지
        if (this.playerHP <= 0) {
            this.playerHPBar.setAlpha(0); 
            return;
        }

        this.playerHPBar.fillStyle(0x00ff00, 1); // 초록색
        this.playerHPBar.fillRect(20, 660, (this.playerHP / 100) * 100, 20); // 플레이어 체력 바 위치
        // 조작키 설명 텍스트
        this.controlsText = this.add.text(200, 660, '↑↓←→: 이동 | 스페이스바: 탄막 발사', {
            fontSize: '16px',
            fill: '#ffffff',
            padding: { top: 2, bottom: 2 }, // 상단과 하단에 2px 여백 추가
        });
    }
    
    updateEnemyHPBar() {
        this.enemyHPBar.clear();
        this.enemyHPBar.lineStyle(2, 0xffffff, 1);
        this.enemyHPBar.strokeRect(20, 20, 700, 20); // 테두리 추가

         // 체력 바 색상: 부활 횟수에 따라 순환
        const colors = [0xff0000, 0xffff55, 0x5555ff]; // 빨강 -> 노랑 -> 파랑
        const hpColor = colors[this.respawnCount % 3];

        // 음수 값으로 인한 체력 바 역행 문제 방지
        if (this.enemyHP <= 0) {
            this.enemyHPBar.setAlpha(0); 
            return;
        }

        this.enemyHPBar.setAlpha(1);
        this.enemyHPBar.fillStyle(hpColor, 1);
        this.enemyHPBar.fillRect(20, 20, (this.enemyHP / 800) * 700, 20); // 적 체력 바 위치
    }

    // **타이머 업데이트**
    updateTimer() {
        this.remainingTime -= 1;
        this.timerText.setText(this.remainingTime); // 화면에 표시

        if (this.remainingTime <= 0) {
            this.cameras.main.flash(500, 0, 0, 0); // 적 처치 연출(검은 플래시)
            this.scene.start('TrueEndingScene');
        }
    }
    
    teleportEnemy() {
        this.enemies.children.iterate((enemy) => {
            // 화면 내 무작위 위치로 텔레포트
            enemy.setPosition(
                Phaser.Math.Between(900, 1000), // 무작위 X
                Phaser.Math.Between(55, 680)   // 무작위 Y
            );

            if (enemy.active) {
                for (let i = 0; i < 360; i += 45) {
                    const bullet = this.enemyBullets.create(enemy.x - 20, enemy.y, 'clonihil2_bullet');
                    const velocity = new Phaser.Math.Vector2(500, 300).rotate(Phaser.Math.DegToRad(i));
                    bullet.setVelocity(velocity.x, velocity.y);
                    bullet.setScale(7);
                }
            }
        });
    }

    shootEnemy2Bullet() {
        if (this.enemy2.active){
            const speed = 270; // 이동 속도 (적당한 값 조정)
            const velocity = new Phaser.Math.Vector2(100, 200);
            Phaser.Math.RandomXY(900, speed); // 랜덤 방향 설정
            this.enemy2.setVelocity(velocity.x, velocity.y);

            if (this.remainingTime % 3 === 0)
                this.enemy2.setPosition(Phaser.Math.Between(900, 1000), Phaser.Math.Between(55, 680));

            if (this.remainingTime <= 15){
                for (let i = -30; i <= 30; i += 15) {
                    const bullet = this.enemyBullets.create(this.enemy2.x, this.enemy2.y, 'clonihil_bullet');
                    const velocity = new Phaser.Math.Vector2(-500, 100).rotate(Phaser.Math.DegToRad(i));
                    bullet.setVelocity(velocity.x, velocity.y);
                    bullet.setScale(5);
                }
                this.enemy2.setPosition(Phaser.Math.Between(900, 1000), Phaser.Math.Between(55, 680));
            }

            for (let angle = -45; angle <= 45; angle += 10) {
                const bullet = this.enemyBullets.create(this.enemy2.x - 20, this.enemy2.y, 'clonihil_bullet');
                const velocity = new Phaser.Math.Vector2(-500, 200).rotate(Phaser.Math.DegToRad(angle));
                bullet.setVelocity(velocity.x, velocity.y);
                bullet.setScale(1.3);
            }
        }
    }

    shootPlayerBullet() {
        if (this.spaceKeyDown) {
            // 직선 탄막
            const straightBullet = this.playerBullets.create(this.player.x + 20, this.player.y, 'bullet');
            straightBullet.setVelocityX(1000);
            straightBullet.setScale(1.5);

            // 직선(후방) 탄막
            const backBullet = this.playerBullets.create(this.player.x + 20, this.player.y, 'bullet');
            backBullet.setVelocityX(-1000);
            backBullet.setScale(2.0);

            // 위쪽 대각선 탄막
            const upDiagonalBullet = this.playerBullets.create(this.player.x + 20, this.player.y - 5, 'bullet'); // 약간 위쪽에서 발사
            upDiagonalBullet.setVelocity(1000, 350);
    
            // 아래쪽 대각선 탄막
            const downDiagonalBullet = this.playerBullets.create(this.player.x + 20, this.player.y + 5, 'bullet'); // 약간 아래쪽에서 발사
            downDiagonalBullet.setVelocity(1000, -350);
        }
    }

    shootPartnerBullet(){
        if (this.partner.active){
            for (let i = -30; i <= 30; i += 15) {
                const bullet = this.playerBullets.create(this.partner.x, this.partner.y, 'bullet');
                const velocity = new Phaser.Math.Vector2(500, 100).rotate(Phaser.Math.DegToRad(i));
                bullet.setVelocity(velocity.x, velocity.y);
                bullet.setScale(3);
            }
        }
    }

    handleBulletHit(bullet, enemy) {
        // 적 체력 감소
        this.enemyHP -= 1;
        this.updateEnemyHPBar();

        if (this.enemyHP === 0) {
            this.respawnCount++;
            this.cameras.main.flash(500, 0, 0, 0); // 적 처치 연출(검은 플래시)
            // 적 숨기기
            this.enemies.children.iterate((e) => {
                e.setActive(false).setVisible(false).setAlpha(0);
            });
            this.enemy2.setActive(false).setVisible(false).setAlpha(0);

            this.time.delayedCall(500, () => {
                this.cameras.main.flash(500, 255, 255, 255); // 적 부활 연출(흰색 플래시)
                this.enemyHP = 800;            
                this.updateEnemyHPBar(); // 체력 바 초기화

                // 첫 번째 적 복귀
                this.enemies.children.iterate((enemy) => {
                    enemy.setActive(true).setVisible(true).setAlpha(1);
                });

                // 두 번째 적 복귀
                this.enemy2.setActive(true).setVisible(true).setAlpha(1);
            }, [], this);
        }
    }

    handlePlayerHit(player, bullet) {
        bullet.destroy();
    
        this.cameras.main.flash(1000, 255, 0, 0); // 플레이어 피격 연출(빨간 플래시)
    
        // 플레이어 체력 감소
        this.playerHP -= 10;
        this.updatePlayerHPBar();
    
        if (this.playerHP <= 0) {
            if (this.remainingTime === 1)
                this.remainingTime = 100 // 게임 오버 연출 중 타이머 실행 방지

            // **게임 오버 연출 시작**
            this.gameOverSequence();
        }
    }
    
    gameOverSequence() {
        // **모든 게임 요소 제거 및 충돌 처리 중지**
        this.player.setActive(false).setVisible(false).setAlpha(0);  // 플레이어 숨기기
        this.playerHitbox.setActive(false).setVisible(false).setAlpha(0); // 플레이어 피탄 판정 숨기기
        this.partner.setActive(false).setVisible(false).setAlpha(0);;  // 플레이어 숨기기
    
        // **배경 위치 초기화
        this.background.tilePositionX = 0;

        // **배경 스크롤 정지**
        this.gameOver = true; 
    
        setTimeout(() => {
            this.scene.start('DefeatEndingScene');
        }, 500);
    } 

    update() {
        if (!this.gameOver) {
            // 배경 스크롤 (게임 진행 중일 때만)
            this.background.tilePositionX += 8;
        }
    
        // 플레이어 이동 제한 및 속도 개선
        if (this.cursors.left.isDown) this.player.x = Math.max(this.player.x - 5, 0); // 왼쪽 경계 제한
        else if (this.cursors.right.isDown) this.player.x = Math.min(this.player.x + 5, 1260); // 오른쪽 경계 제한
    
        if (this.cursors.up.isDown) this.player.y = Math.max(this.player.y - 5, 0); // 상단 경계 제한
        else if (this.cursors.down.isDown) this.player.y = Math.min(this.player.y + 5, 690); // 하단 경계 제한

        // 히트박스 위치 동기화
        this.playerHitbox.setPosition(this.player.x, this.player.y);

        // 두 번째 플레이어 위치 업데이트
        this.partner.setPosition(this.player.x+30, this.player.y-60);
    
        // 적 경계 이탈 방지
        this.enemies.children.iterate((enemy) => {
            if (enemy.x <= 0 || enemy.x >= 1260) enemy.setVelocityX(-enemy.body.velocity.x);
            if (enemy.y <= 0 || enemy.y >= 690) enemy.setVelocityY(-enemy.body.velocity.y);
        });
    }
} 