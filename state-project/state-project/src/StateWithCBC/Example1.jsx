// import React, {Component} from "react";

// class Example1 extends Component{
//     constructor(){super();
//         this.state = {
//             name: "Sanganna",
//             age: 24,
//             address: "Bangalore"
//         }
//     }
//     render(){
//         return(
// <div>
//     <h1>Example 1</h1>
//     <h1>{this.state.name}</h1>
//     <p>Age: {this.state.age}</p>
//     <p>Address: {this.state.address}</p>
// </div>
//         )
//     }
// }
// export default Example1;


import React, { Component } from "react";

export default class Example1 extends Component {
    constructor() {
        super()
        this.state = {

            emp1: {
                name: "Sanganna",
                age: 24,
                designation: "Software Engineer"
            },
            emp2: {
                name: "Ram",
                age: 23,
                designation: "Software Developer"
            },

        }
    }
    handleEmp=()=>{
        this.setState({
            emp1:{
                name:"Rahul",
                age:32,
                designation:"Cricketer"
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Employee 1</h1>
                <h2>Name: {this.state.emp1.name}</h2>
                <p>Age: {this.state.emp1.age}</p>
                <p>Designation: {this.state.emp1.designation}</p>
                <button onClick={this.handleEmp}>Change Empoyee Details</button>
                <h1>Employee 2</h1>
                <h2>Name: {this.state.emp2.name}</h2>
                <p>Age: {this.state.emp2.age}</p>
                <p>Designation: {this.state.emp2.designation}</p>
            </div>
        )
    }
}




// //? update the state using setState method
// import React, {Component} from "react";

// export default class Example1 extends Component{
//     state={
//         myFavFood:"Masala Dosa"
//     }
//     handleChageFood=()=>{
//         this.setState({myFavFood:"Chicken Biryani"})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My fav food is {this.state.myFavFood}</h1>
//                 <button onClick={this.handleChageFood}>Change food</button>
//             </div>
//         )
//     }
// }