// //////concatenation
// const name="jhon";
// const age=34;
// console.log(`My name is ${name} and I am ${age} years old`);


// //////operation on strings
// const char='Hello World!';

// console.log('character length is:',char.length)    //length counter
// console.log(char.toUpperCase());                  //upper case character
// console.log(char.toLowerCase());                 //lower case character
// console.log(char.substring(0,5))                //substringing characters
// console.log(char.substring(0,5).toUpperCase())   //converting sub characters to uppercase
// console.log(char.split(''))                      //seperating chars one by one


//////ARRAYS
const fruits=['apples','oranges','pears',true]

console.log(fruits[1]);                 //printing an item by index of it
console.log(fruits.indexOf('oranges'))
fruits[3]='grapes'                     //adding a new item
console.log(fruits);               
fruits.push('mangos');                //adding an item to the end of an array
console.log(fruits);
fruits.unshift('strawberries');      //adding an item to the begining of an array
console.log(fruits);
fruits.pop();                       //removing the last item  
console.log(fruits)

console.log(Array.isArray(fruits))   //checks if a value is an array or not
console.log("hell yae")