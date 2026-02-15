const questions = [
    // EI
    { question: '파티에서 당신은:', a: '낯선 사람들을 포함하여 많은 사람들과 교류한다', b: '아는 몇몇 사람들과 교류한다', type: 'EI' },
    { question: '당신은 더:', a: '외향적이다', b: '내성적이다', type: 'EI' },
    { question: '당신은 다음 중 무엇을 선호합니까:', a: '짧게 연락하는 많은 친구들', b: '더 오래 연락하는 몇몇 친구들', type: 'EI' },
    { question: '당신은 다음 중 어떤 경향이 있습니까:', a: '더 표현적이다', b: '더 사적이다', type: 'EI' },
    { question: '그룹에 있을 때, 당신은 보통:', a: '대화를 시작한다', b: '다가올 때까지 기다린다', type: 'EI' },
    { question: '사회 생활에서 당신은 보통:', a: '활동적이고 외향적이다', b: '조용하고 내성적이다', type: 'EI' },
    { question: '다음 중 무엇이 더 즐겁습니까:', a: '활기찬 파티에 참석한다', b: '집에서 좋은 책을 읽는다', type: 'EI' },
    { question: '당신은 다음 중 어디에서 더 편안함을 느낍니까:', a: '그룹 안에서', b: '혼자 또는 한두 명의 다른 사람과 함께', type: 'EI' },
    { question: '당신은 다음 중 어떻게 말합니까:', a: '빠르고 쉽게', b: '느리고 사려 깊게', type: 'EI' },
    { question: '토론에서 당신은:', a: '의견을 말하고 아이디어를 공유한다', b: '듣고 숙고한다', type: 'EI' },
    // SN
    { question: '당신은 더:', a: '사색적이기보다 현실적이다', b: '현실적이기보다 사색적이다', type: 'SN' },
    { question: '당신은 다음 중 무엇을 더 신뢰하는 경향이 있습니까:', a: '당신의 경험', b: '당신의 직관', type: 'SN' },
    { question: '당신은 다음 중 무엇에 더 관심이 있습니까:', a: '실제적인 것', b: '가능한 것', type: 'SN' },
    { question: '당신은 다음 중 무엇에 더 주의를 기울입니까:', a: '사실과 세부 사항', b: '아이디어와 개념', type: 'SN' },
    { question: '당신은 작업에서 다음 중 어떤 경향이 더 있습니까:', a: '세심하고 상세한 계획을 따른다', b: '즉흥적으로 하고 흐름에 따른다', type: 'SN' },
    { question: '당신은 다음 중 무엇에 대해 이야기하는 것을 선호합니까:', a: '실용적인 문제', b: '추상적인 아이디어', type: 'SN' },
    { question: '당신은 자신을 다음 중 무엇이라고 생각합니까:', a: '현실적이다', b: '상상력이 풍부하다', type: 'SN' },
    { question: '새로운 것을 배울 때, 당신은 다음 중 무엇을 선호합니까:', a: '실습 경험을 통해 배운다', b: '기본 이론을 이해하여 배운다', type: 'SN' },
    { question: '당신은 다음 중 어떤 작가를 선호합니까:', a: '의미하는 바를 명확히 말하는', b: '은유와 비유를 사용하는', type: 'SN' },
    { question: '당신은 다음 중 무엇에 더 관심이 있을 가능성이 높습니까:', a: '세부 사항', b: '큰 그림', type: 'SN' },
    // TF
    { question: '당신은 다음 중 무엇에 더 감명받습니까:', a: '원칙', b: '감정', type: 'TF' },
    { question: '당신은 다음 중 무엇에 더 이끌립니까:', a: '설득력 있는', b: '감동적인', type: 'TF' },
    { question: '결정을 내릴 때, 당신은 다음 중 무엇을 선호합니까:', a: '머리를 사용한다', b: '마음을 사용한다', type: 'TF' },
    { question: '당신은 자신을 다음 중 무엇이라고 생각합니까:', a: '냉철하다', b: '마음이 여리다', type: 'TF' },
    { question: '당신은 다음 중 무엇에 더 기반하여 결정을 내립니까:', a: '논리와 객관적인 분석', b: '가치와 개인적인 신념', type: 'TF' },
    { question: '당신은 다음 중 무엇에 더 흔들릴 가능성이 높습니까:', a: '논리적인 주장', b: '감동적인 호소', type: 'TF' },
    { question: '당신은 다음 중 어떤 경향이 더 있습니까:', a: '공정하다', b: '동정심이 많다', type: 'TF' },
    { question: '의견 불일치 상황에서 당신은 다음 중 무엇을 더 할 가능성이 높습니까:', a: '사실에 집중한다', b: '다른 사람의 감정을 고려한다', type: 'TF' },
    { question: '당신은 다음 중 무엇에 더 편안함을 느낍니까:', a: '솔직하고 정직하다', b: '재치 있고 외교적이다', type: 'TF' },
    { question: '당신은 다음 중 무엇을 중요하게 생각합니까:', a: '정의', b: '자비', type: 'TF' },
    // JP
    { question: '당신은 다음 중 어떻게 일하는 것을 선호합니까:', a: '마감 기한에 맞춰', b: '그냥 \'언제든지\'', type: 'JP' },
    { question: '당신은 다음 중 무엇을 선호합니까:', a: '계획을 세운다', b: '즉흥적이다', type: 'JP' },
    { question: '당신은 더:', a: '조직적이다', b: '유연하다', type: 'JP' },
    { question: '당신은 다음 중 무엇을 좋아합니까:', a: '일을 정리하고 결정한다', b: '선택의 폭을 넓게 유지한다', type: 'JP' },
    { question: '당신은 다음 중 무엇이 더 만족스럽습니까:', a: '작업을 완료한다', b: '새로운 작업을 시작한다', type: 'JP' },
    { question: '당신은 삶이 다음 중 어떠하기를 선호합니까:', a: '계획적이고 질서 정연하다', b: '계획되지 않고 적응력이 있다', type: 'JP' },
    { question: '당신은 다음 중 어떤 경향이 있습니까:', a: '결단력이 있다', b: '개방적이다', type: 'JP' },
    { question: '당신은 다음 중 무엇을 선호합니까:', a: '예측 가능한 루틴', b: '예측 불가능한 루틴', type: 'JP' },
    { question: '당신은 다음 중 무엇에 더 편안함을 느낍니까:', a: '계획을 세운다', b: '흐름에 따른다', type: 'JP' },
    { question: '당신은 다음 중 무엇을 좋아합니까:', a: '빨리 결정을 내린다', b: '결정하는 데 시간을 들인다', type: 'JP' }
];

