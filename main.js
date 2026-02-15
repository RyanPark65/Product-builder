const questions = [
    // EI
    { question: 'At a party do you:', a: 'Interact with many, including strangers', b: 'Interact with a few, known to you', type: 'EI' },
    { question: 'Are you more:', a: 'Outgoing', b: 'Reserved', type: 'EI' },
    { question: 'Do you prefer:', a: 'Many friends with brief contact', b: 'A few friends with more lengthy contact', type: 'EI' },
    { question: 'Do you tend to be:', a: 'More expressive', b: 'More private', type: 'EI' },
    { question: 'When you are in a group, do you usually:', a: 'Initiate conversations', b: 'Wait to be approached', type: 'EI' },
    { question: 'In your social life, are you usually:', a: 'Active and outgoing', b: 'Quiet and reserved', type: 'EI' },
    { question: 'Do you find it more enjoyable to:', a: 'Attend a lively party', b: 'Stay at home with a good book', type: 'EI' },
    { question: 'Are you more comfortable:', a: 'In a group', b: 'Alone or with one or two others', type: 'EI' },
    { question: 'Do you speak:', a: 'Quickly and easily', b: 'Slowly and thoughtfully', type: 'EI' },
    { question: 'In a discussion, do you:', a: 'Speak up and share your ideas', b: 'Listen and reflect', type: 'EI' },
    // SN
    { question: 'Are you more:', a: 'Realistic than speculative', b: 'Speculative than realistic', type: 'SN' },
    { question: 'Do you tend to trust:', a: 'Your experience', b: 'Your intuition', type: 'SN' },
    { question: 'Are you more interested in:', a: 'What is actual', b: 'What is possible', type: 'SN' },
    { question: 'Do you pay more attention to:', a: 'Facts and details', b: 'Ideas and concepts', type: 'SN' },
    { question: 'In your work, are you more likely to:', a: 'Follow a careful and detailed plan', b: 'Improvise and go with the flow', type: 'SN' },
    { question: 'Do you prefer to talk about:', a: 'Practical matters', b: 'Abstract ideas', type: 'SN' },
    { question: 'Do you see yourself as more:', a: 'Down-to-earth', b: 'Imaginative', type: 'SN' },
    { question: 'When you learn something new, do you prefer to:', a: 'Learn through hands-on experience', b: 'Learn through understanding the underlying theory', type: 'SN' },
    { question: 'Do you prefer writers who:', a: 'Say what they mean', b: 'Use metaphors and analogies', type: 'SN' },
    { question: 'Are you more likely to be interested in:', a: 'The details', b: 'The big picture', type: 'SN' },
    // TF
    { question: 'Are you more impressed by:', a: 'Principles', b: 'Emotions', type: 'TF' },
    { question: 'Are you more drawn to:', a: 'Convincing', b: 'Touching', type: 'TF' },
    { question: 'When making decisions, do you prefer to:', a: 'Use your head', b: 'Use your heart', type: 'TF' },
    { question: 'Do you see yourself as more:', a: 'Hard-headed', b: 'Soft-hearted', type: 'TF' },
    { question: 'Do you make decisions based more on:', a: 'Logic and objective analysis', b: 'Values and personal beliefs', type: 'TF' },
    { question: 'Are you more likely to be swayed by:', a: 'A logical argument', b: 'A touching plea', type: 'TF' },
    { question: 'Do you tend to be more:', a: 'Fair-minded', b: 'Sympathetic', type: 'TF' },
    { question: 'In a disagreement, are you more likely to:', a: 'Focus on the facts', b: 'Consider the feelings of others', type: 'TF' },
    { question: 'Are you more comfortable with:', a: 'Being direct and honest', b: 'Being tactful and diplomatic', type: 'TF' },
    { question: 'Do you value:', a: 'Justice', b: 'Mercy', type: 'TF' },
    // JP
    { question: 'Do you prefer to work:', a: 'To deadlines', b: 'Just \'whenever\'', type: 'JP' },
    { question: 'Do you prefer to:', a: 'Plan things out', b: 'Be spontaneous', type: 'JP' },
    { question: 'Are you more:', a: 'Organized', b: 'Flexible', type: 'JP' },
    { question: 'Do you like to:', a: 'Have things settled and decided', b: 'Keep your options open', type: 'JP' },
    { question: 'Do you find it more satisfying to:', a: 'Finish a task', b: 'Start a new one', type: 'JP' },
    { question: 'Do you prefer your life to be:', a: 'Scheduled and orderly', b: 'Unplanned and adaptable', type: 'JP' },
    { question: 'Do you tend to be:', a: 'Decisive', b: 'Open-minded', type: 'JP' },
    { question: 'Do you prefer:', a: 'A predictable routine', b: 'An unpredictable one', type: 'JP' },
    { question: 'Are you more comfortable with:', a: 'Having a plan', b: 'Going with the flow', type: 'JP' },
    { question: 'Do you like to:', a: 'Make decisions quickly', b: 'Take your time to decide', type: 'JP' }
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
        alert('Please answer all questions.');
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
