// accessing object properties 

let mountaineer={
    name:"nirmal purja",
    age: 35,
    country: "nepal",
    profession: "mountaineer"
}

console.log("mountaineer=> ", mountaineer);

// asscessing object properties using dot notation


console.log("mountaineer name=> ", mountaineer.name);
console.log("mountaineer age=> ", mountaineer.age);
console.log("mountaineer country=> ", mountaineer.country);
console.log("mountaineer profession=> ", mountaineer.profession);

// now accessing object properties using bracket notation

console.log("mountaineer name=> ", mountaineer["name"]);
console.log("mountaineer age=> ", mountaineer["age"]);
console.log("mountaineer country=> ", mountaineer["country"]);
console.log("mountaineer profession=> ", mountaineer["profession"]);

// modifying object properties

mountaineer["age"]=48;
console.log("mountaineer age after modification=> ", mountaineer.age);

// adding properties using bracket notation

mountaineer["goal"]="climb all 14 peaks above 8000m";

console.log("adding new property goal=> ", mountaineer.goal);
// adding properties using dot notation

mountaineer.lastClimb="K2";

console.log("adding new property lastClimb=> ", mountaineer.lastClimb);

// example 1


let bollywodMovie={
    name:"3 idiots",
    director:"Rajkumar Hirani",
    releaseYear:2009,
}

console.log("bollywodMovie=> ", bollywodMovie);

console.log("bollywodMovie name=> ", bollywodMovie.name);
console.log("bollywodMovie director=> ", bollywodMovie.director);
console.log("bollywodMovie releaseYear=> ", bollywodMovie.releaseYear);

console.log("bollywodMovie name=> ", bollywodMovie["name"]);


bollywodMovie.releaseYear=2010;
console.log("bollywodMovie releaseYear after modification=> ", bollywodMovie.releaseYear);


bollywodMovie["viewerRating"]=8.4;
console.log("adding new property viewerRating=> ", bollywodMovie.viewerRating);

// example 2

let hollywoodMovie={
    name:"doctor strange",
    director:"sam raimi",
    releaseYear:2016,
}


console.log("hollywoodMovie=> ", hollywoodMovie);

console.log("hollywoodMovie name=> ", hollywoodMovie.name);
console.log("hollywoodMovie director=> ", hollywoodMovie.director);
console.log("hollywoodMovie releaseYear=> ", hollywoodMovie.releaseYear);

hollywoodMovie.releaseYear=2017;
console.log("hollywoodMovie releaseYear after modification=> ", hollywoodMovie.releaseYear);

hollywoodMovie["viewerRating"]=7.5;
console.log("adding new property viewerRating=> ", hollywoodMovie.viewerRating);

hollywoodMovie.heroName="Benedict Cumberbatch";

console.log("adding new property heroName=> ", hollywoodMovie.heroName);

// example 3

let bollywoodActor={
    name:"harshwardhan rane",
    age: 35,
    movieName:"sanam teri kasam",
}

console.log("bollywoodActor=> ", bollywoodActor);

console.log("bollywoodActor name=> ", bollywoodActor.name);
console.log("bollywoodActor age=> ", bollywoodActor.age);
console.log("bollywoodActor movieName=> ", bollywoodActor.movieName);

bollywoodActor.age=36;
console.log("bollywoodActor age after modification=> ", bollywoodActor.age);

bollywoodActor["viewerRating"]=8.2;
console.log("bollywoodActor viewerRating=> ", bollywoodActor.viewerRating);

bollywoodActor.secondMovie="deewaniyat";
console.log("adding new property secondMovie=> ", bollywoodActor.secondMovie);












