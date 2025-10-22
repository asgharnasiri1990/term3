//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< This is a part of exercises that belongs to the 3rd term!!!! >>>>>>>>>>>>>>>
// //////concatenation
const name="jhon";
const age=34;
console.log(`My name is ${name} and I am ${age} years old`);


// //////operation on strings

const char='Hello World!';

console.log('character length is:',char.length)    //length counter
console.log(char.toUpperCase());                  //upper case character
console.log(char.toLowerCase());                 //lower case character
console.log(char.substring(0,5))                //substringing characters
console.log(char.substring(0,5).toUpperCase())   //converting sub characters to uppercase
console.log(char.split(''))                      //seperating chars one by one


//////ARRAYS/////////////////////
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


//////Objects/////////////////////
const person={
    firstname:'jhon',
    lastname:'doe',
    age:34,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA',
    }
}

console.log('object: ',person.firstname);         
console.log(person.hobbies[1])    
console.log(person.address.city)  //accessing object properties
person.email='jhon@gmail.com'
console.log(person)               //adding new property to an object


//////Arrays of Objects/////////////////////
const todos=[
    {
    id:1,
    Text:'take out trash',
    iscompleted:true
   },
    {
        id:2,
        Text:'meeting',
        iscompleted:true
    },
    {
        id:3,
        Text:'appointment',
        iscompleted:false
    }
]

console.log(todos)
console.log(todos[1].Text)

const todojson=JSON.stringify(todos)    //converting above array object to Json for sending to the server
console.log(todojson)