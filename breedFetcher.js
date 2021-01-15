const request = require("request");
const whatbreed = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${whatbreed}`,
  (error, response, body) => {
    const data = JSON.parse(body); // this has to be inside because body isn't defined globally

    //console.log('statusCode:', response && response.statusCode);
    //console.log('body:', body);
    // console.log(typeof body);
    // console.log(data);
    // console.log(typeof data);
    console.log(error === undefined);
    if (data[0]) {
      //if breed is true
      console.log(
        "weight imperial: " +
          data[0].weight.imperial +
          "\n" +
          "weight metric: " +
          data[0].weight.metric
      );
    } else {
      //if breed is false
      console.log("breed not found");
    }
  }
);
