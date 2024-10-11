const quizData = [
    {
        question: "What is the primary cause of wildfires in Kazakhstan?",
        options: ["A) Earthquakes", "B) Human activity", "C) Volcanic eruptions", "D) Animal migration"],
        answer: "B"
    },
    {
        question: "In which region of Kazakhstan are wildfires most commonly reported?",
        options: ["A) East Kazakhstan", "B) Almaty", "C) Karaganda", "D) Mangystau"],
        answer: "A"
    },
    {
        question: "What time of year do wildfires typically occur in Kazakhstan?",
        options: ["A) Winter", "B) Spring", "C) Summer", "D) Autumn"],
        answer: "C"
    },
    {
        question: "What measures does Kazakhstan take to prevent wildfires?",
        options: ["A) Building more homes in forests", "B) Firewatch towers and patrols", "C) Ignoring warnings", "D) Cutting down all trees"],
        answer: "B"
    },
    {
        question: "Which of the following is a consequence of wildfires in Kazakhstan?",
        options: ["A) Improved air quality", "B) Loss of biodiversity", "C) Increase in wildlife population", "D) More rainfall"],
        answer: "B"
    },
    {
        question: "How can the public help in preventing wildfires?",
        options: ["A) By using fireworks in forests", "B) By reporting suspicious activities", "C) By throwing cigarette butts on the ground", "D) By ignoring fire bans"],
        answer: "B"
    },
    {
        question: "Which organization is responsible for firefighting and prevention in Kazakhstan?",
        options: ["A) Ministry of Emergency Situations", "B) Ministry of Education", "C) Ministry of Health", "D) Ministry of Agriculture"],
        answer: "A"
    },
    {
        question: "What is one of the major impacts of wildfires on local communities in Kazakhstan?",
        options: ["A) Economic growth", "B) Increase in tourism", "C) Displacement of residents", "D) Better infrastructure"],
        answer: "C"
    },
    {
        question: "What should you do if you encounter a wildfire while hiking?",
        options: ["A) Try to put it out yourself", "B) Run towards it", "C) Leave the area and report it to authorities", "D) Take pictures for social media"],
        answer: "C"
    },
    {
        question: "What type of vegetation is most vulnerable to wildfires in Kazakhstan?",
        options: ["A) Desert shrubs", "B) Coniferous forests", "C) Grasslands", "D) Agricultural fields"],
        answer: "B"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizData.forEach((item, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<h3>${index + 1}. ${item.question}</h3>`;
        
        item.options.forEach(option => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${option.charAt(0)}">
                    ${option}
                </label>
            `;
        });

        quizContainer.appendChild(questionElement);
    });
}

function showResults() {
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === item.answer) {
            score++;
        }
    });
    resultContainer.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQuiz();

submitButton.addEventListener('click', showResults);
