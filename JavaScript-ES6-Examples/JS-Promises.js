let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2){
        resolve("Success");
    } else {
        reject("Failed");
    }
})

p.then(message => {
    console.log("This is Success Message", message)
}).catch(error => {
    console.log("This is error message", error)
})