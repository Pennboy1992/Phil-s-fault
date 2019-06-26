function Tv(showName){
	this.showName = showName;
  this.url =  "http://api.tvmaze.com/singlesearch/shows?q=" + showName;
  this.findShow = function(){
  	//make the API call using this.url
  }
}

module.exports = Tv;