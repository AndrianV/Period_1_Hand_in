const myFetch = require("node-fetch");

const URL = "https://swapi.co/api/people/";

function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    let results = {};
    myFetch(URL+id).then(res => res.json() )
    .then(data => {
        var newURL = data.films[0];
        console.log(data.films[0]);
        results.personName = data.name;
        return myFetch(newURL).then(res => res.json())
    })
    .then(data => {
        var newURL = data.species[0];
        console.log(newURL);
        results.title = data.title;
        return myFetch(newURL).then(res => res.json()) 
    })
    .then(data => {
        var newURL = data.homeworld;
        console.log(newURL);
        results.firstSpecie = data.name;
        return myFetch(newURL).then( res => res.json())
    })
    .then(data => {
        results.planet = data.name;
        console.log(results);
    })
}

const id = process.argv[2];
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id);