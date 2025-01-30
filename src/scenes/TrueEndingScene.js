import { VisualNovelModule } from './VisualNovelModule.js';

export class TrueEndingScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TrueEndingScene' });
        this.dialogues = [
            {
                text: "(됐어! COMMIT(적용) 연산까지 완료됐어. 성공이야!)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'finalBossMeet',
            },
            {
                text: "와, 이런 건 예상 못 했네. 뭐야, 이건?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'digitalBackground_final',
            },
            {
                text: "당신은 죽어도 계속해서 다시 되살아날 수 있죠. 그렇다면, 계속 반복되는 죽음, 무한히 반복되는 프로세스를 통해 당신을 무력화 시킬 거예요!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'digitalBackground_final',
            },
            {
                text: "...",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'digitalBackground_final',
            },
            {
                text: "대단하네, 난 죽어도 되살아날 수 있으니까 날 죽이는 건 절대 불가능하다고 판단하고, 계속해서 죽음과 부활을 반복시켜서 무력화시킨다는 거. 창의력이 대단해.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'digitalBackground_final',
            },
            {
                text: "그래요. 아무튼, 당신은 이제 끝이에요!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'digitalBackground_final',
            },
            {
                text: "그래. 받아들일게.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'digitalBackground_final',
            },
            {
                text: "(...? 뭐지? 이렇게 간단히 순응한다고?)",
                character: 'openion_face_embarrassed',
                name: '오프니온',
                background: 'digitalBackground_final',
            },
            {
                text: "확실히 넌 다른 사람들과 달라서, 흥미롭다니까. 그래서, 일부러 널 살려둔 건데. 어쩔 수 없네.",
                character: 'clonihil_face_suspect',
                name: '클로니 힐',
                background: 'digitalBackground_final',
            },
            {
                text: "...!!!",
                character: 'openion_face_embarrassed',
                name: '오프니온',
                background: 'digitalBackground_final',
            },
            {
                text: "...",
                character: 'openion_face_dead',
                name: '오프니온',
                background: 'digitalBackground_final',
            },
            {
                text: "!!!!!",
                character: 'openion2_face_embarrassed',
                name: '오프니온(두 번째 몸)',
                background: 'digitalBackground_final',
            },
            {
                text: "다른 남자들과는 다른 특이한 모습이 흥미로워서 널 실험 재료로 삼고 싶었는데, 아쉽게 됐어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'digitalBackground_final',
            },
            {
                text: "내 프로젝트가 성공한다면, 역사적으로도 독보적인, 인류의 혁신을 일으킬 수 있었는데 말이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'digitalBackground_final',
            },
            {
                text: "뭐, 역사는 승리한 자의 편이니까, 내가 쓰고 있던 역사의 한 부분은 틀렸다는 거겠지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'digitalBackground_final',
            },
            {
                text: "내가 행한게 잔혹하고 비인도적이라는 건 인정해. 하지만, 말보다는 행동이 더 중요한 것. 물리적인 방법이 가장 확실한 방법일 텐데 말이야.",
                character: 'clonihil_face_suspect',
                name: '클로니 힐',
                background: 'digitalBackground_final',
            },
            {
                text: "과연, 그 외에 다른 방법으로 혁신을 이뤄낼 수 있을까? 잘 해보셔.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'trueEnding_digital',
            },
            {
                text: "클로니 힐은 봉인되기 직전, 클로니 힐은 오프니온(본체)을 살해한다. 그리고 클로니 힐은 디지털 공간에 갇힌 채, 오프니온의 두 번째 몸은 디지털 공간에서 나오게 된다.",
                character: null,
                name: '나레이션',
                background: null,
            },
            {
                text: "...",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final2',
            },
            {
                text: "죽었어. 나, 완전히 죽었다고...",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final2',
            },
            {
                text: "그 사람, 그렇게 순식간에, 간단히 날 죽일 수 있었으면서…",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final2',
            },
            {
                text: "날 실험 재료로 삼기 위해 여태 일부러 날 죽이지 않고 생포만 하려고 힘 조절을 한 거야…",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final2',
            },
            {
                text: "...정말, 그 정도로 독한 사람은 처음 봤어. 최악이야.",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final2',
            },
            {
                text: "일단, 이 몸은 살아있으니까… 디지털 공간이 소멸한 느낌은 안 들어. 그래서 그 사람을 디지털 공간에 봉인한 건 확실해.",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final2',
            },
            {
                text: "그 사람 성격상, 포기하지도 않고 계속 되살아나겠지. 단 하나의 가능성 하나만을 말이야.",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final2',
            },
            {
                text: "뭐, 그 사람이 그 공간에서 나오려면 적어도 18,446,744,073,709,551,615번 이상 되살아나야 하니, 그 사람이 다시 되돌아올 걱정은 안 해도 될거야. 그 전에 내 수명이 다해서 디지털 공간과 함께 그 사람도 소멸하겠지.",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final2',
            },
            {
                text: "모든 일이 끝나고, 끝나고 이 현장에 렌보우 형사가 뒤늦게 등장한다.",
                character: null,
                name: '나레이션',
                background: 'murderscene_final2',
            },
            {
                text: "...!!! 뭐야?!",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene_final3',
            },
            {
                text: "자네는, 어제 그 학생 아닌가?",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene_final3',
            },
            {
                text: "...",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final3',
            },
            {
                text: "잠깐, 클로니 힐 박사는 어디 갔어?",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene_final3',
            },
            {
                text: "...설마",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene_final3',
            },
            {
                text: "클로니 씨도 실종된 건가…?!",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene_final3',
            },
            {
                text: "(그 사람이 실종됐다고 착각하고 있나 보네… 이 일을 설명할 수도 없고…)",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final3',
            },
            {
                text: "(무엇보다, 몸에 충격이 너무 커… 말도 못 할 정도라고…)",
                character: 'openion2_face_tired',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final3',
            },
            {
                text: "거기 학생, 그러고 있지 말고, 무슨 말이라도 해봐!",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene_final3',
            },
            {
                text: "...윽!",
                character: 'openion2_face_noise',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene_final_noise',
            },
            {
                text: "오프니온은 정신을 잃고 쓰러진다. 그로부터 몇 년이 흐른다.",
                character: null,
                name: '나레이션',
                background: null,
            },
            {
                text: "...그 일이 있고나서, 몇 년이 흘렀지.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "이 몸은 무연고자 상태라 앞으로 어떻게 해야 되나 내심 고민했는데, 렌보우 형사님의 도움으로 새로운 신원을 얻었어.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "같은 나이대의 남들에 비해 시기는 조금 늦어졌긴 하지만, 내 원래 몸으로 갖고 있었던 이력들은 어떻게든 다시 복원해서 루펠프국립종합대학교에 다시 들어갔고, 무사히 졸업까지 했지.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "그리고 남들처럼 멀쩡히 사회생활을 하고 있어. 약간의 변화가 있긴 하지만, 자잘한 건 신경 쓸 필요 없고, 기존과 달라진 건 크게 한 가지. 성별뿐이지.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "...그런데, 이 느낌은 대체 뭘까.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "도대체 뭘까, 이 묘한 불쾌감은…",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "본래 남자였던 나로서는, 여자로서의 삶이 너무 부자연스럽고, 적응하기 힘들어.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "그래서 되도록 성별을 강조할 일 없이, 중성적인 태도를 취하고 있지만, 살아가면서 결국 ‘여자’로서의 성역할에 맞는 행동을 해야만 하지.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "그러고 보니 남자였을 때도 마찬가지였어. 아무리 중성적으로 살아가려 해도, 살다 보면 ‘남자’라는 성별을 강조해야 될 일이 꼭 생기지. 필연적으로 말야.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "많은 사람들이 성별의 경계를 허문 젠더리스 문화니, 젠더 이퀄리티니 뭐니 주장하던데… 하, 웃기지들 말라지.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "입만 산 사람들이 정말 많아. 성별에 구애받지 않는 성평등 사회라고? 내가 두 쪽 다 경험해 보니 결국 생물학적인 차이 때문에 성별 구분이 생길 수밖에 없어. 무엇보다, 19세기 때나 유행하던 낡아빠진 성평등 이념이 현대에 유효하게 작용할 리 없지.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "아무리 다양한 시도를 해봤자, 모든 사람들은 자신이 태어난 성별에 의한 성 역할에서 결국 벗어나지 못해.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "자신이 태어난 성별과 정신적 성별이 일치하지 않는다고 주장하는 사람들도 생물학적으로, 본질적인 틀에서 벗어나지 못하지.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "그저 여자 흉내를 내는 남자, 남자 흉내를 내는 여자가 될 뿐. 자신이 태어난 성별에 의한 운명은 바뀌지 않아.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "글쎄, 내 눈에는 단점만 보이는데. 여성 신체로서의 단점과 남성 신체로서의 생물학적 단점만 보인다고.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_recall',
            },
            {
                text: "내가 행한게 잔혹하고 비인도적이라는 건 인정해. 하지만, 말보다는 행동이 더 중요한 것. 물리적인 방법이 가장 확실한 방법일 텐데 말이야.",
                character: 'clonihil_face_suspect',
                name: '클로니 힐',
                background: null,
            },
            {
                text: "과연, 그 외에 다른 방법으로 혁신을 이뤄낼 수 있을까? 잘 해보셔.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: null,
            },
            {
                text: ".....",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "아니야, 아무리 봐도 그건 아니야. 그 사람의 행위는 용납될 수 없어.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "...그치만",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "아무리 깊게 생각해봐도, 사람들은 각자가 태어난 성별에 의해 결정되는 운명에서 벗어날 수 없어.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "성평등을 위해 ‘~을 해야 한다’라고 주장하는 사람은 많아도, 성평등을 위해 ‘~할 수 있다’고 주장하는 사람은 손에 꼽지.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "본인들도 내심 알고 있는 거야. 현재로서는 할 수 있는 게 정말 한정적이라는걸. 그래서 지나치게 미래지향적인 주장을 통해 비현실적인 가치를 좇지.",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
            },
            {
                text: "...‘현재’를 살아가는 ‘우리’는, 성별에 의한 불합리한 요소를 제거하기 위해, 도대체 무엇을 할 수 있을까?",
                character: 'openion2_face_future',
                name: '오프니온(두 번째 몸)',
                background: 'trueEnding_future',
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

        if (this.currentIndex === 9 || this.currentIndex === 10)
            this.cameras.main.flash(300, 255, 0, 0);

        if (this.currentIndex === 17)
            this.cameras.main.flash(2000, 204, 0, 255);

        if (this.currentIndex === 52 || this.currentIndex === 55)
            this.cameras.main.flash(2000, 70, 70, 70);

        console.log(this.currentIndex);

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
        window.location.reload();
    }
}