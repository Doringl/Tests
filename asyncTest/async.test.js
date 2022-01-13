const swapi = require('./async');
const fetch = require('node-fetch');

it('Calls swapi to get people!', async () => {
    expect.assertions(2)
    const data = await swapi.getPeople(fetch);
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
})

it('getPeople fucntion test with mockFetch ...', () => {
    const getPeople = async (fetch) => {
        const getRequest = await fetch("testUrl");
        const data =  await getRequest.json();
        return {
          count: data.count,
          results: data.results
        };
    }
    
    mockFetch = jest.fn().mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
          count: 1,
          results: { 
              property1: "result1",
              property2: "result2",
          }
      })
    }));
  
    expect.assertions(4);
    return getPeople(mockFetch).then(data => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toBeCalledWith("testUrl");
      expect(data.count).toEqual(1);
      expect(data.results).toHaveProperty("property1", "result1");
    })
  })