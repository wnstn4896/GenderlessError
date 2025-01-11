import { VisualNovelModule } from './VisualNovelModule.js';

export class DefeatEndingScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DefeatEndingScene' });
        this.dialogues = [
            {
                text: "결국 클로니 힐을 저지하지 못했다. 그로부터 몇 년 후…",
                character: null,
                name: '나레이션',
                background: null,
            },
            {
                text: "어머, 이제 나한테 넘어왔네.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: null,
            },
            {
                text: "...",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "넘어왔다니, 그게 무슨 소리냐고?",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "시치미 떼지 마. 난 당신의 존재를 알고 있거든.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "‘오프니온’이 아니라… 이 모든 일을, 모든 것을 전부 지켜보고 있던 ‘당신’ 말이야.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "당황했나 보네. 내가 어떻게 당신의 존재를 인식할 수 있냐고?",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "...알다시피 나는 죽은 사람을 다시 되살릴 수 있는 능력을 갖고 있지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "그 능력의 원리는 죽은 사람의 육체를 죽기 전 「상태」로 되돌리는 거야. 쉽게 말하면, 특정 생물에게 가해진 ‘시간’을 부분적으로 역행시키는거지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "그래서 무슨 말을 하고 싶은 거냐고?",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "당신도 갖고 있잖아. ‘시간’을 역행하는 능력. 심지어 나보다 더 강한 수준으로.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "내가 직접적으로 체감할 순 없지만, 난 알고 있어. 당신은 이 모든 일련의 사건과 과정을 제거하고 다시 도전할 수 있다는 거. 게다가, 당신은 이 세계 사람이 아님에도 이 세계의 특정 시간대를 이용해 우리 세계에 개입할 수 있지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "즉, 나랑 당신은 같은 계통이라는 거지. 그래서 난 당신을 ‘인식’ 할 수 있는 거고.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "아무튼, 마지막으로 본 날로부터 몇 년이 흘렀어. 나도 이제 나이가 서른이 넘어갔지. 그동안 어떻게 됐는지 궁금하겠지? 그럼 알려주지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "결론부터 말하면, 내 프로젝트는 성공했어. 성별이 없음에도 두 명 간의 유전자 조합을 통해 번식이 가능한 신인류를 탄생시키는 것 말이야. 이 나라 루펠프에서만 국한된게 아니라 전세계 사람들을 대상으로.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_success',
            },
            {
                text: "그런데, 내가 간과한 게 있었어.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_success',
            },
            {
                text: "성염색체의 유전적 조건. 모든 사람들이 동일한 조건을 갖고 있는 건 아니라는 것.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_success',
            },
            {
                text: "신인류로 전환이 가능한 사람이 대부분이긴 하지만, 성염색체 내부의 유전자 문제때문에 전환이 안 되는 경우도 있지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_success',
            },
            {
                text: "그래서 완전하게 성공했다고 하긴 어렵지만, 뭐 어때. 대다수에게 적용됐는데.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_success',
            },
            {
                text: "아, 그리고 나도 예상 못했던 게 있는데…",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_success',
            },
            {
                text: "그렇게 탄생한 신인류들에 한해서, 사실상 성평등이 성립된 거 아닐까? 애당초 성별이 없으니까.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_success',
            },
            {
                text: "하지만, 앞서 말했듯이 신인류로 전환이 안 되는 사람들도 일부 있다고 했지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_success',
            },
            {
                text: "그래서, 성별이 있는 유성생식 체제의 구세대 인류와 성별이 없는 신인류 간의 갈등이 빚어졌어.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_dispute',
            },
            {
                text: "누구나 공통적으로, 사람들은 자신과 다른 비교 대상을 찾아 타인과 다른 점을 가진 자신들을 합리화 하곤 하지. 자기중심적으로 말이야.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_dispute',
            },
            {
                text: "그런데 뭐, 생각해보면 그건 신인류 탄생 전에도 그랬잖아? 비교 대상 중 하나가 성별이었던 때가 있었지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_dispute',
            },
            {
                text: "성별도 그렇고, 모든 사람들은 자신과 다른 점을 가진 타인들을 공감하지 못해.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_dispute',
            },
            {
                text: "자신과 다른 점에 대하여 ‘이해’는 가능해도, 자신이 타인과 같은 공통적인 당사자가 아닌 이상, ‘공감’은 절대로 불가능한 영역이지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_dispute',
            },
            {
                text: "자신과 다른 타인의 조건을 자신에게 직접 적용해본 게 아닌 이상, 타인 관점에 자신을 대입하는건 사실상 공감이 아니라 위선일 뿐이야. 역지사지란 말이 괜히 있는 게 아니라고.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'asexual_dispute',
            },
            {
                text: "당신도 그렇잖아?",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "당신이 내 입장에 ‘공감’하고 있다면, 이렇게 필사적으로 나를 방해하려 하진 않았겠지. 당신과는 관계도 없는 우리 세계에 개입해서까지 말이야.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "...그런데,",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "오프니온 그 친구도 그렇고 다음이 나인거면, 당신이 우리 시점에 투영되는 건 아무래도 옛날 텔로이브쪽 기술인가 보네. 텔로이브 기술력에 직접적으로 영향을 받은 사람에게만 붙을 수 있는거지?",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "하여간, 정말 신기하다니까. 텔로이브 관련 기록이 전부 말소됐다고 하니 찾아볼 의지는 없지만서도, 만약 온전히 남아있다면 연구해보고 싶네.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "아, 오프니온은 어떻게 됐냐고? 당연히 죽었지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house',
            },
            {
                text: "아, 그렇지. 당신이 간과한 게 있어.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house2',
            },
            {
                text: "이제 텔로이브와 연관된 사람은 나뿐이야.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house2',
            },
            {
                text: "그리고, 방금 내가 성평등이니 뭐니 얘기했지만, 난 사실 성평등에는 관심 없어. 그냥 내 프로젝트를 수행하다 보니 그저 부수적으로 발생한 효과일 뿐이지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house2',
            },
            {
                text: "실패한 표본들을 신인류로 전환이 안 되는 ‘구세대 인류’들이라 말했지만, 구세대 인류라고 해봤자 나 이외엔 전부 남자들뿐이야. 남자를 거세시켜서 진행하는 방향이 더 쉽다 보니, 여자들은 굳이 살려둘 필요도 없겠더라고. 그래서 전부 죽였어. 쉬운 방법이 좋은거지 뭐.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house2',
            },
            {
                text: "즉, 전세계에 ‘여자’라고는 나 단 한 명뿐이야. 그래서 종족 번식의 주도권은 오직 나에게 있지. 내가 없으면 구세대 인류는 알아서들 멸종할 거야.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house2',
            },
            {
                text: "당신, 내가 이제 뭘 할 거라고 생각해?",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house2',
            },
            {
                text: "당신은 내가 지금 뭘 할 지 예상 못하겠지만, 난 당신이 뭘 하려는지 예상이 돼.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house2',
            },
            {
                text: "비록 패배해서 이런 상황이 되었어도, 당신은 내 ‘시점’에 투영해서 또다시 날 방해하려고 하겠지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house2',
            },
            {
                text: "하지만, 나도 대응할 방법이 있지.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_house2',
            },
            {
                text: "이제 당신이 투영할 수 있는 ‘시점’은 내가 유일무이하다고. 그래서 내가 없으면 당신은 내 프로젝트가 성공한 이 「시간선」에 개입하지 못할거야.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_suicide',
            },
            {
                text: "그래. 당신이 지금의 이 ‘시간선’에는 개입하지 못하게 할거야. 그런다면 당신은 이 모든 일을 「다시 시작」하는 것밖에 방법이 없겠지. 정 아쉬우면 「다시 시작」 해.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_suicide',
            },
            {
                text: "난 어차피 이제 삶의 여한도 없고… 뭐, 어쨌든 내 목적은 이뤘으니까. 나머지 일은 내 알 바 아니야.",
                character: 'clonihil_face_future',
                name: '클로니 힐',
                background: 'clonihil_suicide',
            },
            
        ];
        this.currentIndex = 0;
        this.choiceResult = null;
    }

    create() {
        this.visualNovelModule = new VisualNovelModule(this);
        this.visualNovelModule.createUI();
        this.onNextDialogue();
    }

    onNextDialogue() {
        if (this.currentIndex === 2 || this.currentIndex === 28 || this.currentIndex === 34 || this.currentIndex === 43) {
            this.cameras.main.flash(1000, 0, 0, 0); // 검은색 플래시
        }
        
        // 대사 출력 진행
        if (this.currentIndex < this.dialogues.length) {
            const dialogue = this.dialogues[this.currentIndex];
            this.visualNovelModule.updateDialogue(dialogue, () => {
                this.currentIndex++;
                this.onNextDialogue();
            });
        } else {
            this.cameras.main.flash(1000, 255, 0, 0);
            this.endScene();
        }
    }
    
    endScene() {
        sessionStorage.setItem("DefeatLog", "true");
        window.location.reload();
    }
    
}