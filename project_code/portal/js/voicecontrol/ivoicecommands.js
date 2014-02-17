//Verificar Google Closure Tools
var VoiceCommands = function (){
	this.Process = function (text){
		var found = false;
		for (var i in this.commands){
			var command = this.commands[i];
			if (command.callWords.indexOf(text.toUpperCase().trim()) >= 0){
				OnGetCommand(command.command);
				found = true;
				break;
			}
		}
		
		if(!found){
			//document.getElementById('voicecontrol').innerText += "\n Sorry: Command not found!";
		}
	}

	var OnGetCommand = function (command){
		command();
	}

	this.commands = new Array();
}