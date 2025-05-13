const dictionary = {
    "썩은물" : "주로 게임에서, 고인물을 넘어선 사람",
    "고인물" : "주로 게임에서, 해당 서비스를 오래 이용해서 실력이 뛰어나거나 경험이 풍부한 사람",
    "관종" : "남의 관심을 끌기 위해 일부러 엉뚱하거나 논란을 일으키는 말을 하는 사람",
    "구독" : "정액제 서비스 이용을 뜻하지만, 요즘은 채널 즐겨찾기나 알림 기능에도 쓰인다",
    "극혐" : "[극도로 혐오하다]의 줄임말",
    "눈팅" : "커뮤니티 등에서 댓글을 쓰는 등 남의 눈에 띄는 행동을 하지 않고 구경만 하는 사람",
    "님" : "처음 보는 아무나를 상대로도 쓸 수 있는 2인칭 대명사",
    "끌올" : "[끌어 올리다]의 줄임말",
    "대나무숲" : "특정 집단의 사람들이 잡담 목적으로 공동으로 사용하는 SNS 계정",
    "댓글" : "다른 이용자가 올린 글에 대해 짧게 올리는 반응글",
    "ㄹㅇ" : "영어로 '진짜'를 뜻하는 단어 'real'을 한글로 적은 (리얼, 레알)의 초성체",
    "방장" : "채팅이나 게임방에서 설정을 관리하고 참여자를 강퇴할 수 있는 방 관리자",
    "베스트 댓글" : "많은 추천을 받고 다른 댓글들보다 우선적으로 노출되는 댓글.",
    "베댓" : "많은 추천을 받고 다른 댓글들보다 우선적으로 노출되는 댓글.",
    "병먹금" : "[병X에게 먹이 금지]의 줄임말",
    "썰" : "사연, 이야기",
    "정모" : "온라인에서 만난 사람들이 오프라인으로 만나는 모임",
    "짤방" : "인터넷 밈 중 이미지 형식인 것",
    "짤" : "인터넷 밈 중 이미지 형식인 것",
    "차단" : "특정 사용자의 접근을 강제로 제한하는, 인터넷상에서의 추방형",
    "추천" : "글이나 댓글에 대한 찬성 의견을 내는 기능.",
    "비추천" : "글이나 댓글에 대한 반대 의견을 내는 기능.",
    "ㅋㅋ" : "웃음소리인 [크크크]를 초성체로 쓴 것",
    "ㅎㅎ" : "웃음소리인 [하하하]를 초성체로 쓴 것",
    "컨셉" : "재미를 목적으로 현실과 다른 다른 인격을 내세우는 행동.",
    "컨셉질" : "재미를 목적으로 현실과 다른 다른 인격을 내세우는 행동.",
    "ㅎㅇ" : "영어로 '안녕하세요'를 뜻하는 'hi'를 한글로 적은 '하이'의 초성체",
    "ㅇㅈ" : "인정하다를 초성체로 쓴 것",
};

window.addEventListener("DOMContentLoaded", () => {
    logMessage("문장 또는 단어를 입력해주세요"); // 첫 진입 시 기본 메시지
});

function translateText() {
    let inputText = document.getElementById("inputText").value.trim().toLowerCase();

    if (inputText === "") {
        logMessage("빈 문장입니다."); // 입력 없을 때도 처리
        return;
    }

    // 1. 전체 문장으로 번역 가능한 경우
    if (dictionary[inputText]) {
        logMessage(dictionary[inputText]);
        return;
    }

    // 2. 단어 단위로 번역
    let words = inputText.split(" ");
    let translatedWords = words.map(word => dictionary[word] || word);
    let translatedSentence = translatedWords.join(" ");
    logMessage(translatedSentence);

    // 3. 모르는 단어 알림
    let unknownWords = words.filter(word => !(word in dictionary));
    if (unknownWords.length > 0) {
        logMessage("사전에 추가 되지 않는 언어입니다.");
    }
}

function logMessage(message) {
    let logDiv = document.getElementById("log");
    logDiv.innerHTML = message;
}

// 엔터키를 눌렀을 때
document.getElementById("inputText").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        translateText();
    }
});