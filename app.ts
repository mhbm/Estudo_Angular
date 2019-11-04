let message: string = "Help me, TesteMan. You're my only hope!";

console.log(message);

let episode: number = 4
console.log("THis is episode : "+ episode);
episode = episode + 1;
console.log("Next episode will be : " + episode);

let favoriteDroid;
favoriteDroid = 'BB-8';
console.log('My favorite droid is ' + favoriteDroid);

function countArray (... numbers: number[]):number {
    return numbers.reduce((a,b) => a + b, 0)
}

function countArray_ (numbers: number[]):number {
    return numbers.reduce((a,b) => a + b, 0)
}

function inc(speed:number, inc: number) : number {
    return speed + inc;
}

function inc2(speed:number, inc:number = 1) : number {
    return speed + inc;
}

function inc3(speed:number, inc?:number) : number {
    let auxNumber = inc || 1;
    return speed + auxNumber;
}


console.log("*************");
console.log("O inc é " + inc(1,3));
console.log("O inc2 é " + inc2(3,6));
console.log("O inc3 é " + inc2(3));
console.log("*************");
console.log("A soma é : " + countArray(1,5,3));
console.log("A soma utilizando o segundo é : " + countArray_([5,5,3]));


let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12;
}

let distance = 14;
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`);

let call = (name:string) => console.log(`Do you copy me, ${name}`);

call("Test");

function test(inc: number, aux:number = 1) : number {
    return inc +aux;
}

console.log(`Function test(5) ----  ${test(5)}`);
console.log(`Function test(5,3) ----  ${test(5,3)}`);