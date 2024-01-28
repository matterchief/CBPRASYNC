//SYNC

console.log(1);
console.log(2);
console.log(3);


//ASYNC run parrallel without stopping all the instruction


function hello(){
    console.log("sup my sister"); 
}

setTimeout(hello,2000);

///

setTimeout(()=>{
console.log("Hello my brother"); 

},8000); 


console.log(4);
console.log(5);

function sum(a,b){
    console.log(a+b); 
}

function calc(a,b, sumCum){
    sumCum(a,b);
}

calc(1,2,sum);

//

// var randomNumber = Math.floor(Math.random() * 100);
// // alert("Random number generated is "+ randomNumber);

// var Geusscount=0; 

// function game(){

//     let UserInput = parseInt(prompt("Enter your number: "));  

//     if(UserInput<=0 || UserInput>=100){
//         alert("the number must be betweeen 1-100"); 
//     }
//     else if (randomNumber===UserInput){
//         alert("Your guess is right");
//         Geusscount++; 
//         game(); 
//     }else if (UserInput>randomNumber){
//         alert("go lower");
//         Geusscount++; 
//         game(); 
//     }else if  (UserInput<randomNumber){
//         alert("go higher");
//         Geusscount++;  
//         game();
//     }
// }

// game(); 