var axios = require("axios");
function Tv(showName){
    this.findShow = function(){
        //make the API call using this.url
      this.url =  "http://api.tvmaze.com/singlesearch/shows?q=" + showName;
      
      // Run the axios.get function...
      // The axios.get function takes in a URL and returns a promise (just like $.ajax)
      axios
        .get(this.url)
        .then(function(response) {
          // If the axios was successful...
          // Then log the body from the site!
          console.log(response.data.name);
          for(x in response.data.genres){
          console.log(response.data.genres[x]);
          }
          console.log(response.data.rating.average);
          console.log(response.data.network.name);
          console.log(response.data.summary);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  }
  
  module.exports = Tv;
