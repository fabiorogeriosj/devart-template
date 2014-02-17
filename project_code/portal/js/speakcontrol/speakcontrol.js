var SpeakControl = function(){
	meSpeak.loadConfig("js/speakcontrol/mespeak_config.json");
    meSpeak.loadVoice("js/speakcontrol/voices/en/en.json");

    this.Speak = function(text){
    	meSpeak.speak(text, {
            amplitude: 100,
            wordgap: 0,
            pitch: 50,
            speed: 175,
            variant: 'whisperf'
        });
    }
}