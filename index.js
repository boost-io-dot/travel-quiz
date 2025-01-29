document.getElementById('start-button').addEventListener('click', function() {
    startQuiz(); 
});

let currentQuestion = 0;

let qns = [
  {
	quizImg: "trip-start.svg",
	question: "First things first—where are you going?",
	answers: ["Wander through the misty highlands of Scotland.", "Explore the bustling streets and markets of Bangkok.", "Soak up the sun and food scene in Malaysia.", "Hit the scenic trails and night markets of Taiwan."]
  },
  {
	quizImg: "packing.svg",
	question: "How are you helping with trip prep?",
	answers: ["Packing everything like a pro (you’ve even got snacks!).", "Planning the itinerary—activities, restaurants, and sights.", "Scouting and booking the coolest spots to stay.", "No prep for me—I’ll just show up when it’s time to leave."]
  },
  {
	quizImg: "activities.svg",
	question: "What’s the first thing you do on vacation?",
	answers: ["Head to the nearest night market to try all the food.", "Visit a famous sports stadium and take a tour.", "Find a chill bar to vibe and grab a drink.", "Go straight into the wild for some hiking and exploring nature."]
  },
  {
	quizImg: "distressed.svg",
	question: "Oh no, your travel pal fell sick! What’s your move?",
	answers: ["Run out to grab medicine and their favorite snacks.", "Stay by their side and make sure they’re comfy.", "Let them rest while you check in every now and then.", "Time for a mini solo adventure while they recover."]
  },
  {
	quizImg: "home.svg",
	question: "You’re back home. What do you do?",
	answers: ["Unpack immediately—everything back in its place.", "Only unpack the essentials—the rest can wait.", "Leave your bag sitting there for a week.", "Why unpack? I’m already planning the next trip!"]
  }
 ];

function startQuiz() {
	document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
	currentQuestion = 0;
	nextQuestion();
}

let quizBtns = document.getElementsByClassName('quiz-btn');

for (let i = 0; i < quizBtns.length; i++) {
    quizBtns[i].addEventListener('click', nextQuestion, false);
}

function showResults() {

	document.getElementById('quiz-page').style.display = 'none';
	document.getElementById('results').style.display = 'block';
	
}

function nextQuestion() {
	currentQuestion++;
	console.log(currentQuestion);
	if (currentQuestion == 6) {
		showResults();
		return;
	}
	let question = qns[currentQuestion-1];
	document
	.getElementById('progress-bar').value = (currentQuestion/5)*100;
	document
	.getElementById('quiz-img').src = question.quizImg;
	document
	.getElementById('quiz-question')
	.innerHTML = question.question;
	for (let i = 0; i < quizBtns.length; i++) {
	quizBtns[i].textContent=question.answers[i];
	}

}