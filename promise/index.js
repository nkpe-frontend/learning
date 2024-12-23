let promise = new Promise(function(resolve, reject) {
    if(true)
      resolve("done");
    else
      reject(new Error("…"));
      
    });


    promise.then((res)=>{
        console.log(res)
    })
    const isDone = new Promise((resolve,reject)=>resolve("Narendra"))
//...

const checkIfDone = () => {
  isDone
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(error)
    })
}
checkIfDone()






new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
  
    console.log(result); 
    return result * 3;
  
  }).then(function(result) { 
  
    console.log(result); 
    return result * 4;
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 6;
  
  });