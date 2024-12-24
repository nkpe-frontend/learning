// const obj = { first: 'Jane', last: 'Doe' };
// const {first:f,last:l}=obj;
// console.log(f,l)
// console.log(Object.getOwnPropertyDescriptor(obj, 'first'))
/*
{
configurable:true
enumerable:true
value:"Jane"
writable:true
}
*/
// const iterable = ['a', 'b',"c","d"];
// var [x,y]=iterable;
// console.log(x,y)
// var[x,...c]=iterable;
// console.log(x,c)

// const arr=["a","b"];
// for(let [index,element] of arr.entries()){
//     console.log(index,element)
// }

// const obj = { a: [{ foo: 123, bar: 'abc' }, {}], b: true };
// const {a:[{foo:val}]}=obj;
// console.log(val);

// const {length:len}="abc";
// console.log(len);
// const {toString:s}=122;
// console.log(typeof s.call(123))


// const obj1={};
// const obj2={};
// console.log(Object(obj1)==obj2)

// const obj={name:"Narendra"};
// const obj2=Object("obj");
// obj2.name="Panchal";
// console.log(obj2)
// const [x=1] = [undefined]; // x = 1
// const {prop: y=2} = {prop: undefined}; // y = 2


// const [x=3, y] = []; // x = 3; y = undefined
// You can also use default values in object patterns:

// const {foo: x=3, bar: y} = {}; // x = 3; y = undefined
// const [x=3, y=x] = [];     // x=3; y=3
// const [x=3, y=x] = [7];    // x=7; y=7
// const [x=3, y=x] = [7, 2]; // x=7; y=2

// const [{ prop: x } = { prop: 123 }] = [];
// Because the Array element at index 0 has no match on the right-hand side, destructuring continues as follows and x is set to 123.
// const { prop: x } = { prop: 123 };  // x = 123

// const FOO = 'foot';
// const { [FOO]: f } = { foot: 123 }; // f = 123
// console.log(f)

// const obj = {};
// ({ foo: obj.prop } = { foo: 123 });
// console.log(obj); // {prop:123}



// const map = new Map().set(false, 'no').set(true, 'yes');
// for (const [key, value] of map) {
//   console.log(key + ' is ' + value);
// }

// const arr = ['a', 'b'];
// const iter = arr[Symbol.iterator]();
// while (true) {
//     const {done,value} = iter.next(); // (A)
//     if (done) break;
//     console.log(value);
// }


// Helper function:

// function getNext(iterator) {
//     const {done,value} = iterator.next();
//     return (done ? undefined : value);
// }



