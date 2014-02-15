//Verificar Google Closure Tools
VoiceCommands.prototype.OpenTools = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Open Tools";
}

VoiceCommands.prototype.CloseTools = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Close Tools";
}
var temp = 0;
var colors = ["#06246F","#FF6700","#369100","#006363","#06A600"];
VoiceCommands.prototype.OpenColors = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Change Colors";
	document.getElementById('voicecontrol').style.background = colors[temp++];
}

VoiceCommands.prototype.CloseColors = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Close Colors";
}
VoiceCommands.prototype.ShowImage = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Show image";
	document.getElementById('image').style.display = 'block';
}
VoiceCommands.prototype.RemoveImage = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Remove image";
	document.getElementById('image').style.display = 'none';
}
VoiceCommands.prototype.ArtCanvas = function(){
	document.getElementById('voicecontrol').innerText += "\n Command: Let's go to the project";
	setTimeout(function (){ location.href = "https://devart.withgoogle.com/#/project/16619961"}, 1000)
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
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().ShowImage() },
	callWords : new Array ("SHOW IMAGE")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().RemoveImage() },
	callWords : new Array ("REMOVE IMAGE")
});
voiceControl.VoiceCommandsInstance().commands.push({
	command : function (){ voiceControl.VoiceCommandsInstance().ArtCanvas() },
	callWords : new Array ("ART CANVAS", "ARTCANVAS", "ART CANVA", "ARTCANVA")
});