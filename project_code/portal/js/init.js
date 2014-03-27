var voiceControl = new VoiceControl();
var gestureControl = new GestureControl();
var speakControl = new SpeakControl();
document.getElementById('voicecontrol').addEventListener('click', function (){
	this.innerText = "Say the command";
	speakControl.Speak('Say the command');
	
	voiceControl.StartListen();
});
