// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

const promiseOne = new Promise(function (resolve, reject) {
    // Do async task
    // DB Call, Network, cryptograph
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promised Consumed");
})



new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task2 is complete");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async Task2 resolve");
})



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Suraj Kumar", email: "sk@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "SURAJ KUMAR", email: "sk123@gmail.com" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {  // first then return value is recive by second than
    console.log(username);
}).catch((Error) => {
    console.log(Error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})




const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "JavaScript", password: 123 })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
