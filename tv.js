var axios = require("axios");
var fs = require("fs");

function output(info){
  console.log(info);
  fs.appendFile("log.txt", info, function(err){
    console.log(err);
  })
}

function TV(show){
  this.findShow = function(){
    var URL = "http://api.tvmaze.com/search/shows?q=" + show;

    axios.get(URL).then(function(response){
      console.log(response.data[0].show.name);
      output(`
      Show Name: ${response.data[0].show.name}
      Genres: ${response.data[0].show.genres.join(" ")}
      Network: ${response.data[0].show.network.name}
      Summary: ${response.data[0].show.summary}
      -----------------------------------
      `);

    })
  }
//   this.findActor = function(){
//   }
}

module.exports = TV;