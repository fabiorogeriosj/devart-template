//Verificar Google Closure Tools
var VoiceCommands = function (){
	this.Process = function (text){
		for (var i in this.commands){
			var command = this.commands[i];
			if (command.callWords.indexOf(text.toUpperCase().trim()) >= 0){
				OnGetCommand(command.command);
				break;
			}
		}
	}

	var OnGetCommand = function (command){
		command();
	}

	this.commands = new Array();
}