// // 
// fetch('https://api.github.com/users')
// .then((res)=>{
//     console.log(res)
//     let data=res.json()
//     console.log(data)

//     data.then((users)=>{
//         console.log(users)
//          users.map((item)=>{
//         console.log(item.login);
        
//     })
   
//     })

// // })


async function getUsers(){
let data=await fetch('https://api.github.com/users')
console.log(data)
let final=await data.json()

}
getUsers()