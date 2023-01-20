const request = require('request');
args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  
  if (error) console.log('Errorrror:', error);
  const data = JSON.parse(body);
  // console.log('body:', data);
  // console.log('type:', typeof data);
  if (data[0] === undefined) {
    return console.log('Breed not found, likely because it does not exist. Check your spelling.');
  }
  console.log('description:', data[0].description);
});
