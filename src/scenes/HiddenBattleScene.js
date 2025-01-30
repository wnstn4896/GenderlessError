export class HiddenBattleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'HiddenBattleScene' });
        this.bullets = []; // 플레이어 탄막 저장 배열
        this.enemyBullets = []; // 보스 탄막 저장 배열
        this.bossHP = 1000; // 보스 체력
        this.playerHP = 100; // 플레이어 체력
    }

    create() {
        // **보스 체력바 UI 추가 (화면 상단)**
        this.bossHPBar = this.add.graphics();
        this.updateBossHPBar();

        // **플레이어 체력바 UI 추가 (화면 하단)**
        this.playerHPBar = this.add.graphics();
        this.updatePlayerHPBar();

        // 🔥 **모바일 환경 감지**
        this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (this.isMobile) {
            this.createMobileControls(); // 🎮 모바일 UI 추가
        }

        // 기존 Phaser 씬을 비활성화
        this.cameras.main.setBackgroundColor('rgba(0,0,0,0)');
        this.game.canvas.style.background = "transparent"; // Phaser 캔버스 배경 투명 처리
        this.game.canvas.style.position = "absolute";
        this.game.canvas.style.top = "0";
        this.game.canvas.style.left = "0";
        this.game.canvas.style.zIndex = "1"; // Phaser 캔버스가 UI를 담당하도록 설정

        // Babylon.js 3D 렌더링을 위한 캔버스 생성
        const babylonCanvas = document.createElement('canvas');
        babylonCanvas.id = "babylonCanvas"; 
        babylonCanvas.style.position = 'absolute';
        babylonCanvas.style.top = '0px';
        babylonCanvas.style.left = '0px';
        babylonCanvas.width = window.innerWidth;
        babylonCanvas.height = window.innerHeight;
        babylonCanvas.style.zIndex = "0"; // 🔥 Babylon.js 캔버스를 Phaser 그래픽 뒤로 배치
        document.body.appendChild(babylonCanvas);

        // Babylon.js 엔진 및 씬 초기화
        this.initBabylonScene(babylonCanvas);

        // 보스 패턴 변경 타이머 시작
        this.changePatternInterval = setInterval(() => {
            this.changeBossPattern();
        }, 1000);

        this.changeBossPattern();
    }

    initBabylonScene(canvas) {
        this.engine = new BABYLON.Engine(canvas, true);
        this.babylonScene = new BABYLON.Scene(this.engine); // ✅ 씬 저장
    
        // 조명 추가
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), this.babylonScene);
        light.intensity = 0.7;
    
        // **카메라 고정**
        this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 10, -20), this.babylonScene);
        this.camera.setTarget(new BABYLON.Vector3(0, 0, 0)); // ✅ 올바른 씬 적용
        this.camera.attachControl(canvas, true);
        this.babylonScene.clearColor = new BABYLON.Color3.Black();
    
        // 보스 모델 로드
        BABYLON.SceneLoader.ImportMesh(
            null,
            "./assets/images/",
            "clonihil_stand_front.glb",
            this.babylonScene, // ✅ 올바른 씬 적용
            (meshes) => {
                this.boss = meshes[0];
                this.boss.position = new BABYLON.Vector3(0, 3, 15);
                this.boss.scaling = new BABYLON.Vector3(7, 7, 7);
            }
        );
    
        // 플레이어 모델 로드
        BABYLON.SceneLoader.ImportMesh(
            null,
            "./assets/images/",
            "openion_3d.glb",
            this.babylonScene, // ✅ 올바른 씬 적용
            (meshes) => {
                this.player = meshes[0];
                this.player.position = new BABYLON.Vector3(0, 0, -10);
                this.player.scaling = new BABYLON.Vector3(3, 5, 4);
                this.player.billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y;
                this.playerLoaded = true;
            }
        );
    
        // 키 입력 감지
        this.inputMap = {};
        window.addEventListener("keydown", (event) => { this.inputMap[event.code] = true; });
        window.addEventListener("keyup", (event) => { this.inputMap[event.code] = false; });
    
        // Babylon.js 엔진 루프
        this.engine.runRenderLoop(() => {
            if (!this.babylonScene) return; // ✅ 씬이 삭제되면 중지
            this.updatePlayerMovement();
            this.updateBullets();
            this.updateBossBullets();
            this.babylonScene.render();
        });
    
        // 창 크기 조절 대응
        window.addEventListener('resize', () => {
            if (this.engine) this.engine.resize();
        });
    }    

    // 씬 종료 
    shutdownBabylon() {
        if (this.engine) {
            this.engine.stopRenderLoop(); // 엔진 루프 중지
        }
        if (this.babylonScene) {
            this.babylonScene.dispose(); // Babylon.js 씬 삭제
        }
        if (this.engine) {
            this.engine.dispose(); // 엔진 완전 제거
        }
        const babylonCanvas = document.getElementById("babylonCanvas");
        if (babylonCanvas) {
            document.body.removeChild(babylonCanvas); // 캔버스 제거
        }
    
        // Babylon.js 객체 삭제 방지 (메모리 참조 오류 방지)
        this.babylonScene = null;
        this.engine = null;
        this.player = null;
        this.boss = null;
    }

    // **보스 체력바 업데이트**
    updateBossHPBar() {
        this.bossHPBar.clear();
        this.bossHPBar.fillStyle(0xff0000, 1); // 빨간색
        this.bossHPBar.fillRect(20, 20, (this.bossHP / 10050) * 700, 20); // 체력바 크기 조정
        this.bossHPBar.lineStyle(2, 0xffffff, 1);
        this.bossHPBar.strokeRect(20, 20, 700, 20); // 테두리 추가
    }

    // **플레이어 체력바 업데이트**
    updatePlayerHPBar() {
        this.playerHPBar.clear();
        this.playerHPBar.fillStyle(0x00ff00, 1); // 초록색
        this.playerHPBar.fillRect(20, 660, (this.playerHP / 100) * 200, 20); // 체력바 크기 조정
        this.playerHPBar.lineStyle(2, 0xffffff, 1);
        this.playerHPBar.strokeRect(20, 660, 200, 20); // 테두리 추가

        // 조작키 설명 텍스트
        this.controlsText = this.add.text(250, 660, '↑↓←→: 이동 | 스페이스바: 탄막 발사 | 쉬프트키: 캐릭터 전환', {
            fontSize: '16px',
            fill: '#ffffff',
            padding: { top: 2, bottom: 2 }, // 상단과 하단에 2px 여백 추가
        });
    }

    // 플레이어 이동
    updatePlayerMovement() {
        if (!this.playerLoaded) return; // 플레이어 모델이 로드되지 않았다면 실행하지 않음
        const speed = 0.3;
    
        if (this.isMobile) {
            // 모바일 조이스틱 입력값 반영
            this.player.position.x += this.playerMoveX;
            this.player.position.y += this.playerMoveY;
        } else {
            // 키보드 입력 반영
            if (this.inputMap["ArrowUp"]) this.player.position.y += speed;
            if (this.inputMap["ArrowDown"]) this.player.position.y -= speed;
            if (this.inputMap["ArrowLeft"]) this.player.position.x -= speed;
            if (this.inputMap["ArrowRight"]) this.player.position.x += speed;
        }
    
        // Z축 이동 고정
        this.player.position.z = -10;
    
        // 화면 경계 제한
        this.player.position.x = Math.max(-18, Math.min(18, this.player.position.x));
        this.player.position.y = Math.max(0, Math.min(8, this.player.position.y));
    
        // 카메라 위치 업데이트
        this.camera.position = new BABYLON.Vector3(this.player.position.x, this.player.position.y+15, -30);

        // 스페이스바 또는 발사 버튼 입력 확인
        if (this.spaceKeyDown || this.inputMap["Space"]) {
            this.shootBullet();
        }
    }

    // 🎯 **플레이어 탄막 발사 (보스를 향해 자동 조준)**
    shootBullet() {
        if (!this.playerLoaded) return; // 플레이어 모델이 로드되지 않았다면 실행하지 않음
        if (this.lastShotTime && performance.now() - this.lastShotTime < 50) {
            return; // 연사 속도 제한
        }

        this.lastShotTime = performance.now();

        const bullet = BABYLON.MeshBuilder.CreateSphere("bullet", { diameter: 0.8 }, this.player.getScene());
        bullet.position = new BABYLON.Vector3(this.player.position.x, this.player.position.y, this.player.position.z + 1);
        bullet.direction = this.boss.position.subtract(bullet.position).normalize(); // **보스 방향으로 발사**
        this.bullets.push(bullet);
    }

    // 🎯 **플레이어 탄막 이동**
    updateBullets() {
        const bulletSpeed = 1;
        this.bullets = this.bullets.filter(bullet => {
            bullet.position.addInPlace(bullet.direction.scale(bulletSpeed));

            // 보스 충돌 체크
            if (BABYLON.Vector3.Distance(bullet.position, this.boss.position) < 1.5) { 
                this.hitBoss();
                bullet.dispose();
                return false;
            }

            if (bullet.position.z > 30) { 
                bullet.dispose();
                return false;
            }
            return true;
        });
    }

    // **가상 조이스틱 및 발사 버튼 추가**
    createMobileControls() {
        // 🎮 **조이스틱 UI 생성**
        this.joystickBase = this.add.circle(120, 600, 50, 0x808080, 0.5);
        this.joystickHandle = this.add.circle(120, 600, 30, 0xffffff, 0.8);

        this.input.on('pointerdown', this.startJoystick, this);
        this.input.on('pointermove', this.moveJoystick, this);
        this.input.on('pointerup', this.stopJoystick, this);

        // 🎯 **발사 버튼 생성**
        this.fireButton = this.add.circle(1180, 600, 80, 0xff0000, 0.8).setInteractive();
        this.fireButtonText = this.add.text(1180, 600, '발사', {
            font: '20px Arial',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // 🎯 **발사 버튼 이벤트 처리**
        this.fireButton.on('pointerdown', () => {
            this.spaceKeyDown = true;
        });
        this.fireButton.on('pointerup', () => {
            this.spaceKeyDown = false;
        });
    }

    // ✅ **조이스틱 입력 시작**
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
    
            // 이동 거리와 각도를 기반으로 이동 속도 계산
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;
    
            // 조이스틱 핸들 위치 업데이트
            this.joystickHandle.setPosition(this.joystickBase.x + dx, this.joystickBase.y + dy);
    
            // 🎮 **플레이어 이동 속도 반영 (speed 곱하기)**
            const speed = 0.3; // 이동 속도
            this.playerMoveX = (dx / 50) * speed; // 정규화 후 speed 적용
            this.playerMoveY = -(dy / 50) * speed;
        }
    }

    // **조이스틱 입력 중지**
    stopJoystick() {
        this.joystickActive = false;
        this.joystickHandle.setPosition(this.joystickBase.x, this.joystickBase.y);
        this.playerMoveX = 0;
        this.playerMoveY = 0;
    }

    // **보스 HP 감소 + 사망 처리**
    hitBoss() {
        this.bossHP -= 10;
        this.updateBossHPBar(); // **체력바 업데이트**

        if (this.bossHP <= 0) {
            this.boss.dispose();
            sessionStorage.setItem("HiddenBattleClear", "true");
            this.shutdownBabylon();
            this.scene.stop('HiddenBattleScene');
            this.scene.start('HiddenScene');
        }
    }

    // 🎯 **보스 패턴 변경 (5초마다 새로운 패턴 적용)**
    changeBossPattern() {
        const patterns = ["basic", "spread", "spin", "homing"];
        this.currentPattern = patterns[Math.floor(Math.random() * patterns.length)];
    
        // 기존 공격 패턴 중지
        if (this.bossAttackLoop) {
            clearInterval(this.bossAttackLoop);
        }
    
        // 새로운 패턴 적용 (발사 함수 호출)
        switch (this.currentPattern) {
            case "basic":
                this.bossAttackLoop = setInterval(() => this.shootBossBulletBasic(), 100);
                break;
            case "spread":
                this.bossAttackLoop = setInterval(() => this.shootBossBulletSpread(), 700);
                break;
            case "spin":
                this.bossAttackLoop = setInterval(() => this.shootBossBulletSpin(), 10);
                break;
            case "homing":
                this.bossAttackLoop = setInterval(() => this.shootBossBulletHoming(), 100);
                break;
        }
    }

    // 🎯 **기본 탄막: 보스를 중심으로 단일 탄막 발사**
    shootBossBulletBasic() {
        const bullet = this.createBossBullet();
        bullet.direction = this.player.position.subtract(bullet.position).normalize(); // ✅ 플레이어 방향으로 설정
        this.enemyBullets.push(bullet);
    }

    // 🎯 **확산 탄막: 플레이어를 기준으로 여러 방향으로 퍼지는 탄막**
    shootBossBulletSpread() {
        const baseDirection = this.player.position.subtract(this.boss.position).normalize(); // ✅ 플레이어 기준 방향
        const angles = [-30, -15, 0, 15, 30]; // 여러 방향
        angles.forEach(angle => {
            const bullet = this.createBossBullet();

            // ✅ 기존 방향에서 회전 적용
            const spreadDirection = new BABYLON.Vector3(
                baseDirection.x * Math.cos(angle * Math.PI / 180) - baseDirection.y * Math.sin(angle * Math.PI / 180),
                baseDirection.x * Math.sin(angle * Math.PI / 180) + baseDirection.y * Math.cos(angle * Math.PI / 180),
                baseDirection.z
            ).normalize();

            bullet.direction = spreadDirection;
            this.enemyBullets.push(bullet);
        });
    }

    // 🎯 **회전 탄막: 플레이어를 기준으로 360도 회전하며 발사**
    shootBossBulletSpin() {
        if (!this.spinAngle) this.spinAngle = 0;
        this.spinAngle += 10; // 회전각 증가

        const baseDirection = this.player.position.subtract(this.boss.position).normalize(); // ✅ 플레이어 기준 방향

        const bullet = this.createBossBullet();
        
        // ✅ 플레이어 방향을 기준으로 회전
        const spinDirection = new BABYLON.Vector3(
            baseDirection.x * Math.cos(this.spinAngle * Math.PI / 180) - baseDirection.y * Math.sin(this.spinAngle * Math.PI / 180),
            baseDirection.x * Math.sin(this.spinAngle * Math.PI / 180) + baseDirection.y * Math.cos(this.spinAngle * Math.PI / 180),
            baseDirection.z
        ).normalize();

        bullet.direction = spinDirection;
        this.enemyBullets.push(bullet);
    }

    // 🎯 **유도 탄막: 플레이어를 따라가는 탄막 (변경 없음)**
    shootBossBulletHoming() {
        const bullet = this.createBossBullet();
        bullet.target = this.player; // 타겟 지정
        bullet.direction = this.player.position.subtract(bullet.position).normalize();
        bullet.isHoming = true;
        this.enemyBullets.push(bullet);
    }


    // 🎯 **보스 탄막 생성 함수**
    createBossBullet() {
        const bullet = BABYLON.MeshBuilder.CreateSphere("enemyBullet", { diameter: 1 }, this.boss.getScene());
        bullet.position = new BABYLON.Vector3(this.boss.position.x, this.boss.position.y, this.boss.position.z - 1);
        return bullet;
    }


    // 🎯 **보스 탄막 이동 + 플레이어 충돌 체크**
    updateBossBullets() {
        const bulletSpeed = 0.8;
        const homingSpeed = 0.2; // 추적 탄막 속도

        this.enemyBullets = this.enemyBullets.filter(bullet => {
            if (bullet.isHoming) {
                // 🔥 **추적 탄막: 매 프레임마다 플레이어 방향으로 조정**
                const newDirection = this.player.position.subtract(bullet.position).normalize();
                bullet.direction = bullet.direction.add(newDirection.scale(homingSpeed)).normalize();
            }

            bullet.position.addInPlace(bullet.direction.scale(bulletSpeed));

            // 🔥 히트박스 충돌 체크
            if (BABYLON.Vector3.Distance(bullet.position, this.player.position) < 0.5) {
                this.hitPlayer();
                bullet.dispose();
                return false;
            }

            if (bullet.position.z < -30 || bullet.position.x < -15 || bullet.position.x > 15 || bullet.position.y < -10 || bullet.position.y > 10) {
                bullet.dispose();
                return false;
            }

            return true;
        });
    }

    // **플레이어 피격 처리**
    hitPlayer() {
        this.playerHP -= 10;
        this.updatePlayerHPBar(); // **체력바 업데이트**
        this.cameras.main.flash(1000, 255, 0, 0);

        if (this.playerHP <= 0) {
            sessionStorage.removeItem("HiddenBattleClear");
            this.shutdownBabylon();
            this.scene.stop('HiddenBattleScene');
            this.scene.start('HiddenScene');
        }
    }
}
