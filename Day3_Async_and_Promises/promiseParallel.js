let promiseFactory = function (msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            var ok = true;  
            if(msg = "a") {
                ok = false;
                err = "a is not allowed";
            }
            if (ok) {
                resolve(msg.toUpperCase(msg));
            }
            else {
                reject(err);
            }
        }, delay);
    });
};
let p1 = promiseFactory("Promise[1]", 4000);
let p2 = promiseFactory("Promise[2]", 1000);
let p3 = promiseFactory("Promise[3]", 3000);
let p4 = promiseFactory("Promise[4]", 1000);

Promise.all([p2, p1, p3, p4])
.then(data => {
    console.log(data.join("\n"));
})
.catch(err => console.log("Error :" + err));