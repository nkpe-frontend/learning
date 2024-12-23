
import './App.css'
import _ from 'lodash'; function App() {
console.log(_.assign([1,2,3,4,5,6,7,7],[12,21,3,2]));
const randomNumber=()=>{
  return Math.floor(Math.random()*100);
}
console.log(_.times(10,randomNumber))


function printName(){
  console.log("Narendra");
}
function handleChange(){
  console.log("NArendra")
  
}


var users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];


console.log(_.find(users,{firstName:"Kate",age:40}));




var bar={foo:{key:"foo"}};
_.set(bar,'foo.items[0]',243);
console.log(bar);
var name=_.get(bar,"name")
console.log(name)

console.log(_.deburr("déjà vu"))
// -> deja vu
console.log(_.deburr("Juan José"));


var posts = [
  { id: "1abc", title: "First blog post", content: "..." },
  { id: "2abc", title: "Second blog post", content: "..." },
  // more blog posts
  { id: "34abc", title: "The blog post we want", content: "..." }
  // even more blog posts
];

posts = _.keyBy(posts, "id");

var post = posts["1abc"]
console.log(post)





var users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Bill", age: 65 },
  { name: "Emily", age: 17 },
  { name: "Jack", age: 30 }
]

var reducedUsers = _.reduce(users, function (result, user) {
  if(user.age >= 18 && user.age <= 59) {
      (result[user.age] || (result[user.age] = [])).push(user);
  }

  return result;
}, {});

console.log(JSON.stringify(reducedUsers["28"],null,2))


var original = { foo: "bar",p:{name:"Narendra"} };
var copy = _.cloneDeep(original);
copy.p.name = "new value";
console.log(copy)


var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
var result = _.sortedUniq(sortedArray);
console.log(result)
return (<h1>Learning Lodash.
    <input onChange={_.debounce(printName,1000)}/>
  </h1>
  )
}

export default App
