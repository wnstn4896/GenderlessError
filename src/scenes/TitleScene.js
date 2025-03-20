export class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TitleScene' });
        this.DefeatLog = sessionStorage.getItem("DefeatLog") === "true";
    }

    create() {
        // 로드된 이미지를 배경으로 추가
        this.title = this.add.tileSprite(640, 360, 1280, 720, 'title');

        // 버튼 배경
        const buttonBackground = this.add.graphics();
        buttonBackground.fillStyle(0x000000, 0.7); // 반투명 검정
        buttonBackground.fillRoundedRect(530, 370, 140, 60, 10); // 버튼 배경 위치와 크기

        // "게임 시작" 버튼 텍스트
        const startText = this.add.text(600, 400, '게임 시작', {
            fontSize: '32px', // 텍스트 크기
            color: '#ffffff',
            fontFamily: 'Arial',
        }).setOrigin(0.5, 0.5).setInteractive(); // 중심 기준으로 정렬 및 상호작용 활성화

        // 호버 효과
        startText.on('pointerover', () => {
            buttonBackground.fillStyle(0xffffff, 1); // 배경 흰색
            buttonBackground.fillRoundedRect(530, 370, 140, 60, 10); // 다시 그리기
            startText.setStyle({ color: '#000000' }); // 텍스트 검정색
        });

        startText.on('pointerout', () => {
            buttonBackground.fillStyle(0x000000, 0.7); // 배경 반투명 검정
            buttonBackground.fillRoundedRect(530, 370, 140, 60, 10); // 다시 그리기
            startText.setStyle({ color: '#ffffff' }); // 텍스트 흰색
        });

        // 클릭 이벤트
        startText.removeAllListeners('pointerdown'); // 기존 리스너 제거
        startText.on('pointerdown', () => {
            this.scene.start('PrologueScene'); // 다음 Scene으로 전환
        });
        
        if (this.DefeatLog){
            // "이어하기" 버튼 텍스트
            const continueText = this.add.text(600, 500, '이어하기', {
                fontSize: '28px', // 텍스트 크기
                color: '#ffffff',
                fontFamily: 'Arial',
            }).setOrigin(0.5, 0.5).setInteractive(); // 중심 기준으로 정렬 및 상호작용 활성화
    
             // 호버 효과
            continueText.on('pointerover', () => {
                buttonBackground.fillStyle(0xffffff, 1); // 배경 흰색
                buttonBackground.fillRoundedRect(530, 370, 140, 60, 10); // 다시 그리기
                startText.setStyle({ color: '#000000' }); // 텍스트 검정색
            });
    
            continueText.on('pointerout', () => {
                buttonBackground.fillStyle(0x000000, 0.7); // 배경 반투명 검정
                buttonBackground.fillRoundedRect(530, 370, 140, 60, 10); // 다시 그리기
                startText.setStyle({ color: '#ffffff' }); // 텍스트 흰색
            });

            // 클릭 이벤트
            continueText.removeAllListeners('pointerdown'); // 기존 리스너 제거
            continueText.on('pointerdown', () => {
                this.scene.start('MidPartScene'); // 중반부 분기점 씬으로 전환
            });
        }
    }
}
