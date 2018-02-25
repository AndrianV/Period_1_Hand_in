var size = [48,40,32,24,16,8];
var res = {"title":"6 Secure Randoms","randoms":[]};

var arr =[];
var rd = {};
for(let i = 0; i < size.length;i++)
{   
    
    require('crypto').randomBytes(size[i], (err, buf) => 
    {
        if (err) throw err;
        rd = {"length": buf.length,"random": `A string with ${buf.length} random hex-characters`};
        console.log(rd);
    });
    arr.push(rd);
    res["randoms"] = arr;
}

var obj1 = {"title":"6 Secure Randoms","randoms":[]};
var array = [];
var r1 = {"l1":1,"r1":"test1"};
var r2 = {"l1":2,"r1":"test2"};
var r3 = {"l1":3,"r1":"test3"};
var r4 = {"l1":4,"r1":"test4"};
array.push(r1);
array.push(r2);
array.push(r3);
array.push(r4);
obj1["randoms"] = array;

