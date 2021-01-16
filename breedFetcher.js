//require request for http querie
//HTTP API that provides more extensive JSON data about Cats

const request = require("request");
const fetchBreedDescription = (breedName, callback) => {
  const call = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(call, (error, response, body) => {
    if (error) {
      //(error || error == undefined) returns null
      return callback(error, null);
    }
    const data = JSON.parse(body); // this has to be inside because body isn't defined globally
    const breed = data[0];
    console.log(breed);
    if (breed) {
      return callback(null, breed.description);
    } else {
      return callback(`breed not found`, null);
    }
  });
};

//GET the breedname information

module.exports = { fetchBreedDescription };

//txt commands that are used
//error
//'statusCode:' response && response.statusCode
//'body:'
//data

// if description = null
// if request = null

//this should be the function

//call back to Index?
//Export these modules to Index
