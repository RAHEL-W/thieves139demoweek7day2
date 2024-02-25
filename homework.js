//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]




}
// ======i saw it on youtube======
//declearing function with parameter
function favorite_food_dishes(object)  {
    //looping an object
    for (let keys in object){
        // if condition, which means if value of dictionery() is object and not empty
        if (typeof object[keys] === 'object' && object[keys] !== null){
              console.log(`${keys}`)
            favorite_food_dishes(object[keys])       
        }
        // else if  (Array.isArray(object[keys] === 'object' && object[keys] !== null) )  {
             
        //     let fev = "my favorite" +' '+ keys +  object[keys]

        //     console.log(`${fev}`)
        // } 
           
            
        
        // if condition is false
     else {
        console.log("my favorite"+' '+[keys] + " ",object[keys]);
    }
    }
}
favorite_food_dishes(person3);

// call finction
    


// let  y ={ 
//     pizza:["Deep Dish","South Side Thin Crust"]};
//     for (let keys in y){
//        console.log(`${keys} ${y[keys]}`) 






//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person1{
    constructor(name, age){

        this.name = name;
        this.age= age 
        
        
       
        

    }

   

// Use an arrow to create the printInfo method
   
    printInfo = () => {
        return `hey am ${this.name} and am ${this.age}`
    } 

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
 Age_inc = (age) =>{
        this.age ++
    }
}

const new1 = new Person1("Rahel", 23)
new1.Age_inc()
console.log(new1.printInfo())
new1.Age_inc()
console.log(new1.printInfo())




const new3 = new Person1("Elsa", 27)
new3.Age_inc()
new3.Age_inc()
new3.Age_inc()
console.log(new3.printInfo())





// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/


const ErgastData = async () =>{
try{
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()

    console.log(data)


}
catch(error){
    console.error(`error: ${error}`)
}
}

ErgastData ()

// =================or====================

fetch('http://ergast.com/api/f1/2008/5/driverStandings.json').then((response) =>{

    console.log(response.status)
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.error(`error: ${error}`)
})



// ------------Description---------
// Create a function that given a list which represents street lights,
// determine if an outage has occurred. A street with a total
// number of "F" greater than or equal to 2 returns "Outage", anything below returns "Power"
// ----------Example----------
// solution([ 'T', 'F', 'F', 'F' ]) => "Outage"
// solution([ 'T', 'T', 'T', 'T', 'F' ]) => "Power"


//   creatting function
// for loop
// if condithioon


function s_light(list){
    let  Count = 0
    for(let i=0; i< list.length; i++){
        if(list[i] == 'F'){
            Count++;
        }  
    }
  if (Count >= 2){
    console.log('Outage')
  }
 else{
    console.log('Power') 
 }  
}

s_light([ 'T', 'T', 'T', 'T', 'F' ])



// =================================codewars==============================================
// Counting sheep....

const count_sheeps = (sheep) =>{
    let count = 0
   for(i=0; i<sheep.length; i++){
    if(sheep[i] === true){
        count +=1;
    }
   }
     
  console.log(count);
  
};




 count_sheeps([true, true, true ]);   

//  A Needle in the Haystack

 const find_needle = (haystack) =>{
    for(i=0; i<haystack.length; i++){
        if(haystack[i] === 'needle'){
           console.log(i)
        }
    }
 }

 find_needle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] )