const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const resultDiv = document.getElementById('result');

let currentPage = 0;
const questionsPerPage = 10;
const userAnswers = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
};

function showQuestions() {
    questionContainer.innerHTML = '';
    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const pageQuestions = questions.slice(startIndex, endIndex);

    pageQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${startIndex + index + 1}. ${q.question}</p>
            <label>
                <input type="radio" name="question${index}" value="a">
                ${q.a}
            </label>
            <label>
                <input type="radio" name="question${index}" value="b">
                ${q.b}
            </label>
        `;
        questionContainer.appendChild(questionElement);
    });
}

function calculateResult() {
    let result = '';
    result += userAnswers.EI > 0 ? 'E' : 'I';
    result += userAnswers.SN > 0 ? 'S' : 'N';
    result += userAnswers.TF > 0 ? 'T' : 'F';
    result += userAnswers.JP > 0 ? 'J' : 'P';
    return result;
}

nextBtn.addEventListener('click', () => {
    const pageQuestions = questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage);
    const answerInputs = questionContainer.querySelectorAll('input[type="radio"]:checked');

    if (answerInputs.length < questionsPerPage) {
        alert('모든 질문에 답해주세요.');
        return;
    }

    answerInputs.forEach((input, index) => {
        const questionType = pageQuestions[index].type;
        if (input.value === 'a') {
            userAnswers[questionType]++;
        } else {
            userAnswers[questionType]--;
        }
    });

    currentPage++;

    if (currentPage * questionsPerPage < questions.length) {
        showQuestions();
    } else {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        resultDiv.textContent = calculateResult();
    }
});

showQuestions();
