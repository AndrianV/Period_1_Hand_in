let promiseFactory = function (msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            var ok = true;  
            if (ok) {
                resolve(msg.toUpperCase(msg));
            }
            else {
                reject("UPPPPs");
            }
        }, delay);
    });
};
let p = promiseFactory("Msg from Promise", 1000);
let results = [];
p.then(data => {
    results.push(data);
    return promiseFactory("Hello World!", 3000);
})
    .then(data => {
        results.push(data);
        return promiseFactory("Hi class!", 2000);
    })
    .then(data => {
        results.push(data);
        console.log(results.join("\n"));
    })
    .catch(err => console.log("Error: " + err));