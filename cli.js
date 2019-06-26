//cli takes 2 inputs <show/actor> <name of>
var tv = require("./tv.js");
var command = process.argv[2];
var name = process.argv.slice(3).join(" ");

if(command === "show"){
	theTv = new tv(name);
	theTv.findShow();
}
else if(command === "actor"){
	//find actor
}else{
	console.log("Sorry, please use the command show or actor. Ex: node cli.js show Rick and Morty")
}