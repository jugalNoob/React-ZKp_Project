import sha256 from 'crypto-js/sha256';
import React from 'react';
function form() {
  //Param Your nav Form//
  const id=3424545;
  const value=`/form/${id}`
  const hash = sha256(value);
  let hashes=hash.toString()
let val=`/form/${hashes}`

return val
  }


  
function hash() {
//Param Your nav Form//
const id=3424;
const value=`/form/${id}`
const hash = sha256(value);
let hashes=hash.toString()
let val=`/hash/${hashes}`

return val
}



      
function profile() {
//Param Your nav Form//
const id=24545;
const value=`/form/${id}`
const hash = sha256(value);
let hashes=hash.toString()
let val=`/profile/${hashes}`

return val
}



function Login() {
  //Param Your nav Form//
  const id=6969;
  const value=`/login/${id}`
  const hash = sha256(value);
  let hashes=hash.toString()
  let val=`/login/${hashes}`
  
  return val
  }
  

function AllHash() {
 
  return (
    <div>AllHash</div>
  )
}

export { AllHash, Login, form, hash, profile };















// import sha256 from 'crypto-js/sha256';

// function form() {

//         const id = 3424545;
//         let rand = Math.floor(Math.random() * id);
//         const value = `/chat/${rand}`;
//         const hash = sha256(value);
//         let hashes = hash.toString();
//         let val = `/chat/${hashes}`;
        
//   return val;


// }

// export { form };


//   const ids = 3424545;
//   let rand = Math.floor(Math.random() * ids);
//   console.log(rand , 'rand')
//   const hash = sha256(rand.toString());
//   // console.log(hash , 'hash')
//   let hashes = hash.toString();
//   console.log(hashes , 'hashes')




// console.log(form())

// setInterval(()=>{

//     const ids = 3424545;
//     let rand = Math.floor(Math.random() * ids);
//     console.log(rand , 'rand')
//     const hash = sha256(rand.toString());
//     // console.log(hash , 'hash')
//     let hashes = hash.toString();
//     console.log(hashes , 'hashes')



//     // const ids = 3424545;
//     // // console.log(ids)
//     // let  rand=Math.floor(Math.random()*ids)
//     // console.log(rand)
//     // const hash = sha256(rand);
//     // // console.log(hash)
//     // let hashes = hash.toString();
//     // console.log(hashes)
// } , 4000)


// const id = 3424545;

// const hash = sha256(id);
// console.log(hash)
// let hashes = hash.toString();
// console.log(hashes)




//   console.log(form()); // Ensure that the function is being called correctly
