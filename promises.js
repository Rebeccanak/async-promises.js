// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
//The function should log the message to the console after the specified delay time.

async function logTheMessageWithAdelay(message, delay){
 await new Promise (resolve =>setTimeout(resolve, delay));
 console.log(message);
    
}
logTheMessageWithAdelay('I want to understand well',1000)
// logTheMessageWithAdelay('I am waiting',1000);

// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given
// a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

// You have an asynchronous function performTask() that returns a Promise. 
//The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls
// performTask() and logs a custom success message if the task is successful, and a custom error message
// // if there's an error.
// //promise chaining
// let success = false;
// let promise = new Promise(function(resolve, reject){
//     if(success){
//         resolve('I have everything')
//     }
//     else{
//         reject('I am still poor')
//     }
// }).then(()=>{console.log('It is a dream come true')})
// .catch(()=>{console.log('I will get my own money')})
// .finally(()=>{console.log('I will be happy')})
// console.log({promise});

async function performTask(){
   let succesful = true;
   let promise = new Promise(function(resolve, reject){
      if(succesful){
         resolve('Task was successful')
      }
      else{
         reject('An error occured')
      }
   }).then(()=>{console.log('The task was successful')})
    .catch(()=>{console.log('An error occured')})
    console.log({promise})
}
performTask()
