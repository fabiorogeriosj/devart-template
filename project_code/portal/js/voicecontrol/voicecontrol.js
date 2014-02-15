var VoiceControl = function (){
	var recognition = null;
	var voiceCommands = null;
	var self = this;

	var RecognitionInstance = function(){
		if (recognition == null){
			CreateRecognition();
		}

		return recognition;
	}

	this.VoiceCommandsInstance = function(){
		if (voiceCommands == null){
			voiceCommands = new VoiceCommands();
		}

		return voiceCommands;
	}

	var CreateRecognition = function(){
		recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
		recognition.lang = 'en-US'; //en-US pt-BR
		recognition.onaudioend = function(event) {
			console.log('Audio end ->', event);
		}
		recognition.onaudiostart = function(event) {
			console.log('Audio start ->', event);
		}
		recognition.onend = function(event) {
			console.log('End ->', event);
			RecognitionInstance().start();
		}
		recognition.onerror = function(event) {
			console.log('Error ->', event);
		}
		recognition.onnomatch = function(event) {
			console.log('No match ->', event);
		}
		recognition.onresult = function(event) {
			var command = '';
			
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				if (event.results[i].isFinal) {
					command += event.results[i][0].transcript;
					console.log(command);
					self.VoiceCommandsInstance().Process(command);
				}
			}
		}
		recognition.onsoundend = function(event) {
			console.log('Sound end ->', event);
		}
		recognition.onsoundstart = function(event) {
			console.log('Sound start ->', event);
		}
		recognition.onspeechend = function(event) {
			console.log('Speech end ->', event);
		}
		recognition.onspeechstart = function(event) {
			console.log('Speech start ->', event);
		}
		recognition.onstart = function(event) {
			console.log('Start ->', event);
		}
	}

	this.StartListen = function (){
		RecognitionInstance().start();
	}

	this.StopListen = function (){
		RecognitionInstance().stop();
	}
}