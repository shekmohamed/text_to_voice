function speak() {
    var text = document.getElementsByClassName("sb")[0].value;
    var speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);

}