import { VisualNovelModule } from './VisualNovelModule.js';

export class EarlyPartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EarlyPartScene' });
        this.dialogues = [
            {
                text: "이곳은 사건 현장. 사건 현장에는 폴리스 라인이 설치되어 있고, 사건 담당 형사인 렌보우 형사와 수사 협조인으로 파견된 국립 중앙연구원 소속의 클로니 힐 박사가 시신을 조사하고 있다.",
                character: null,
                name: '나레이션',
                background: null,
            },
            {
                text: "사망이 확인된 시신인데, 혈흔도 없고, 상처도 없고… 클로니 씨, 정밀 부검 진행 상황은 어떻습니까?",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene',
            },
            {
                text: "이번 건도 특이점은 없네요. 독극물에 노출된 흔적도 없고 생물학 정보 분석 결과도 이상 없습니다.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'murderscene',
            },
            {
                text: "역시 그렇군요… 젠장, 분명 타살인건 확실한데, CCTV에도 잡히지 않고… 이걸 어떻게 해야 되는거야?",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene',
            },
            {
                text: "...응? 거기 학생. 여기 들어오면 안 되는데.",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene',
            },
            {
                text: "아니, 그.. 들어가려는게 아니라..",
                character: 'openion2_face_embarrassed',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene',
            },
            {
                text: "(이 몸은 신원이 없는 무연고자 상태야. 괜히 특정되면 곤란해질 수 있어. 하지만… 지금 아무것도 못하고 돌아간다면 이 몸에 대한 비밀을 밝혀내는 것도 멀어질 것 같아. 어떡하지?)",
                character: 'openion2_face_embarrassed',
                name: '오프니온(두 번째 몸)',
                background: 'murderscene',
            },
            {
                text: "오프니온은 두 번째 몸이 있는 사건 현장에 본체를 이끌고 가기로 결단한다. 그렇게 도착한 오프니온.",
                character: null,
                name: '나레이션',
                background: 'murderscene',
            },
            {
                text: "뭐야. 심지어 한 명이 아니네? 학생들. 여기 일반인 출입 금지라니까?",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene',
            },
            {
                text: "저.. 그래도 수사에 방해되지 않는 선에서 뒤에서 조금만 지켜보면 안 될까요? 혹시나 제가 도움을 드릴 수 있는지…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene',
            },
            {
                text: "아니, 이게 뭐 작은 사건도 아니고 사람 시신을 갖고 수사하는건데 심각한거 안 보이나?",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene',
            },
            {
                text: "아, 괜찮습니다. 어차피 시신 분석 자체는 끝났으니까요.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'murderscene',
            },
            {
                text: "그렇지만… 음… 그러시다면 뭐..",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene',
            },
            {
                text: "그럼 쫓아내진 않겠지만, 수사에 방해되는 행동은 일체 금지한다.",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene',
            },
            {
                text: "알겠습니다.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene',
            },
            {
                text: "...그런데, 둘이 엄청 닮았네. 둘이 무슨 사이인가요? 남매인가?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'murderscene',
            },
            {
                text: "아.. 그.. 얘는...",
                character: 'openion_face_embarrassed',
                name: '오프니온',
                background: 'murderscene',
                choices: [
                    {
                        text: "친동생이에요.",
                        action: () => { this.relation = "sister"; }
                    },
                    {
                        text: "사촌동생이에요.",
                        action: () => { this.relation = "cousin"; }
                    },
                    {
                        text: "그냥 친구에요.",
                        action: () => { this.relation = "friend"; }
                    },
                ],
            },
            // '그냥 친구에요.' 선택 시 - Index 17 -> Index 16 돌아가서 되묻기
            {
                text: "친구라고요? 친구라기엔 너무 똑같이 닮았는데, 혈연 관계 아닌가요?",
                character: 'clonihil_face_suspect',
                name: '클로니 힐',
                background: 'murderscene',
            },
            // 친동생이나 사촌동생 선택 시 - Index 18
            {
                text: "그런가. 그럼 닮았을만도 하지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'murderscene',
            },
            {
                text: "...",
                character: 'clonihil_face_suspect',
                name: '클로니 힐',
                background: 'murderscene',
            },
            {
                text: "... 왜 저러시지..?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene',
            },
            {
                text: "이상한 분위기를 감지했지만, 일단 넘어가는 오프니온. 잠시 후...",
                character: null,
                name: '나레이션',
                background: 'murderscene',
            },
            {
                text: "이번 수사 건도 별 소득이 없군요. 그만 돌아갑시다. 클로니 씨.",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene',
            },
            {
                text: "네.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'murderscene',
            },
            {
                text: "학생도 이제 그만 가. 수사 끝나서 볼 것도 없을 텐데.",
                character: 'renbow_face_default',
                name: '렌보우 형사',
                background: 'murderscene',
            },
            {
                text: "...알겠습니다.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene',
            },
            {
                text: "수사가 일단락되고, 렌보우 형사와 클로니 힐 박사는 사건 현장을 떠난다.",
                character: null,
                name: '나레이션',
                background: 'murderscene2',
            },
            {
                text: "(현장에 오긴 왔지만, 막상 제대로 본 건 없어… 나 혼자라도 남아서 뭐라도 찾아봐야 할까?)",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene2',
                choices: [
                    {
                        text: "현장에 남아서 뭐라도 찾아본다",
                        action: () => { this.choiceResult = "stay"; }
                    },
                    {
                        text: "집에 돌아간다",
                        action: () => { this.choiceResult = "leave"; }
                    },
                ],
            },
            // '집에 돌아간다' 선택 시 - Index 28
            {
                text: "...하지만, 지금이 아니면 기회가 없을 확률이 높아. 일반인이 사건 현장에 들어왔는데 허락받은 것 자체가 기적이라고...",
                character: 'openion_face_embarrassed',
                name: '오프니온',
                background: 'murderscene2',
            },
            // '현장에 남아서 뭐라도 찾아본다' 선택 시 - Index 29
            {
                text: "그래. 뭐라도 찾아보자.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene2',
            },
            {
                text: "...응? 저건 뭐지…?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene2',
            },
            {
                text: "시신은 경찰이 회수했는데… 미처 회수하지 못하고 흘린 것들인가?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene2',
            },
            {
                text: "음… 흘릴만 하네.. 물건 자체가 있는게 아니라 전부 다 훼손된 것들이잖아?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene2',
            },
            {
                text: "다 끊어진 목걸이 파편이랑, 다 부서진 손목시계, 그리고 원래 어떤 물건인지 추정도 안 되는 부품의 파편. 정말 도움 안 되긴 하네…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene3',
            },
            {
                text: "그래도, 나는 다르지. 내 두 번째 몸으로 구사할 수 있는 초능력… ‘내가 설정한 컴퓨터 연산 구조가 적용되는 「디지털 공간」을 생성해서 그 공간에 실제 사물과 인물을 로드(Load)하는 능력’이라면…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene3',
            },
            {
                text: "훼손된 물건의 흔적뿐이지만, 그 공간에 이 흔적들을 로드(Load)하고, 연속성을 가진 함수적 속성을 적용해서 이 물체들이 가진 벡터 구조를 차근차근 이어나가면, 이 물건을 원상태 그대로 복구할 수 있어",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene3',
            },
            {
                text: "이 물건들을 원상태로 복구해서 이산적 구조를 탐색해본다면, 남들이 찾지 못하는 증거를 찾을 수 있을지도 몰라. 나만 할 수 있는 특수한 방법의 디지털 포렌식인거지.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene3',
            },
            {
                text: "그치만, 이 능력을 사용할 땐 뇌를 너무 많이 사용해서 그런지 머리가 어지러워지니까… 연속 사용은 안 되고, 기회는 한 번 뿐이야. 이 중 하나를 골라서 로드(Load)해야 하는데, 뭘 골라야 할까?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'murderscene2',
                choices: [
                    {
                        text: "끊어진 목걸이 파편",
                        action: () => { this.choiceResult = "necklace"; }
                    },
                    {
                        text: "부서진 손목시계",
                        action: () => { this.choiceResult = "watch"; }
                    },
                    {
                        text: "어떤 부품의 파편",
                        action: () => { this.choiceResult = "fragments"; }
                    },
                ],
            },
            {
                text: "오프니온은 두 번째 몸으로 하나의 흔적을 디지털 공간에 불러와 복원 작업을 한다. 잠시 후...",
                character: null,
                name: '나레이션',
                background: 'digitalBackground',
            },
            // '끊어진 목걸이 파편' 선택 시 - Index 39
            {
                text: "역시.. 그냥 진주 목걸이일 뿐이잖아?",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_necklace',
            },
            {
                text: "목걸이에 있는 체취라던지, 아니면 목걸이에 묻은 지문을 분석할 수 있다면 좋겠지만…",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_necklace',
            },
            {
                text: "흩어진 벡터 구조를 강제로 이어서 물건의 형체를 복원한 것뿐이니 냄새나 지문같은건 재현할 수 없어.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_necklace',
            },
            {
                text: "게다가, 복원하기 전에는 이미 목걸이 장식으로 있는 진주들이 흙먼지에 뒤덮여 있었으니 체취나 지문이 남아있을 리가 없지.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_necklace',
            },
            {
                text: "...역시 헛수고였나",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_necklace',
            },
            // '부서진 손목시계' 선택 시 - Index 44
            {
                text: "손목시계의 형체는 복원했지만…",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_watch',
            },
            {
                text: "이건 그냥 아날로그식 초침 시계잖아?",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_watch',
            },
            {
                text: "응? 이쪽에 작은 버튼이 있네?",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_watch',
            },
            {
                text: "버튼을 누르자, 비명 소리와 함께 낯익은 목소리가 들린다.",
                character: null,
                name: '나레이션',
                background: 'digital_watch',
            },
            {
                text: "꺄아악-!!!",
                character: null,
                name: '???',
                background: 'digital_watch',
            },
            {
                text: "어차피 당신은 살아있어도 인류에 도움이 되지 않아. 그냥 죽으셔.",
                character: null,
                name: '???',
                background: 'digital_watch',
            },
            {
                text: "...뭐지? 녹음 기능이 있구나. 한 순간 뿐이지만…",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_watch',
            },
            {
                text: "비명 소리는 이 시계를 착용하고 있던 사람의 비명 소리인 것 같고… 그 다음에 들리는 목소리는 뭔가 낯이 익은데…",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_watch',
            },
            {
                text: "아까 사건 현장에 수사 협조인으로 나온 국립 중앙연구원 소속 의과학자. 그 분 목소리랑 비슷한 것 같지만 확신할 순 없어.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_watch',
            },
            {
                text: "스마트 워치였다면 내장메모리에 저장되어 있었던 데이터까지 ‘재현’해서 사건 당시에 기록된 내용을 더 자세하게 확인해볼 수도 있었을 텐데…",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_watch',
            },
            {
                text: "...뭐, 그래도 단서 하나는 찾은 것 같아.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_watch',
            },
            // '어떤 부품의 파편' 선택 시 - Index 55
            {
                text: "이건… 스마트 워치?",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "이거야! 스마트 워치에 내장메모리에 저장되어 있었던 데이터까지 ‘재현’해서 사건 당시에 기록된 내용을 확인해볼 수 있어.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "복원한 내장메모리에 접근해서 데이터를 조회해보자.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "스마트 워치 속 데이터로 볼 수 있는건 실시간 녹음 자료와 심박수 측정 자료 정도가 한계야…",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "녹화 자료도 있긴 하지만, 손목에 착용하고 있던 것이다보니 구도가 좋지 않아서 제대로된 건 보이지 않아.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "일단, 심박수가 정상인걸 보면 아직 피해자가 살해당하지 않은 상태야. 아마 사건 발생 직전인가 보네.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "꺄아악-!!!",
                character: null,
                name: '???',
                background: 'digital_fragments',
            },
            {
                text: "...?! 무슨 소리지? 심박수 측정값도 낮아졌어.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "지금인가…? 녹화 자료를 조회해보자.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "....화면에 비치는 저 사람은 누구지? 잘 보이진 않지만…",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "그러다가 갑자기 스마트 워치가 부서지는 소리가 들리며 마지막으로 기록된 심박수 기록 값이 0이 된 것을 확인한 오프니온.",
                character: null,
                name: '나레이션',
                background: 'digital_fragments',
            },
            {
                text: "심박수가 0…",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "죽었어… 분명 저 사람한테 살해당한 거야..",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "아까 사건 현장에 수사 협조인으로 나온 국립 중앙연구원 소속 의과학자랑 어째 좀 닮은 것 같은데…",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "그 사람한테 형제가 있었던가?",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "...그런데, 둘이 엄청 닮았네. 둘이 무슨 사이인가요? 남매인가?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'murderscene_recall',
            },
            {
                text: "...",
                character: 'clonihil_face_suspect',
                name: '클로니 힐',
                background: 'murderscene_recall',
            },
            {
                text: "...",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            {
                text: "...설마?!",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digital_fragments',
            },
            // 증거 수집 씬 종료 이후 공통 씬 전개 - Index 74
            {
                text: "...일단 돌아가자.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digitalBackground',
            },
            {
                text: "어두운 밤, 귀가하는 중 골목길에서 오프니온은 자신을 따라오는 누군가의 인기척을 느낀다.",
                character: null,
                name: '나레이션',
                background: null,
            },
            {
                text: "...",
                character: 'clonihil2_face',
                name: '???',
                background: 'backstreet',
            },
            {
                text: "...아까부터 저를 따라오시는데",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet',
            },
            {
                text: "누구신가요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet',
            },
            // 선택지 값 검사 - Index 79
            {
                text: "...",
                character: 'clonihil2_face',
                name: '???',
                background: 'backstreet',
            },
            {
                text: "누구시냐니까요..?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet',
            },
            {
                text: "!!!",
                character: 'openion_face_default',
                name: '오프니온',
                background: null,
            },
            {
                text: "뭐야, 아까 현장에서 자꾸 알짱대길래 뭐라도 찾았나 싶었더니…",
                character: 'clonihil2_face',
                name: '???',
                background: 'backstreet_attacked',
            },
            {
                text: "뭐, 알아낸 거 없으면 다행이지. 그냥 죽으셔.",
                character: 'clonihil2_face',
                name: '???',
                background: 'backstreet_attacked',
            },
            // 게임 오버 - Index 84
            {
                text: "오프니온은 정체를 모르는 누군가에게 살해당했다.",
                character: null,
                name: '나레이션',
                background: 'gameover',
            },
            {
                text: "...!!!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet',
            },
            {
                text: "당신… 아까 그 의과학자, 클로니 힐 박사님과 관계 있는 사람 맞죠?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet',
            },
            {
                text: "...어머, 무슨 근거로 그런 얘기를 하는거죠?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'backstreet2',
            },
            {
                text: "당신이 여기서 나오다니… 그럼 진짜, 진짜인가요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "뭔가 이상한걸 찾았나 보네요?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'backstreet2',
            },
            {
                text: "당신, 당신이 대규모 실종사건의 범인이죠?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "아, 경어 붙이기 귀찮네. 어차피 내가 연장자니까 말 편하게 할게.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'backstreet2',
            },
            {
                text: "너한텐 말해도 될 것 같네.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'backstreet2',
            },
            {
                text: "맞아. 내가 한거야. 그나저나, 너도 거짓말 했잖아? 아까 신원조회 해보니까, 친족 관계가 아니던데… 너의 그 ‘두 번째 몸’이랑 말이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'backstreet2',
            },
            {
                text: "!!!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "그걸 알고 있다는 건, 역시 당신도…?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "그래. 나도 너랑 같아.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'backstreet2',
            },
            {
                text: "그것보다, 내가 범인인지는 어떻게 알아냈는지 모르겠지만, 증거인멸은 확실하게 했을 텐데… 역시 너, 뭔가 특별한 능력이 있나보네?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'backstreet2',
            },
            {
                text: "...네. 하지만, 지금 그게 중요한게 아니잖아요!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "저도 루펠프국립종합대학교에 다니는 학생이라 알고 있어요.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "의과대학 출신, 그리고 젊은 나이에 이학 박사 학위를 취득한 천재라고, 당신은 유명해요.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "당신같은 사람들이 존재하는 이유는 사람을 살리기 위해서잖아요!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "그런데, 그런 사람이… 이렇게 사람을 막 죽이고 다닌다고요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "뭐, 내가 의과대학 출신인건 맞는데, 죽어가는 사람을 치료하는 일에는 딱히 관심이 없거든.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'backstreet2',
            },
            {
                text: "그게 무슨…!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "게다가, 실종됐다가 발견된 시신은 모두 여자인데, 그럼 실종된 남자들은 어쨌죠?!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'backstreet2',
            },
            {
                text: "...말이 길어질 것 같은데, 여기서 하긴 좀 그러니까, 내 연구실로 따라와.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'backstreet2',
            },
            {
                text: "오프니온은 클로니 힐의 연구실로 따라간다.",
                character: null,
                name: '나레이션',
                background: 'backstreet2',
            },
            {
                text: "...나한테 묻고 싶은게 많겠지. 하지만, 얘기하기 전에 내가 먼저 질문할게.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "넌 성별이 다른, 또 다른 육체를 가졌지. 소감이 어때? 남자 몸과 여자 몸을 둘 다 경험해본 소감 말이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "각자 장단점이 있죠. 솔직히, 좋다고 할 순 없지만… 두 성별 모두가 존재해서 화합을 이루기에 인간 사회가 유지되는 거라고 생각해요.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "...머릿속이 꽃밭인 친구네.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "네? 그러는 당신은요? 당신도 그렇잖아요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "글쎄, 내 눈에는 단점만 보이는데.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "여성 신체로서의 단점과 남성 신체로서의 생물학적 단점만 보인다고.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...아무튼, 무슨 얘기를 하고 싶은거에요? 왜 사람들을 납치했고, 죽이기까지 했냐고요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "그럼 본론부터 말할게. 난 ‘성별’이라는 개념 없이 번식이 가능한 신인류를 탄생시키는게 목적이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "성별이 있기에 인간은 불완전한거라고 생각해. 성별이 없었다면, 인간은 완벽한 생물이었을거야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "네? 인간을 무성생식 동물로 만든다고요? 하지만… 무성생식의 한계는 명확히 밝혀졌잖아요.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "무성생식은 유전자 결합이 아니라 스스로의 세포 분열로 번식하는 방식이기 때문에, 환경 적응에 불리하다는 한계가 있지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "그런데 그게 아니야, 내가 원하는건 두 개체의 유전자 결합 체제는 유지하되, 성별이라는 속성 자체만 제거하는거야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...그건 일단 알겠습니다. 그런데, 대규모 실종 사건을 일으킨 동기라고 하기엔 납득이 안 되는데요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "뭐, 말로는 이해 못 할 거 같아서 일부러 연구실에 데려온거야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "저기 안 쪽을 봐. 여태까지 실종된 남자들이 내 실험의 피험자 역할이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_inside',
            },
            {
                text: "!!.. 모두 여기에 있었군요… 그럼, 당신이 저지른건, 불특정 다수의 사람들을 납치해서, 여자들은 죽이고, 남자들은 불법 실험의 피험자로 삼은거네요…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab_inside',
            },
            {
                text: "...둘 다 잔혹하고 비윤리적인 행위지만, 당신 말대로, 신인류 탄생이 목적이라면, 여자와 남자 모두 실험에 사용했다면 의도만큼은 이해할 수 있는데, 여자들은 왜 죽인거죠?!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab_inside',
            },
            {
                text: "반려동물 중성화수술할 때, 생리적 구조와 수술의 복잡성을 생각해보면, 암컷보다 수컷의 수술이 더 쉽지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_inside',
            },
            {
                text: "네…? 갑자기 무슨…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab_inside',
            },
            {
                text: "사람도 그렇거든.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_inside',
            },
            {
                text: "... !!!!!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab_inside',
            },
            {
                text: "당신, 정말 최소한의 인간성도 없는건가요?! 당신은 누군가를 사랑해본 적은 있나요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab_inside',
            },
            {
                text: "누군가를 사랑해본 적이 있냐고?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_inside',
            },
            {
                text: "글쎄, 없지. 남자든 여자든 둘 다 별로 안 끌리는데.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_inside',
            },
            {
                text: "그럴리가… 그건 그냥 당신에게 맞는 상대를 아직 안 만나봐서 그런거 아닌가요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab_inside',
            },
            {
                text: "우린 두 성별 모두 가졌는데, 이렇게 된 김에 두 쪽 다 사랑하면 되잖아요!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab_inside',
            },
            {
                text: "...너도 똑같네.",
                character: 'clonihil_face_dark',
                name: '클로니 힐',
                background: 'clonihil_lab_inside',
            },
            {
                text: "네?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab_inside',
            },
            {
                text: "남의 사정도 모르고 그렇게 제멋대로 단정 짓는 것 말이야.",
                character: 'clonihil_face_dark',
                name: '클로니 힐',
                background: 'clonihil_lab_inside',
            },
            {
                text: "자신의 생각이 그렇다고 타인도 자신과 같은 생각을 할거라고 착각하고는 하지. 다들 그래. 성급한 일반화의 오류. 내가 제일 싫어하는 건데 말이야.",
                character: 'clonihil_face_dark',
                name: '클로니 힐',
                background: 'clonihil_lab_inside',
            },
            {
                text: "...뭐, 됐어. 여기까지 데려온 김에, 너도 내 피험자가 되어줘야겠어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_inside',
            },
            {
                text: "당하지만은 않아요. 저도 능력이 있거든요!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab_inside',
            },
            {
                text: "(이 두 번째 몸으로 초능력을 쓸 수 있는걸 감안하면, 아마 저 사람도 두 번째 몸만 처리하면 승산이 있을지도 몰라.)",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'clonihil_lab_inside',
            },
            {
                text: "오프니온은 자신의 두 번째 몸과 클로니 힐의 두 번째 몸을 디지털 공간에 불러들여 전투를 준비한다.",
                character: null,
                name: '나레이션',
                background: 'digitalBackground',
            },
            {
                text: "...",
                character: 'clonihil2_face',
                name: '클로니 힐(두 번째 몸)',
                background: 'digitalBackground',
            },
            {
                text: "곧 슈팅 게임이 시작될 예정입니다. 조작법은 방향키로 이동, 스페이스바(Space)로 탄막 발사. 준비됐다면 [다음]을 눌러주세요.",
                character: null,
                name: '시스템 안내',
                background: 'digitalBackground',
            },
        ];
        this.currentIndex = 0;
        this.choiceResult = null;
        this.relation = null; // 본체와 두 번째 몸 간의 관계 답변 값
    }

    create() {
        this.visualNovelModule = new VisualNovelModule(this);
        this.visualNovelModule.createUI();
        this.onNextDialogue();
    }

    onNextDialogue() {
        // '친구' 선택 시 되묻는 대사 처리
        if (this.relation === "friend" && this.currentIndex === 18) {
            this.relation = null;
            this.currentIndex = 16; // 되묻는 대사로 돌아감
        }    
        // '친동생' 또는 '사촌동생' 선택 시 18번 대사를 건너뛰고 19번으로 진행
        if ((this.relation === "sister" || this.relation === "cousin") && this.currentIndex === 17) {
            this.currentIndex = 18; // 18번 대사로 바로 진행
        }

        // 사건 현장에 남을지, 집에 돌아갈지 선택
        if (this.choiceResult === "leave" && this.currentIndex === 29) {
            this.choiceResult = null;
            this.currentIndex = 27; // 되묻는 대사로 돌아감
        }
        if (this.choiceResult === "stay" && this.currentIndex === 28) {
            this.choiceResult = null;
            this.currentIndex = 29; // 되묻는 대사 생략
        }

        // 사건 현장 증거 수집 씬에서 증거물 선택 결과에 따른 분기
        if (this.choiceResult === "necklace" && this.currentIndex === 44) {
            this.currentIndex = 74; // 목걸이 복구 씬 완료 후 공통 씬 전개
        }
        if (this.choiceResult === "watch" && this.currentIndex === 39) {
            this.currentIndex = 44; // 손목시계 복구 씬 전개
        }
        if (this.choiceResult === "watch" && this.currentIndex === 55) {
            this.currentIndex = 74; // 손목시계 복구 씬 완료 후 공통 씬 전개
        }
        if (this.choiceResult === "fragments" && this.currentIndex === 39) {
            this.currentIndex = 55; // 부품의 파편(=스마트워치) 복구 씬 전개
        }

        // 골목길 씬 선택지 점수 검사
        if (this.currentIndex === 79) {
            if (this.choiceResult === "fragments" || (this.relation === "cousin" && this.choiceResult === "watch")){
                this.choiceResult = "pass";
                this.currentIndex = 85; // 게임 오버 관련 대사 생략
            }
        }
        else if (this.currentIndex === 82){
            this.cameras.main.flash(1000, 255, 0, 0); // 빨간 플래시
        }
        else if (this.currentIndex === 84){
            this.endScene(); // 게임 오버 대사 출력 후 씬 종료
        }
    
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
        if (this.choiceResult === "pass") {
            this.scene.stop('EarlyPartScene');
            this.scene.start('ShooterScene'); // 2D 슈팅 게임 이동
        } else {
            window.location.reload();
        }
    }
}
