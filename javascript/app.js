// Setup
// Fork/Clone and create our html/css/js folder structure. Write your answers in the app.js file. Use comments for the non-code responses. Be sure answers that are code and whatever tests you write are uncommented when you submit. Make a pull request when it's done.
// The questions!
// 1. Data types
// Refresher
// So far we have seen:

// Strings
// Numbers
// Booleans
// Arrays
// Objects
// When these datatypes are combined, we get a data structure, for example, an array that contains objects that each contain booleans.

// Suppose you are tasked with creating some software, and it is up to you to determine 
//which datatypes and what data structure to use. For each of the following, write which data 
//types you would use to represent the data, and then give a small example of the data structure:

// A light switch that can be either on or off. -Boolean if(lightswitch === "on"){
//    console.log(true)
//}
// A user's email address.  -string let string = "words here"
// A spaceship with a hull, laser blasters, tractor beam, and warp drive. -array let spaceship = ["hull", "fricken laserbeams", "tractor beam", "warp drive"]
// A list of student names from our class.  -array let studentList = ["Billy", "Eddie", "Mike", "Bev", "Ben", "Stan", "Richie"]
// A list of student names from our class, each with a location. -Object let object = {
//     Billy: "sewer"
//     Bev: "sewer"
//     Eddie: "heaven"
// }
// A list of student names from our class, each with a location and each with a list of favorite tv 
//shows. -array within an object  let object = { more objects: [nowArray: true, true, false, false],more objects: [nowArray: true, true, false, false]}


// 2. Take it Easy
// Make an array that holds all of the colors of the rainbow.
// Write code that will access "blue" from the rainbow array.
// Make an object that is called your name and holds the information about your favorite food, a hobby, 
//the name of the town that you live in currently, and your favorite datatype.
// Write code that will access your hobby from the object that you just created.

/*let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
console.log(colors[4]);*/
// let Deirdre = {
//     food:"Thai", 
//     hobby: "hiking", 
//     residence:"Aurora", 
//     datatype:"string"}
// console.log(Deirdre.hobby);


// 3. Crazy Object!
// const crazyObject = {
//   taco: [
//     {
//       meat: 'steak',
//       cheese: ['panela', 'queso', 'chihuahua']
//     },
//     {
//       meat: 'chicken',
//       salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//     },
//   ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [
//       {
//         name: "Jeff",
//         occupation: "manager"
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude"
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favourtieHobby: "Swearing at Larry and Jeff"
//       },
//     ]
//   }
// }
// Use crazyObject to log the following.
//console.log(crazyObject.taco[1].salsa[5]);
// "omg my mouth is burning"
//console.log(crazyObject.larry.quotes[0]);
// "Pretty pretty prettayyyyy good"
//console.log(crazyObject.larry.characters[2].favourtieHobby);
// "Swearing at Larry and Jeff"
//console.log(crazyObject.larry.nicknames[1]);
// "Chicken Teriyaki Boyyyyyy"
//console.log(crazyObject.larry.characters[1]);
// The object the contains the name funkhauser

// 4. Object-ception
// With the following object:

// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// }
// // Change the value of limbo to null.
// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
// console.log(inception);
// 🔴 Commit: "object-ception"

// 5-7. Bond Films
// Copy the following bondFilms array of objects above into your js file. Use loops and conditionals 
//and functions in order to complete the below:
/*
const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];*/
// Create a new array called bondTitles with only the titles of the Bond films, and console.log the 
//new array.
// let bondTitles = [];
// //console.log(solarSystem[1])
// //solarSystem.push( { name:"Pluto", ringSystem: false, moons: ["Charon"] } );
// for(let i=0; i<bondFilms.length; i++){
//     bondTitles.push(bondFilms[i].title)
// }
// console.log(bondTitles)


// Create a new array oddBonds, of only the Bond films released on odd-numbered years.

// let oddBonds = [];
// for (let i = 0; i < bondFilms.length; i++) {
//     if(i%2 !== 0){
//     oddBonds.push(bondFilms[i].year)
// }
// }
// console.log(oddBonds);

// Determine the total cumulative gross of the Bond franchise, and console.log the result.
// Hint: To make the grosses into usable numbers, look into the .replace Javascript method 
//(there are many ways to do this, however). Look into parseInt() also.

// 🔴 Commit: "bond films gross"
// let bondGross = [];
//Not using regular expressions convert movie gross-string to #
// const convert = (str) =>{
//     let grossBond = "";
// for (let i = 0; i < bondFilms.length; i++) {
//     if(!isNaN(bondFilms[i]){
//     grossBond += bondFilms[i];
// }
// }
// return parseInt(grossBond)
// }
// console.log(grossBond);

// // let bondGross = 0;
// // for(i = 0; i < bondFilms.length; i ++){                          //2 /+"gi" for the comma means there are multi of it
// //     let newStr = bondFilms[i].gross.replace(/,/gi, "").replace("$","");  //gi is "global insensitive"-find multi of it, 1st replaced by 2nd
// //     bondGross += parseInt(newStr, 10)   //<"10" is in base 10, which is default, regular expressions the /,/ way of matching paths- looks through string for characters that match the pattern given
// // }                                                          //anytime it finds the comma it replaces it with the 2nd thing given
// // console.log(bondGross);

// // let bondGross = //bondFilms.replace("$", 0);
// //     bondFilms.reduce(function(prev, cur) {
// //     //bondFilms.replace("$", 0);
// //     return prev + cur.bondGross;
// //   }, 0);

  
//   console.log('Total bond:', parseInt(bondGross));
// console.log(bondGross);
// Congrats! You have completed the homework


// var accounts = [
//     { name: 'James Brown', msgCount: 123 },
//     { name: 'Stevie Wonder', msgCount: 22 },
//     { name: 'Sly Stone', msgCount: 16 },
//     { name: 'Otis Redding', msgCount: 300 }  // Otis has the most messages
//   ];
  
//   // get sum of msgCount prop across all objects in array
//   let msgTotal = accounts.reduce(function(prev, cur) {
//     return prev + cur.msgCount;
//   }, 0);
  
//   console.log('Total Messages:', msgTotal);

//obj with keys for each letter, how might we change that value to keep track of useful
//#of times it occurs, has each letter shown up +1, where in the string did it show up? how many times?
//use that value as you're looping through it, check if that value is already there, when we check the object later on
// const letters = {};
// const uniqueLetters = (str) =>{
//     for(let i=0; i<str.length; i++){
//         letters[str[i]] = 0;
//     }
//     for (let i = 0; i < str.length; i++) {
//         //if (letters[i]===str[i]) {
//             letters[str[i]]++
//         }
//         for (let i = 0; i < str.length; i++) {
//              if(letters[str[i]]===1){ //if letter = key add one to key, how do we know it's the first one, it goes through the string in order
//             return str[i];
//         }
       
//         }
//        //let value = letters[i] if it doesn't exist already, if it =1 we know it's unique when you do a for loop over obj, the order of keys doesn't matter
        
//     }

// console.log(uniqueLetters("This is it")); //what index is the first unique one we've seen so far