const btn = document.querySelector("#btn");
const box = document.querySelector("#text");

btn.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(box.value);
  window.speechSynthesis.speak(utterance); 
});
