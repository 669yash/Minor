const questions = [
    // Shuffled Engineering and Medical questions
    {
        question: "What motivates you in pursuing a medical career?",
        answers: [
            "Helping and healing others",
            "Discovering new medical treatments",
            "Performing surgeries",
            "Improving public health",
            "None of the above"
        ],
        category: "doctor"
    },
    {
        question: "What type of engineering are you most interested in?",
        answers: [
            "Mechanical Engineering",
            "Electrical Engineering",
            "Civil Engineering",
            "Computer Science Engineering",
            "None of the above"
        ],
        category: "engineer"
    },
    {
        question: "Which medical specialization interests you the most?",
        answers: [
            "General Medicine",
            "Surgery",
            "Pediatrics",
            "Psychiatry",
            "None of the above"
        ],
        category: "doctor"
    },
    {
        question: "How do you prefer to solve engineering problems?",
        answers: [
            "By designing and testing prototypes",
            "By using analytical and computational methods",
            "Through hands-on construction and experimentation",
            "By developing software solutions",
            "None of the above"
        ],
        category: "engineer"
    },
    {
        question: "How do you prefer to learn about medical topics?",
        answers: [
            "Through clinical practice and internships",
            "By reading medical journals and textbooks",
            "Through hands-on experiments and dissections",
            "By attending medical seminars and conferences",
            "None of the above"
        ],
        category: "doctor"
    },
    {
        question: "What aspect of engineering excites you the most?",
        answers: [
            "Designing and building machines",
            "Creating and managing electrical systems",
            "Constructing and maintaining infrastructure",
            "Developing software and technology",
            "None of the above"
        ],
        category: "engineer"
    },
    {
        question: "What subjects do you excel at in school?",
        answers: [
            "Biology",
            "Chemistry",
            "Physics",
            "Mathematics",
            "None of the above"
        ],
        category: "doctor"
    },
    {
        question: "What subjects do you excel at in school?",
        answers: [
            "Mathematics",
            "Physics",
            "Chemistry",
            "Computer Science",
            "None of the above"
        ],
        category: "engineer"
    },
    {
        question: "What type of projects do you find most interesting?",
        answers: [
            "Medical research studies",
            "Community health initiatives",
            "Clinical case studies",
            "Developing medical technology",
            "None of the above"
        ],
        category: "doctor"
    },
    {
        question: "What motivates you in your work or studies?",
        answers: [
            "Achieving tangible results",
            "Solving complex puzzles",
            "Creating innovative solutions",
            "Building and constructing things",
            "None of the above"
        ],
        category: "engineer"
    },
    {
        question: "Which of the following skills do you value the most?",
        answers: [
            "Empathy and compassion",
            "Analytical thinking",
            "Technical skills",
            "Problem-solving",
            "None of the above"
        ],
        category: "doctor"
    },
    {
        question: "Which of the following skills do you value the most?",
        answers: [
            "Problem-solving",
            "Analytical thinking",
            "Creativity",
            "Technical skills",
            "None of the above"
        ],
        category: "engineer"
    },
    {
        question: "What do you enjoy doing in your free time?",
        answers: [
            "Playing with gadgets or electronics",
            "Building models or prototypes",
            "Coding or programming",
            "Solving math puzzles",
            "None of the above"
        ],
        category: "engineer"
    },
    {
        question: "What do you enjoy doing in your free time?",
        answers: [
            "Volunteering at healthcare facilities",
            "Reading medical articles",
            "Participating in health awareness campaigns",
            "Learning about new medical advancements",
            "None of the above"
        ],
        category: "doctor"
    },
    {
        question: "What type of projects do you find most interesting?",
        answers: [
            "Building robots or machines",
            "Developing software applications",
            "Designing buildings or infrastructure",
            "Creating electrical circuits",
            "None of the above"
        ],
        category: "engineer"
    },
    {
        question: "How do you prefer to solve medical problems?",
        answers: [
            "By diagnosing and treating patients",
            "By conducting research and experiments",
            "By collaborating with other healthcare professionals",
            "By using medical technology",
            "None of the above"
        ],
        category: "doctor"
    },
    {
        question: "What type of work environment do you prefer?",
        answers: [
            "A lab or workshop",
            "An office with computers",
            "A construction site",
            "A research facility",
            "None of the above"
        ],
        category: "engineer"
    }
  ];
  
  let currentQuestionIndex = 0;
  let userAnswers = {};
  
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");
  const nextButton = document.getElementById("next-btn");
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    let answerButtons = "";
  
    currentQuestion.answers.forEach((answer, index) => {
        answerButtons += `<div class="btn" onclick="handleAnswer(${index})">${answer}</div>`;
    });
  
    questionContainer.innerHTML = `
      <p>${currentQuestion.question}</p>
      <div class="btn-group">${answerButtons}</div>
    `;
  }
  
  function handleAnswer(answerIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    userAnswers[currentQuestion.category] = answerIndex;
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
  }
  
  function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
  
    let resultMessage = "Based on your answers, your recommended career paths are: ";
  
    if (userAnswers["engineer"] === 0) {
        resultMessage += "Mechanical Engineer, Electrical Engineer, Civil Engineer, Computer Science Engineer. ";
    }
    if (userAnswers["doctor"] === 0) {
        resultMessage += "General Physician, Surgeon, Pediatrician, Psychiatrist. ";
    }
  
    resultContainer.innerHTML = `<p>${resultMessage}</p>`;
  }
  
  nextButton.addEventListener("click", showQuestion);
  
  // Shuffle questions
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  shuffle(questions);
  
  // Initial question display
  showQuestion();
  