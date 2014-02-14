var voiceControl = new VoiceControl();
document.getElementById('voicecontrol').addEventListener('click', function (){
	this.innerText = "Say the command";
	voiceControl.StartListen();
});