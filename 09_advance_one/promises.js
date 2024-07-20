// const prom1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("prom1 created!");
//         resolve();
//     },
//     0);
// });

// const promResolved1 = prom1.then(function(){
//     console.log("prom1 resolved!");
// });

// const prom2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("prom2 created!");
//         resolve();
//     }, 0);
// }).then(function(){
//     console.log("prom2 resolved!");
// });

// the name of the parameters inside the callback func can be anything, but we have to use the same name while calling it in timeout function.
// const prom3 = new Promise(function(nik, anand){ // nik -- resolve, anand -- reject
//     // it is not necessary to have a timeout function either
//     // setTimeout(function(){
//     //     console.log("prom3 created!");
//     //     nik({user : "nikhil_anand", email : "nikanand0118@gmail.com"});
//     // }, 1000);
//     nik({user : "nikhil_anand", email : "nikanand0118@gmail.com"}); // data we pass to the resolve can be accessed in the "then" method
//     console.log("prom3 created!");
// })

// const promResolved3 = prom3.then(function(userDetail){
//     console.log(userDetail);
//     // console.log(userDetail.user); we can destructure the obj we recieved to get specific properties data of that object
//     console.log("prom3 resolved!");
// });

// const prom4 = new Promise(function(resolve, reject){
//     let err = false;
//     console.log("prom4 created!!");
//     if(err){
//         reject("promise is returning error!!")
//     }
//     else{
//         resolve({username : "Nikhil Anand", emailId : "nikanand0118@google.com"});
//     }
// });
// const promResolved4 = prom4
// .then(function(user){
//     console.log("prom4 resolved!!");
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log("prom4 resolved again!!");
//     console.log(username);
// })
// .catch(function(errData){
//     console.log("prom4 rejected!!");
//     console.log(errData);
// })
// .finally(function(){
//     console.log("prom4 resolved or rejected!!");
// })
// console.log("----47-----  " + promResolved4);

// function prom5(){
//     return new Promise(function(resolve, reject){
//     console.log("prom5 created!!");
//     resolve({username : "Nikhil Anand", emailId : "nikanand0118@google.com"});
// });
// }

// const prom5 = new Promise(function(resolve, reject){
//     console.log("prom5 created!!");
//     resolve({username : "Nikhil Anand", emailId : "nikanand0118@google.com"});
// });

// async function resolvePromFunc(){
//     // console.log("prom5 resolved!!");
//     // const promResolved5 = await prom5;
//     // console.log("prom5 resolved!!");
//     // console.log(promResolved5);
//     // console.log(await prom5());
//     console.log(await prom5);
//     console.log("prom5 resolved!!");
// }

// resolvePromFunc();

// const prom6 = new Promise(function(resolve, reject){
//     // let isResolve = false;
//     let isResolve = true;
//     if(isResolve){
//         resolve({username : "Nikhil Anand", emailId : "nikanand0118@google.com"});
//     }
//     else{
//         reject("promise is returning error!!")
//     }
// });

// async function promResolve6(){
//     // console.log(await prom6);
//     try {
//         console.log("try");
//         console.log(await prom6); // await <promise_name> -- this is actually same as ".then" where we actually get the data from the resolve.
//     } catch (error) {
//         console.log("catch");
//         // console.log(await prom6);
//         console.log(error); // this is similar to the ".catch" to get the error on reject.
//     }
// }

// promResolve6();

// async function getUser() {
//     // always wrap around the code in async func in a try block
//     try {
//         console.log("getUser");
//         // fetch -- this returns a "promise", hence this is same as the other promises that we created above. it's just that we are making a network or api request here
//         // and from there we get a promise which either returns data on resolve or throws error on reject due to some issues on n/w side or incorrect url being passed here.
//         const resp = await fetch("https://api.github.com/users/resilientnik9");
//         console.log(resp);
//         const data = await resp.json();
//         console.log("--------------------------------------------");
//         console.log(data);
//         // console.log(JSON.parse(JSON.stringify(resp)));
//     } catch (error) {
//         console.log(error);
//     }
//     // console.log("getUser");
//     // // fetch -- this returns a "promise", hence this is same as the other promises that we created above. it's just that we are making a network or api request here
//     // // and from there we get a promise which either returns data on resolve or throws error on reject due to some issues on n/w side or incorrect url being passed here.
//     // const resp = await fetch("https://api.github.com/users/resilientnik9");
//     // console.log(resp);
//     // const data = await resp.json();
//     // console.log("--------------------------------------------");
//     // console.log(data);
//     // // console.log(JSON.parse(JSON.stringify(resp)));
// }

// getUser();

// doing same as the above async wait in ".then" format

fetch("https://api.github.com/users/resilientnik9")
.then(function(response){
    console.log(response);
    console.log("------------------------------------------");
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log("fetch promise resolved or rejected!!");
})