document.body.style.backgroundImage = "url('space.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";
document.body.style.height = "100vh"
document.body.style.overflow = "hidden"
let magicBall = document.createElement('div');
magicBall.id = 'magic-ball';
magicBall.style.width = '200px';
magicBall.style.height = '200px';
magicBall.style.borderRadius = '50%';
magicBall.style.position = 'absolute';
magicBall.style.display = 'flex';
magicBall.style.justifyContent = 'center';
magicBall.style.alignItems = 'center';
magicBall.style.background = 'url("magic-ball.jpg")'; 
magicBall.style.backgroundSize = '350%';
magicBall.style.backgroundPosition = 'center';
magicBall.style.backgroundRepeat = 'no-repeat';
let animationStyle = document.createElement('style');
animationStyle.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
  #magic-ball {
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;
document.head.appendChild(animationStyle);
document.body.appendChild(magicBall);
let questionText = document.createElement('div');
questionText.innerText = 'Чи любите Ви JavaScript?';
questionText.style.color = "yellow"; 
questionText.style.fontSize = "20px";
questionText.style.position = 'absolute';

document.body.appendChild(questionText);

function moveBallAndQuestion(event) {
    let x = event.clientX;
    let y = event.clientY;

    magicBall.style.left = x - 100 + 'px';
    magicBall.style.top = y - 120 + 'px';

    questionText.style.top = y - 160 + 'px';
    questionText.style.left = x - questionText.clientWidth / 2 + 'px';
}

magicBall.addEventListener('click', function () {
    let randomAnswer = generateRandomAnswer();
    let answerText = document.createElement('span');
    answerText.innerText = randomAnswer;
    magicBall.innerHTML = ''; 
    answerText.style.fontSize = '20px'; 
    answerText.style.color = 'yellow';
    magicBall.appendChild(answerText);
});
document.addEventListener('mousemove', moveBallAndQuestion);
function generateRandomAnswer() {
    let answers = ["Так", "Ні", "Можливо"];
    
    let randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}
