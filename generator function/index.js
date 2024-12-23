// Example 1: Basic Generator Function


/*

function* countUpto(max){
let count=0;
while(count<=max){
    yield count;
    count++;
}
}
const counter=countUpto(5);
let num=counter.next().value;
while(num!=undefined){
    console.log(num);
    num=counter.next().value;
}
    **/

// Example 2: Generators for Iterating Over Collections


/*
function* iterateArray(arr){
    for(let i=0;i<arr.length;i++){
        yield arr[i];
    }
}
const arr=[10,20,23,40];
const iterator=iterateArray(arr);
 let num=iterator.next().value;
while(num){
console.log(num);
num=iterator.next().value;
}
**/


// Example 4: Using yield* for Delegating to Another Generator
/*


function* Generator1(){
    yield 1;
    yield 2;
}
function* Generator2(){
    yield 3;
    yield 4;
    yield* Generator1();
    yield 5;
}
let iterator=Generator2();
let num=iterator.next().value;
while(num){
    console.log(num);
    num=iterator.next().value;
}


**/

// Example 5: Infinite Sequence with Generators

/**
 
function* infiniteSequence(){
    let num=0;
    while(true){
        yield num;
        num++;
    }
}
let sequence=infiniteSequence();
let num=sequence.next().value;
while(num<=5){
    console.log(num);
    num=sequence.next().value;
}


 */


// Using return in Generators

function* simpleGenerator(){
    yield 1;
    yield 2;
    return 3;
}
let gen=simpleGenerator();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())