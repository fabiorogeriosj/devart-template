//Verificar Google Closure Tools
VoiceCommands.prototype.OpenTools = function(){
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

voiceControl.VoiceCommandsInstance.commands[0] = new Object();
voiceControl.VoiceCommandsInstance.commands[0].command = 'OpenTools';
voiceControl.VoiceCommandsInstance.commands[0].callWords = new Array ("Open Tools");
voiceControl.VoiceCommandsInstance.commands[1] = new Object();
voiceControl.VoiceCommandsInstance.commands[1].command = 'CloseTools';
voiceControl.VoiceCommandsInstance.commands[1].callWords = new Array ("Close Tools");
voiceControl.VoiceCommandsInstance.commands[2] = new Object();
voiceControl.VoiceCommandsInstance.commands[2].command = 'OpenColors';
voiceControl.VoiceCommandsInstance.commands[2].callWords = new Array ("Open Colors");
voiceControl.VoiceCommandsInstance.commands[3] = new Object();
voiceControl.VoiceCommandsInstance.commands[3].command = 'CloseColors';
voiceControl.VoiceCommandsInstance.commands[3].callWords = new Array ("Close Colors");
voiceControl.VoiceCommandsInstance.commands[4] = new Object();
voiceControl.VoiceCommandsInstance.commands[4].command = 'Pencil';
voiceControl.VoiceCommandsInstance.commands[4].callWords = new Array ("Pencil");