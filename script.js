const questions = [
    { text: "나는 혼자 일하는 것보다 팀으로 일하는 것을 선호한다", dimension: "E" },
    { text: "나는 종종 이론적인 개념과 가능성에 대해 생각한다", dimension: "N" },
    { text: "나는 감정보다는 논리를 바탕으로 결정을 내린다", dimension: "T" },
    { text: "나는 구조적이고 체계적인 삶의 방식을 선호한다", dimension: "J" },
    { text: "나는 새로운 사람들을 만나고 사교하는 것을 즐긴다", dimension: "E" },
    { text: "나는 큰 그림보다는 사실과 세부사항에 집중한다", dimension: "S" },
    { text: "나는 결정이 다른 사람들의 감정에 어떤 영향을 줄지 고려한다", dimension: "F" },
    { text: "나는 선택권을 열어두고 즉흥적으로 행동하는 것을 좋아한다", dimension: "P" },
    { text: "나는 다른 사람들과 시간을 보낸 후 에너지를 얻는다", dimension: "E" },
    { text: "나는 이론적인 해결책보다 실용적인 해결책을 선호한다", dimension: "S" },
    { text: "나는 공정성과 객관적 분석을 중시한다", dimension: "T" },
    { text: "나는 상황에 적응하기보다는 미리 계획을 세우는 것을 선호한다", dimension: "J" },
    { text: "나는 혼자만의 조용한 시간이 필요하다", dimension: "I" },
    { text: "나는 새로운 아이디어와 가능성을 탐구하는 것을 즐긴다", dimension: "N" },
    { text: "나는 개인적인 가치관을 바탕으로 결정을 내린다", dimension: "F" },
    { text: "나는 압박감과 촉박한 마감일 하에서 잘 일한다", dimension: "P" },
    { text: "나는 잡담보다는 깊은 대화를 선호한다", dimension: "I" },
    { text: "나는 결정을 내릴 때 직감을 신뢰한다", dimension: "N" },
    { text: "나는 행동하기 전에 상황을 객관적으로 분석한다", dimension: "T" },
    { text: "나는 루틴과 예측 가능성에 편안함을 느낀다", dimension: "J" }
];

