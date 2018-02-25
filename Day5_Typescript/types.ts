//booleans
let isDone:boolean = true;
isDone = false;

//numbers
let count:number = 1; 
count = 7;

//strings
let user: string = "Kurt";
let msg = `**************
    Hi ${user} welcome today
**************`

console.log(msg);


//arrays
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
let numbers2: Array<number> = [];
numbers2.push(2);

let numberString: any = 1;
numberString = "5";

//functions
function logInfo(info: any): void{
    console.log(info);
}
console.log(logInfo(5));

//Enums
let skill = 0;
enum skills {LOW, MEDIUM, HIGH, EXPERT};
if (skill === skills.MEDIUM) {
    //do smth
}
