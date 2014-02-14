//Verificar Google Closure Tools
VoiceCommands.prototype.OpenTools = function(){
	console.log('Call -> OpenTools');
}

VoiceCommands.prototype.CloseTools = function(){
}

VoiceCommands.prototype.OpenColors = function(){
}

VoiceCommands.prototype.CloseColors = function(){
}

VoiceCommands.prototype.Pencil = function(){
	console.log('Call -> Pencil');
}

voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().OpenTools() },
	callWords : new Array ("OPEN TOOLS")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().CloseTools() },
	callWords : new Array ("CLOSE TOOLS")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().OpenColors() },
	callWords : new Array ("OPEN COLORS")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().CloseColors() },
	callWords : new Array ("CLOSE COLORS")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().Pencil() },
	callWords : new Array ("PENCIL", "BETHEL", "DIESEL", "CASTLE")
});