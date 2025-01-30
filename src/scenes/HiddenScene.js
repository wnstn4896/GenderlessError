import { VisualNovelModule } from './VisualNovelModule.js';

export class HiddenScene extends Phaser.Scene {
    constructor() {
        super({ key: 'HiddenScene' });
        this.HiddenBattleClear = sessionStorage.getItem("HiddenBattleClear") === "true";

        if (this.HiddenBattleClear)
            this.currentIndex = 0;
        else 
            this.currentIndex = 10;

        this.dialogues = [
            {
                text: "(됐어! 저 사람의 능력을 파훼할 방법을 찾았어.)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "(죽어도 계속해서 되살아나니까, 일격으로 승부 보려고 하면 안 돼.)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "(저 사람이 죽는 것부터 다시 되살아나기까지의 과정은 모두 함수적 연관성이 있어.)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "(그래. 그 과정 중, 죽음에 이르기까지의 과정 속 파라미터 값에 무수히 많은 정숫값을 대입한다면, 되살아나는 과정이 무의미할 만큼, 계속해서 반복되는 죽음을 겪게 될 거야.)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "(기존 32비트 환경의 공간에서는 수적 한계가 있었지만, 64비트 환경에서 표현할 수 있는 최대의 값, 18,446,744,073,709,551,615라는 값을 대입하는 거야. 바로 실행하자!)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "...너도, 상당히 위험한 기술을 갖고 있네?",
                character: 'clonihil_face_suspect',
                name: '클로니 힐',
                background: 'finalBossMeet',
            },
            {
                text: "?!!!",
                character: 'openion_face_embarrassed',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "아무 말도 안 했는데, 정말 눈치가 빠르시네요. 하지만 이미 프로세스는 「진행 중」이에요!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "그래? 사실, 분위기가 바뀌었길래 그냥 떠 본 거야. 뭘 하려는 건진 몰라도, 그럼 완전히 실행되기 전에 널 제압해서 이 공간에서 나가면 되겠네.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'finalBossMeet',
            },
            {
                text: "(COMMIT(적용) 연산이 실행되기까지 걸리는 시간은 60초가량… 그동안은 어떻게든 저 사람과 대치해서 버텨야 해!)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            // 히든 보스전 패배 시 = index 11
            {
                text: "...역시 틀렸나.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "뭘 한 거야? 어제 봤던 것과는 다른 기술인 것 같긴 한데, 별 것 없네.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'finalBossMeet',
            },
            {
                text: "...",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "(나에게 유리한, 이 디지털 공간에서만 사용할 수 있는 꼼수를 생각했어야 하는데…)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "(저 사람을 상대로, 정상적이고 상식적인 방법으로는 승산이 전혀 보이지 않는다고…)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "(하, 모르겠다.)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "신경 쓸 여유가 있으세요? 그런 것도 여기까지예요. 전 어떻게든 당신을 막을 거니까!",
                character: 'openion_face_dark',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "곧 슈팅 게임이 시작될 예정입니다. 조작법은 방향키로 이동, 스페이스바(Space)로 탄막 발사. 특이점으로, 쉬프트(Shift) 키를 눌러 특수 기술을 사용할 수 있습니다. 준비됐다면 [다음]을 눌러주세요.",
                character: null,
                name: '시스템 안내',
                background: 'digitalBackground_final',
            },
        ];
        this.choiceResult = null;
    }

    create() {
        // create()에서 HiddenBattleClear 값을 다시 확인
        this.HiddenBattleClear = sessionStorage.getItem("HiddenBattleClear") === "true";

        // 값이 즉시 반영되도록 currentIndex 설정
        if (this.HiddenBattleClear)
            this.currentIndex = 0;
        else 
            this.currentIndex = 10;

        this.visualNovelModule = new VisualNovelModule(this);
        this.visualNovelModule.createUI();
        this.onNextDialogue();
    }

    onNextDialogue() {
        console.log(this.currentIndex);
        if (this.HiddenBattleClear && this.currentIndex === 10)
            this.currentIndex = this.dialogues.length-1;
        
        // 대사 출력 진행
        if (this.currentIndex < this.dialogues.length) {
            const dialogue = this.dialogues[this.currentIndex];
            this.visualNovelModule.updateDialogue(dialogue, () => {
                this.currentIndex++;
                this.onNextDialogue();
            });
        } else {
            this.endScene();
        }
    }
    
    endScene() {
        this.scene.stop('HiddenScene');
        this.scene.start('FinalBattleScene');
    }
}