//Verificar Google Closure Tools
VoiceCommands.prototype.OpenTools = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Open Tools";
}

VoiceCommands.prototype.CloseTools = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Close Tools";
}

VoiceCommands.prototype.OpenColors = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Open Colors";
}

VoiceCommands.prototype.CloseColors = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Close Colors";
}

VoiceCommands.prototype.Pencil = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Pencil";
}
VoiceCommands.prototype.Eraser = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Eraser";
}
VoiceCommands.prototype.Javascript = function(){
	document.getElementById('voicecontrol').innerText += "\n :) JS is the best.";
}

voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().OpenTools() },
	callWords : new Array ("OPEN TOOLS", "OPEN TOES")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().CloseTools() },
	callWords : new Array ("CLOSE TOOLS", "COASTALS")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().OpenColors() },
	callWords : new Array ("OPEN COLORS", "CHANGE COLOR", "CHANGE COLORS", "OPEN COLLARS")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().CloseColors() },
	callWords : new Array ("CLOSE COLORS")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().Pencil() },
	callWords : new Array ("PENCIL", "BETHEL", "DIESEL", "CASTLE")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().Eraser() },
	callWords : new Array ("ERASER")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().Javascript() },
	callWords : new Array ("JAVASCRIPT", "JS")
});
