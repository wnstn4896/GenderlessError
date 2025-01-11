export class VisualNovelModule {
    constructor(scene) {
        this.scene = scene;
        this.uiElements = {};
        this.choiceTexts = [];
    }

    createUI() {
        const { scene } = this;
    
        // 배경
        this.uiElements.background = scene.add.image(scene.cameras.main.width / 2, scene.cameras.main.height / 2, '').setOrigin(0.5).setScale(scene.cameras.main.width / 1280, scene.cameras.main.height / 720);
    
        // 대화 상자
        this.uiElements.dialogBox = scene.add.graphics();
        this.uiElements.dialogBox.fillStyle(0x000000, 0.8);
        this.uiElements.dialogBox.fillRoundedRect(140, 500, 1000, 150, 20);
    
        // 캐릭터 이름 상자
        this.uiElements.nameBox = scene.add.graphics();
        this.uiElements.nameBox.fillStyle(0x000000, 0.8);
        this.uiElements.nameBox.fillRoundedRect(140, 460, 230, 40, 10);
    
        // 캐릭터 이름 텍스트
        this.uiElements.nameText = scene.add.text(150, 467, '', {
            fontSize: '20px',
            color: '#ffffff',
            padding: { top: 2, bottom: 2 },
        });
    
        // 캐릭터 스프라이트
        this.uiElements.characterSprite = scene.add.image(230, 575, '').setScale(0.4);
    
        // 대화 텍스트
        this.uiElements.dialogueText = scene.add.text(300, 540, '', {
            fontSize: '18px',
            color: '#ffffff',
            wordWrap: { width: 800 },
            padding: { top: 5, bottom: 2 },
        });
        this.uiElements.dialogueText.setLineSpacing(6); // 줄 간격 설정
    
        // "다음" 버튼
        this.uiElements.nextButton = scene.add.text(1000, 620, '다음 →', {
            fontSize: '20px',
            color: '#ffffff',
            padding: { top: 2, bottom: 2 },
        }).setInteractive().on('pointerover', () => {
            // 호버링 시 스타일 변경
            this.uiElements.nextButton.setStyle({
                color: 'gray', // 텍스트 색상 변경
            });
        })
        .on('pointerout', () => {
            // 호버링이 끝났을 때 원래 스타일 복구
            this.uiElements.nextButton.setStyle({
                color: '#ffffff', // 텍스트 색상 복구
            });
        });
    }
    
    
    updateDialogue(dialogue, onNext) {
        const { background, dialogBox, nameBox, nameText, characterSprite, dialogueText, nextButton } = this.uiElements;
    
        // 배경 업데이트
        if (dialogue.background) {
            background.setTexture(dialogue.background).setVisible(true);
            this.scene.cameras.main.setBackgroundColor('rgba(0,0,0,0)'); // 배경 투명 설정 복구
        } else {
            background.setVisible(false); // 배경 이미지를 숨김
            this.scene.cameras.main.setBackgroundColor('#000000'); // 카메라 배경을 검은색으로 설정
        }
    
        // 대화 상자 및 텍스트 업데이트
        dialogBox.setVisible(true);
        nameBox.setVisible(true);
        nameText.setText(dialogue.name).setVisible(true);
        characterSprite.setTexture(dialogue.character).setVisible(!!dialogue.character);
        dialogueText.setText(dialogue.text).setVisible(true);
    
        // "다음" 버튼 동작
        nextButton.setVisible(true);
    
        // 기존 리스너 제거 (pointerdown 이벤트만)
        nextButton.off('pointerdown');
    
        // 새로운 리스너 등록
        nextButton.on('pointerdown', () => {
            if (dialogue.choices) {
                this.showChoices(dialogue.choices, onNext);
            } else {
                onNext();
            }
        });
    }    

    showChoices(choices, onNext) {
        const { scene } = this;
        this.hideUI(); // 기존 UI 숨기기

        const centerX = scene.cameras.main.width / 2;
        const centerY = scene.cameras.main.height / 2;

        choices.forEach((choice, index) => {
            const choiceText = scene.add.text(centerX, centerY - 50 + index * 60, choice.text, {
                fontSize: '20px',
                color: '#ffffff',
                backgroundColor: '#333333',
                padding: { x: 20, y: 10 },
            }).setOrigin(0.5).setInteractive();

            choiceText.on('pointerdown', () => {
                choice.action();
                this.clearChoices();
                onNext(); // 선택 후 다음 대화 진행
            });

            this.choiceTexts.push(choiceText);
        });
    }

    hideUI() {
        Object.values(this.uiElements).forEach((el) => el.setVisible(false));
    }

    restoreUI() {
        const { background, dialogBox, nameBox, nameText, characterSprite, dialogueText, nextButton } = this.uiElements;
        background.setVisible(true);
        dialogBox.setVisible(true);
        nameBox.setVisible(true);
        nameText.setVisible(true);
        characterSprite.setVisible(true);
        dialogueText.setVisible(true);
        nextButton.setVisible(true);
    }
    

    clearChoices() {
        this.choiceTexts.forEach((text) => text.destroy());
        this.choiceTexts = [];
    }
}
