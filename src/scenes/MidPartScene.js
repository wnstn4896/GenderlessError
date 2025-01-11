import { VisualNovelModule } from './VisualNovelModule.js';

export class MidPartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MidPartScene' });
        this.dialogues = [
            {
                text: "... 이겼어. 끝난 건가?",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'digitalBackground',
            },
            {
                text: "그때, 디지털 공간 밖에서 목소리가 들려온다.",
                character: null,
                name: '나레이션',
                background: 'digitalBackground',
            },
            {
                text: "오, 신기하네. 그런데, 역시 그건 가상 세계일 뿐이지?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'digitalBackground',
            }, 
            {
                text: "이제 현실로 돌아와.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'digitalBackground',
            },
            {
                text: "크윽…!",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'clonihil_lab',
            },
            {
                text: "어...?!",
                character: 'openion_face_embarrassed',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "왜 그래?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "분명, 분명 디지털 공간에서 사살했는데, 어떻게 살아있는거죠..? 그 몸…",
                character: 'openion_face_embarrassed',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "아, 이 몸 말이야?",
                character: 'clonihil2_face',
                name: '클로니 힐(두 번째 몸)',
                background: 'clonihil_lab',
            },
            {
                text: "너, 방금 그건 두 번째 몸이 생기고 나서 생긴 능력이지? 디지털 공간을 생성하는 그 능력 말이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...네 아마 초능력? 같은거 아닐까요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "너 뿐만 아니라, 나도 그런 게 있어. 난 '죽은 사람을 되살리는 능력'이 생겼지. 나 자신에게도 적용할 수 있어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...뭐, 노화로 인한 사망자는 못 살리지만 말이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...!! 그게.. 가능한 거에요?",
                character: 'openion_face_embarrassed',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "아니, 현대 의학으로는 당연히 불가능한거지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "죽은 사람을 되살리는 것. 그냥 되살린다는 의미보다는, 죽은 ‘상태’의 생물을 죽기 전 ‘상태’로 되돌린다고 보는게 더 정확해.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "이 능력을 응용해서, 시신의 모습을 생전 모습으로 보이게 되돌려서 모습 몸에 있던 상처나 혈흔을 제거해서 증거인멸을 할 수 있었지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...그나저나, 역시 그런가.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "그런가라니, 뭐가요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "십여 년 전, 이 나라, 루펠프가 어떤 국가와의 전쟁에서 승리한 역사는 알고 있지? 근데, 그 ‘어떤 국가’에 대해서는 다들 모르겠지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "네. 설마 알고 계세요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "그 국가는 ‘텔로이브’라고 하는 나라였지. 전쟁 당시까지 전 세계 1위의 기술력을 자랑하는 과학강국이었어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "!! 그런 얘기는 처음 듣는데요…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "당연히 그렇겠지. 국제기구 주도 하에 텔로이브에 대한 모든 기록이 말소됐고, 텔로이브 사람들은 루펠프의 뇌과학 기술로 기억이 지워진 채 루펠프 국민으로 편입됐으니까.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "나도 텔로이브 출신이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "네? 텔로이브 사람들은 기억이 지워졌다면서요? 당신은 어떻게…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "잠깐, 그, 그러면 저도 텔로이브 사람이었던 건가요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "아니, 걱정 마. 넌 순혈 루펠프 국민이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "궁금하지? 그걸 이해하려면 먼저 우리가 가진 ‘두 번째 몸’의 원리에 대해 알아야 돼.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "너, 두 번째 몸이 언제부터 생겼지?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "중학교에 다닐 때쯤부터 갑자기 생겨났어요.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "역시 그렇네, 나도 그쯤부터였거든.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "기록이 말소됐다보니 나도 정확한 원리는 모르지만, 추측해보자면…",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "임신에서 출산까지의 과정이 압축된 방법으로 또 다른 신체가 본체에 자리잡고 있다가 2차 성징이 형성될 때 세포 형태로 압축되어 있던 그 신체가 ‘발현’되는거지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "그 몸은 ‘갑자기’ 생겨난게 아니라 눈에 보이지 않는 무형 상태로 계속 존재하다가 2차 성징이 형성되는 시기에 그제서야 완전한 신체로 거듭난거라 보면 되지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },        
            {
                text: "그래. 그렇기에 내 ‘본체’의 기억은 지워도, ‘두 번째 몸’ 자아에 있는 기억은 안 지워졌던거지. 그래서 난 모든걸 기억하고 있어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...신기한 얘기긴 하지만, 갑자기 그 얘기를 하시는 이유가 뭐죠?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "방금 말했잖아? 텔로이브는 전 세계 1위의 과학강국이었다고.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "우리가 두 번째 몸을 가지고나서부터 얻은 이 능력들. 초능력이 아니라 그 당시 실존하던 텔로이브의 과학기술이었다는 거지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "아무래도, 텔로이브가 패전하고 루펠프에 합병되기 전, 그 시기에 존재하던 텔로이브 국민들의 자아가 ‘기억’의 형태로 존재해서 우리의 두 번째 몸의 자아로 이전된게 맞나보네.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "그럼… 두 번째 몸은 도대체 어떻게 생겨난거죠? 우리같은 사람이 또 있나요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "아니, 이 현상을 겪는건 우리 둘 뿐이야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "루펠프-텔로이브 전쟁 당시에 텔로이브에선 전쟁 포로들을 대상으로 불법 인체실험을 했어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "솔직히, 나도 어린 나이였으니 그때 당시의 상황이 정확히 기억나지는 않아.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "하지만, 확실한건… 우리 둘은 그때 모 실험의 영향으로 2차 성징 이후부터 본체의 유전자의 영향을 받아 본체와 빼닮은 성별만 다른 또 다른 신체가 탄생했지. 그때 그 갓난 아기가 너였구나?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...그럴수가…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "너, 대학생이라고 했지? 전공이 뭐지?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "컴퓨터공학인데요…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "역시, 내 생각이 맞나보네.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "의과학자인 나에게 생긴 능력은 죽은 사람을 되살리는 능력, 컴퓨터공학 전공의 대학생인 너는 디지털 공간을 생성하는 능력이 생겼어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "텔로이브 국민들의 자아가 ‘기억’의 형태로 존재한다는 건 내 가설일 뿐이었는데, 이로써 진실임이 밝혀졌네.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "본체, 즉 우리 자신의 자아로 탐구한 학문. 그 분야에 맞춰서 특정 분야의 지식이 두 번째 몸으로 발현되어 전성기 텔로이브 당시의 기술을 구사할 수 있는거야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...그런데, 뭔가 이상한게 있는데요.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "두 번째 몸으로 전성기 텔로이브의 과학기술을 구사할 수 있는 것까진 이해 됐어요.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "그런데, 방금 당신은… 오히려 본체로 기술을 구사해서 죽은 두 번째 몸을 살려낸거 아닌가요?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "맞아. 방금 말했듯이, 두 번째 몸에 이전된 자아는 텔로이브 국민들의 자아가 ‘기억’의 형태로 이전된 거니까.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "그 ‘기억’을 기반으로 기술의 원리를 이해해서 스스로 구사할 수 있게 학습한다면 굳이 두 번째 몸에 의존할 필요가 없지.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...그렇다면, 당신의 기억을 지우면 당신을 막을 수 있겠군요. 아까 당신이 말한, 루펠프의 그 뇌과학 기술로 말이에요.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "뭐, 아이디어는 좋네. 그런데, 그 뇌과학 기술이 아직도 실존한다고 말한 적은 없는데?",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...네?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "처음엔, 불특정 다수를 대상으로 사람들을 납치했던게 아니거든.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "루펠프의 뇌과학자들을 먼저 습격했지. 그리고, 오히려 그들이 개발한 기술로 그들의 기억을 지우고 뇌과학 연구 기록을 전부 삭제했어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "즉, 이제 존재하지 않는 기술이란거야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "...그럴수가..",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "뭐, 루펠프도 텔로이브에 대한 기록을 전부 말소시켰으니, 인과응보야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab',
            },
            {
                text: "당신이 왜 그러는지 이해는 되지만, 그런 짓을 하면 안 되는거잖아요!! 저는 어떻게든 당신을 막을 거예요!",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'clonihil_lab',
            },
            {
                text: "(윽..! 하필 이런 상황에… 머리가 어지러워… 디지털 공간 생성 능력을 무리하게 두 차례나 사용해서 그런가…)",
                character: 'openion2_face_noise',
                name: '오프니온(두 번째 몸)',
                background: 'clonihil_lab_noise',
            },
            {
                text: "말과는 달리, 몸 상태가 안 좋아보이네.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_noise',
            },
            {
                text: "솔직히, 지금 바로 널 제압해서 실험체로 삼고 싶었는데, 생각이 바뀌었어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_noise',
            },
            {
                text: "넌 용기가 있네. 다른 사람들과 달리.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_noise',
            },
            {
                text: "하지만, 오히려 무모해 보이기도 하지. 두 번째 몸만 믿고 섣불리 행동하다가 나한테 역관광당한 꼴을 보니…",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_noise',
            },
            {
                text: "오늘의 이 경험을 바탕으로, 더 발전해서 와 봐.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_noise',
            },
            {
                text: "난 지금 황금 알을 낳는 거위를 보는 심정이야. 발전 가능성이 보이니까 흥미로워. 섣불리 배를 가르지 않고 일단 지켜봐야겠어.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_noise',
            },
            {
                text: "오늘은 집에 멀쩡히 돌려보내줄게. 그런데, 다음에 만났을 때 흥미로운 발전 결과를 보여주지 않는다면, 난 즉시 널 죽일거야.",
                character: 'clonihil_face_default',
                name: '클로니 힐',
                background: 'clonihil_lab_noise',
            },
            {
                text: "오프니온은 정신을 잃고 클로니 힐의 연구실에서 쫓겨나 자신의 집으로 이송된다. 하룻 밤이 지나고, 다음 날...",
                character: null,
                name: '나레이션',
                background: null,
            },
            {
                text: "...",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "클로니 힐 박사, 그 사람이 사건의 진범이라는 건 밝혀냈지만, 막상 마주치니 아무것도 못했어. 젠장!",
                character: 'openion_face_dark',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "내가 밝혀낸 진실을 근거로 경찰이나 정부기관에 제보해봐도 그들이 믿어줄리가 없지. 이런 초자연적 현상을 누가 현실이라고 믿겠냐고…",
                character: 'openion_face_dark',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "그러니 나 스스로 해결해야 하는데… 도대체 어떻게 해야하지?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "그 사람의 두 번째 몸, 그렇게 건장한 체격은 아닌, 그저 그런 평범한 성인 남성의 모습이야.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "하지만, 그 사람은 본체, 자기 자신 자체가 유능한 사람이지… 루펠프국립종합대학 의과대학 출신에, 20대 나이에 이학 박사 학위를 취득한 말도 안 되는 천재라고…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "반면, 나는 두 번째 몸에만 의존해서 그 사람한테 섣부르게 덤볐다가 참패했지.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "갑자기 생긴 두 번째 몸, 이 몸에 너무 의존해서는 안 돼.",
                character: 'openion2_face_default',
                name: '오프니온(두 번째 몸)',
                background: 'openion_house_offTV',
            },
            {
                text: "그 사람이 말한대로… 나도, 나 스스로를 발전시켜야 해.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "하지만, 화려한 이력을 가진 그 사람과는 달리, 난 그저 평범한 대학생일 뿐인데…",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "도대체 어떻게 해야 그 사람을 막을 수 있을 정도로 발전할 수 있지?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "시간도 여유롭지 않아. 지금 당장도 계속 실종 사건이 발생하고 있을 거라고.",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "뭘 해야 할까?",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "[대사 미완성] - 추가 예정",
                character: 'openion_face_default',
                name: '오프니온',
                background: 'openion_house_offTV',
            },
            {
                text: "곧 슈팅 게임이 시작될 예정입니다. 조작법은 방향키로 이동, 스페이스바(Space)로 탄막 발사. 준비됐다면 [다음]을 눌러주세요.",
                character: null,
                name: '시스템 안내',
                background: 'digitalBackground_final',
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
        if (this.currentIndex === 4) {
            // 공격받은 연출
            this.cameras.main.flash(1500, 255, 0, 0);
        }
        
        if (this.currentIndex === 74) {
            // 공격받은 연출
            this.cameras.main.flash(2000, 0, 0, 0);
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
        this.scene.start('FinalBattleScene');
    }
    
}