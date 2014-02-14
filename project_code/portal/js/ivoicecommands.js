//Verificar Google Closure Tools
var VoiceCommands = function (){
	this.Process = function (text){
		for (var i in this.commands){
			var command = this.commands[i];
			if (command.callWords.indexOf(text) >= 0){
				OnGetCommand(command.command);
				break;
			}
		}
	}

	var OnGetCommand = function (command){
		var func = window[command];
		if (typeof(func) === "function"){
			func();
		}
	}

	this.commands = new Array();
}