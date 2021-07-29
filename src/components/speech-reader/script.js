const main = document.querySelector("main");
const voiceSelect = document.getElementById("voice");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');


const data = [
  {
    image: "./images/bear.jpg",
    text: "bear",
  },
  {
    image: "./images/bee.jpg",
    text: "bee",
  },
  {
    image: "./images/bird.jpg",
    text: "bird",
  },
  {
    image: "./images/butterfly.jpg",
    text: "butterfly",
  },
  {
    image: "./images/cat.jpg",
    text: "cat",
  },
  {
    image: "./images/duck.jpg",
    text: "duck",
  },
  {
    image: "./images/elephant.jpg",
    text: "elephant",
  },
  {
    image: "./images/horse.jpg",
    text: "horse",
  },
  {
    image: "./images/kangroo.jpg",
    text: "kangroo",
  },
  {
    image: "./images/sqirrel.jpg",
    text: "sqirrel",
  },
  {
    image: "./images/ram.jpg",
    text: "ram",
  },
  {
    image: "./images/tiger.jpg",
    text: "tiger",
  },
];

data.forEach(createBox);

//create box
function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;
  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();
    //add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });
  main.appendChild(box);
}
//init speech synth
const message = new SpeechSynthesisUtterance();

//set text
function setTextMessage(text) {
  message.text = text;
}

//speak text
function speakText() {
  message.pitch = pitch.value;
  message.rate = rate.value;
  speechSynthesis.speak(message);
}

pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}

//store voice
let voices = [];
function getVoice() {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voiceSelect.appendChild(option);
  });
}
//voice change
speechSynthesis.addEventListener("voiceschanged", getVoice);
getVoice();


//toggle text box
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);
//close btn
//toggle text box
closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);
//set voice
function setVoice(e) {
    message.voice = voices.find((voice) => voice.name === e.target.value);
  }
//change voice
voiceSelect.addEventListener("change", setVoice);
//read text btn
readBtn.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});


//Background color change using voice command
/*
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var bg = document.querySelector('body');

var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});


document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  bg.style.backgroundColor = color;
  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}*/