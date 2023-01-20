const { fetchBreedDescription } = require('./breedFetcher');
const breedName = args = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(`Description of ${breedName}:\n`, desc);
  }
});