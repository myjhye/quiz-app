const quizData = 
[
    {
        question: '방탄소년단 지민의 나이는?',
        a: '10',
        b: '15',
        c: '29',
        d: '31',
        correct: 'c' 
    },

    {
        question: '장원영이 속한 그룹 이름은?',
        a: '아이브',
        b: '르세라핌',
        c: '뉴진스',
        d: '에스파',
        correct: 'a'
    },

    {
        question: '레드벨벳의 타이틀 곡이 아닌 것은?',
        a: 'dumb dumb',
        b: 'oh boy',
        c: 'ice cream cake',
        d: 'happiness',
        correct: 'b'
    },

    {
        question: '뉴진스의 데뷔 곡이 아닌 것은?',
        a: 'hurt',
        b: 'cookie',
        c: 'ditto',
        d: 'hype boy',
        correct: 'c'
    },

    {
        question: '하이브 소속 회사가 아닌 것은?',
        a: 'kakao ent.',
        b: 'source music',
        c: 'bighit ent.',
        d: 'ador',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();


// 퀴즈 실행
function loadQuiz()
{
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}



// select 한 답 id 반환
function getSelected() 
{
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


// 이전에 select한 답 false로 초기화
function deselectAnswers()
{
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}



// 제출 버튼 클릭
submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if(answer) 
    {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else
        {
            quiz.innerHTML = `
                <h2>총 ${score} / ${quizData.length} 점을 획득했습니다!</h2>

                <button onclick="location.reload()">다시하기</button>
            
                `;     
        }
    }

});