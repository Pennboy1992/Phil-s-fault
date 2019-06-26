//cli takes 2 inputs <show/actor> <name of>

var command = process.argv[2];
var name = process.argv[3];

if(command === "show"){
	//find show
}
else if(command === "actor"){
	//find actor
}else{
	console.log("Sorry, please use the command show or actor. Ex: node cli.js show Rick and Morty")
}