// import { useState } from "react"

// const FBCExample =()=>{
//     let [name,setName]=useState("Sanganna")
//    let handleName=()=>{
//         setName("Rahul")
//     }

//     let handleAge=()=>{
//         setAge(34)
//     }
//     let handleAddress=()=>{
//         setAddress("Mangalore")
//     }
//     let [age,setAge]=useState(21)
//     let [address,setAddress]=useState("Mysuru")
//     return(
//         <>
//         <h1 >Hello, {name}!</h1>
//          <h1>{age}</h1>
//         <h1>{address}</h1>
//         <button onClick={handleName}>Change Name</button>
//         <button onClick={handleAge}>Change Age</button>
//         <button onClick={handleAddress}>Change Address</button>
//         </>
//     )
// }
// export default FBCExample


import React, { useState } from "react";

const FBCExample =()=>{
    let [details,setDetails]=useState({
        name:"Virat",
        age:37,
        address:"Delhi"
    })
    let handleDetails=()=>{
        setDetails({
            name:"Rohit",
            age:39,
            address:"Mumbai"
        })
    }
    let {name,age,address}=details
    return(
        <>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>
        <h2>Address:{address}</h2>
        <button onClick={handleDetails}>Change Details</button>
        </>
    )
}
export default FBCExample