const personalityTypes = {
    "INTJ": {
        name: "건축가",
        description: "모든 것에 대한 계획을 가진 상상력이 풍부하고 전략적인 사상가입니다. INTJ는 독립적이고 결단력이 있으며, 자신과 타인에 대해 높은 기준을 가지고 있습니다.",
        traits: ["독립적", "전략적", "결단력 있는", "혁신적"]
    },
    "INTP": {
        name: "논리술사",
        description: "지식에 대한 끝없는 갈망을 가진 혁신적인 발명가입니다. INTP는 유연하고 관대하며, 이론적 개념을 탐구하는 것을 즐깁니다.",
        traits: ["분석적", "창의적", "객관적", "추상적"]
    },
    "ENTJ": {
        name: "통솔자",
        description: "길을 찾거나 만들어내는 대담하고 상상력이 풍부하며 의지가 강한 지도자입니다. ENTJ는 전략적 사고 능력을 가진 타고난 리더입니다.",
        traits: ["리더십", "전략적", "효율적", "자신감 있는"]
    },
    "ENTP": {
        name: "변론가",
        description: "지적 도전을 거부할 수 없는 똑똑하고 호기심 많은 사상가입니다. ENTP는 혁신적이고 열정적이며, 패턴을 빠르게 파악합니다.",
        traits: ["혁신적", "열정적", "전략적", "카리스마 있는"]
    },
    "INFJ": {
        name: "옹호자",
        description: "조용하고 신비로우면서도 매우 영감을 주고 지치지 않는 이상주의자입니다. INFJ는 창의적이고 통찰력이 있으며, 타인의 복지를 깊이 걱정합니다.",
        traits: ["공감적", "창의적", "통찰력 있는", "이상주의적"]
    },
    "INFP": {
        name: "중재자",
        description: "시적이고 친절하며 이타적인 사람으로, 항상 좋은 대의를 돕고자 합니다. INFP는 충성스럽고 적응력이 있으며, 조화와 진정성을 중시합니다.",
        traits: ["이상주의적", "충성스러운", "적응력 있는", "자비로운"]
    },
    "ENFJ": {
        name: "주인공",
        description: "청중을 매혹시킬 수 있는 카리스마 있고 영감을 주는 지도자입니다. ENFJ는 따뜻하고 공감적이며, 타인을 동기부여하는 데 뛰어납니다.",
        traits: ["카리스마 있는", "공감적", "영감을 주는", "체계적"]
    },
    "ENFP": {
        name: "활동가",
        description: "항상 웃을 이유를 찾을 수 있는 열정적이고 창의적이며 사교적인 자유로운 영혼입니다. ENFP는 에너지 넘치고 따뜻하며 열정적입니다.",
        traits: ["열정적", "창의적", "사교적", "에너지 넘치는"]
    },
    "ISTJ": {
        name: "현실주의자",
        description: "실용적이고 사실 중심적이며, 신뢰할 수 있고 책임감 있는 사람입니다. ISTJ는 근면하고 의존할 수 있으며, 전통과 충성을 중시합니다.",
        traits: ["신뢰할 수 있는", "실용적", "책임감 있는", "체계적"]
    },
    "ISFJ": {
        name: "수호자",
        description: "따뜻한 마음을 가지고 헌신적이며, 항상 사랑하는 사람들을 보호할 준비가 되어 있습니다. ISFJ는 친절하고 신뢰할 수 있으며, 뛰어난 대인관계 기술을 가지고 있습니다.",
        traits: ["배려하는", "신뢰할 수 있는", "참을성 있는", "충성스러운"]
    },
    "ESTJ": {
        name: "경영자",
        description: "사물이나 사람을 관리하는 데 뛰어난 탁월한 관리자입니다. ESTJ는 근면하고 전통적이며, 결과 지향적입니다.",
        traits: ["체계적", "실용적", "결단력 있는", "전통적"]
    },
    "ESFJ": {
        name: "집정관",
        description: "매우 배려하고 사교적이며 인기 있는 사람으로, 항상 도움을 주고자 합니다. ESFJ는 따뜻하고 협력적이며, 사회적 상황을 읽는 데 능숙합니다.",
        traits: ["배려하는", "사교적", "도움이 되는", "체계적"]
    },
    "ISTP": {
        name: "만능재주꾼",
        description: "모든 종류의 도구를 다루는 대담하고 실용적인 실험가입니다. ISTP는 적응력이 있고 논리적이며, 직접적인 문제 해결을 즐깁니다.",
        traits: ["실용적", "적응력 있는", "논리적", "독립적"]
    },
    "ISFP": {
        name: "모험가",
        description: "항상 새로운 가능성을 탐구할 준비가 된 유연하고 매력적인 예술가입니다. ISFP는 온화하고 민감하며, 개인적 자유를 중시합니다.",
        traits: ["예술적", "온화한", "유연한", "즉흥적"]
    },
    "ESTP": {
        name: "사업가",
        description: "극한 상황에서 사는 것을 진정으로 즐기는 똑똑하고 에너지 넘치며 통찰력 있는 사람입니다. ESTP는 즉흥적이고 실용적이며, 위기 상황에서 뛰어납니다.",
        traits: ["에너지 넘치는", "실용적", "즉흥적", "관찰력 있는"]
    },
    "ESFP": {
        name: "연예인",
        description: "즉흥적이고 에너지 넘치며 열정적인 사람으로, 그들 주변에서는 삶이 결코 지루하지 않습니다. ESFP는 따뜻하고 친근하며, 관심의 중심이 되는 것을 좋아합니다.",
        traits: ["열정적", "친근한", "즉흥적", "사람 중심적"]
    }
};

let currentQuestionIndex = 0;
let answers = [];
let scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };

const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const progressFill = document.getElementById('progress-fill');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const testContainer = document.getElementById('test-container');
const resultsContainer = document.getElementById('results-container');
const restartBtn = document.getElementById('restart-btn');

