// import { Component } from "react";
import React, {Component} from "react";

const Task1=()=>{

    let employee=[
        
            {
            id:1,
            ename:"Ambani",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZi8VH7jDT64jWy5hFzA9u1f_R8vHloz_Z9zbR-Er0RBi0KCH4TTx_0RWtZhDDSfZdF6c4uH3ajjBiX41BTBpLOh0_Razi9KmOEtWaWnM-Xg&s=10"
             ,role:"Developer"
            },

            {
                id:2,
            ename:"Tata",
            image:"data:image/jpeg;base64,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",
             role:"Tester"
            },

            {
                id:3,
            ename:"Narayana",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkO8e6Fw0flOcmHtqzt4VbTZ6HhonoNfjVlexRM-PaVD0uAEldz89pgo7axL1OA9i5f53S5K-5hWQMcTi-qBFEfaN3lsXpCabMo-R_iSi1&s=10", role:"HR"
            },
            
            
            
        
    ]

    // console.log(employee)

   return(
        <div>
            {
                employee.map((item)=>{
                    // console.log(item);
                     return(
                    <>
                    <h2>ID:{item.id}</h2>
                    <h1>{item.ename}</h1>
                    <img src={item.image} alt="" />
                    <p>{item.role}</p>
                    </>
                )
                })

               
            }
        </div>
    )
       
}
        
export default Task1