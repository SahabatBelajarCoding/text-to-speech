if (!"webkitSpeechRecognition" in window) {
  alert("Speech Recognition Not Available");
}

// let SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
// let SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
// let SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = "id";

recognition.onError = () => {
  console.log("error...");
};

// recognition.onresult = function (event) {
//   console.log(event.result);
// };

recognition.onresult = (event) => {
  console.log(event.results);

  let textResult = "";
  for (let i = 0; i < event.results.length; i++) {
    textResult += event.results[i][0].transcript + ". ";
  }
  //   textResult = event.results[event.results.length - 1][0].transcript;

  console.log(textResult);
  document.querySelector("#result").innerHTML = textResult;
  //   document.querySelector("#result").innerAdjacentHTML("afterend", `<p>${textResult}</p>`);
};

document.querySelector("#start").onclick = () => {
  recognition.start();
};

document.querySelector("#stop").onclick = () => {
  recognition.stop();
};