function initializeTest() {
    totalQuestionsSpan.textContent = questions.length;
    showQuestion();
    
    answerButtons.forEach(btn => {
        btn.addEventListener('click', selectAnswer);
    });
    
    prevBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', calculateResults);
    restartBtn.addEventListener('click', restartTest);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.text;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    answerButtons.forEach(btn => btn.classList.remove('selected'));
    
    if (answers[currentQuestionIndex]) {
        const selectedBtn = document.querySelector(`[data-value="${answers[currentQuestionIndex]}"]`);
        if (selectedBtn) selectedBtn.classList.add('selected');
    }
    
    updateProgress();
    updateNavigation();
}

function selectAnswer(e) {
    answerButtons.forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    
    answers[currentQuestionIndex] = e.target.dataset.value;
    nextBtn.disabled = false;
    
    if (currentQuestionIndex === questions.length - 1) {
        submitBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function updateNavigation() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (answers[currentQuestionIndex]) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    }
    
    if (currentQuestionIndex === questions.length - 1 && answers[currentQuestionIndex]) {
        submitBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
    }
}

function calculateResults() {
    scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
    
    answers.forEach((answer, index) => {
        const dimension = questions[index].dimension;
        const scoreValue = getScoreValue(answer);
        scores[dimension] += scoreValue;
    });
    
    const personalityType = determinePersonalityType();
    displayResults(personalityType);
}

function getScoreValue(answer) {
    const scoreMap = {
        'strongly-disagree': -2,
        'disagree': -1,
        'neutral': 0,
        'agree': 1,
        'strongly-agree': 2
    };
    return scoreMap[answer] || 0;
}

function determinePersonalityType() {
    let type = '';
    
    type += scores.E > scores.I ? 'E' : 'I';
    type += scores.N > scores.S ? 'N' : 'S';
    type += scores.T > scores.F ? 'T' : 'F';
    type += scores.J > scores.P ? 'J' : 'P';
    
    return type;
}

function displayResults(personalityType) {
    testContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const typeInfo = personalityTypes[personalityType];
    
    document.getElementById('personality-type').textContent = personalityType;
    
    const descriptionDiv = document.getElementById('personality-description');
    descriptionDiv.innerHTML = `
        <h3>${typeInfo.name}</h3>
        <p>${typeInfo.description}</p>
    `;
    
    const traitsDiv = document.getElementById('traits-breakdown');
    traitsDiv.innerHTML = '';
    
    const dimensions = [
        { name: '외향성 vs 내향성', e: 'E', i: 'I', eScore: scores.E, iScore: scores.I },
        { name: '직관 vs 감각', e: 'N', i: 'S', eScore: scores.N, iScore: scores.S },
        { name: '사고 vs 감정', e: 'T', i: 'F', eScore: scores.T, iScore: scores.F },
        { name: '판단 vs 인식', e: 'J', i: 'P', eScore: scores.J, iScore: scores.P }
    ];
    
    dimensions.forEach(dim => {
        const total = Math.abs(dim.eScore) + Math.abs(dim.iScore);
        const dominant = Math.abs(dim.eScore) > Math.abs(dim.iScore) ? dim.e : dim.i;
        const percentage = total > 0 ? Math.round((Math.abs(dim.eScore > dim.iScore ? dim.eScore : dim.iScore) / total) * 100) : 50;
        
        const traitCard = document.createElement('div');
        traitCard.className = 'trait-card';
        traitCard.innerHTML = `
            <h4>${dim.name}</h4>
            <div class="trait-score">${dominant}</div>
            <div class="trait-bar">
                <div class="trait-fill" style="width: ${percentage}%"></div>
            </div>
        `;
        traitsDiv.appendChild(traitCard);
    });
}

function restartTest() {
    currentQuestionIndex = 0;
    answers = [];
    scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
    
    resultsContainer.style.display = 'none';
    testContainer.style.display = 'block';
    
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    
    showQuestion();
}

document.addEventListener('DOMContentLoaded', initializeTest);