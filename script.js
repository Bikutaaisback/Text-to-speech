const button = document.querySelector('button');
const textarea = document.querySelector('textarea');
let select = document.querySelector('select');
let speech = new SpeechSynthesisUtterance;
let voices = [];

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, i) =>{
        let option = new Option(voice.name + '('+ voice.lang + ')', i );
        select.appendChild(option);
    });
}
window.speechSynthesis.onvoiceschanged = populateVoices;



button.addEventListener('click', ()=>{
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);

    const selectedVoice = voices[select.value];
    speech.voice = selectedVoice; 

})