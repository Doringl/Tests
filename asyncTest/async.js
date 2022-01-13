// Now a little bit more realistic:
const fetch = require('node-fetch');

const getPeople = async () => {
  const getRequest = await fetch('http://swapi.py4e.com/api/people');
  const data =  await getRequest.json();
  // console.log(data);
  return {
    count: data.count,
    results: data.results
  };
}
getPeople();

module.exports = {
  getPeople
}