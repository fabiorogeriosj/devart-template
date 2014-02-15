var voiceControl = new VoiceControl();
var gestureControl = new GestureControl();
document.getElementById('voicecontrol').addEventListener('click', function (){
	this.innerText = "Say the command";
	voiceControl.StartListen();
});