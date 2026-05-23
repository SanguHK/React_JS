import React, { useState } from "react";

const Form1Example =()=>{

    let [username, setUsername]=useState('')
    let [email, setEmail]=useState('')
    let [password, setPassword]=useState('')
    let [age, setAge]=useState('')
    let [dob, setDob]=useState('')
    let [ph, setPh]=useState('')
    let [address, setAddress]=useState('')
    let [gender, setGender]=useState('')


    let handleUsername=(e)=>{
        setUsername(e.target.value)
        //  console.log(username)
    }
    let handleEmail=(e)=>{
        setEmail(e.target.value)
        // console.log(email)
    }
 let handlePassword=(e)=>{
        setPassword(e.target.value)
        // console.log(password)
 }

 let handleSubmit=(r)=>{
    r.preventDefault();
    console.log(username, email ,password)
 }
 let displayData=()=>{
    return `My Name is ${username}
 My age is ${age}
 My password is ${password}`}
    return(
       <form  onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label htmlFor="username"> Username:</label>
                    
                    <input type="text" id="username" name="username"  onChange={handleUsername} placeholder="Enter the Username" />
                    <br /><br />
                    <label htmlFor="email">Email:</label>
              
                    <input type="email" id="email" name='email' onChange={handleEmail} placeholder="Enter the email" />
                    <br /><br />
                    <label htmlFor="password">Password:</label>
                    
                    <input type="password" id="password" name="password" onChange={handlePassword} placeholder="Enter the Password" />
                    <br /><br />
                    {/* <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age"  placeholder="Enter the Age" />
                    <br /><br />
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" />
                    <br /><br />
                    <label htmlFor="ph">Phone:</label>
                    <input type="tel" id="ph" name="ph"   placeholder="Enter the Phone Number" max={10}/>
                    <br /><br /> */}
                    
                    {/* <label htmlFor="country">Country:</label>

                    <select name="" id="">
                    <option value="india">India</option>
                    <option value="uk">UK</option>
                    <option value="usa">USA</option>
                    <option value="ussr">Russia</option>
                    <label htmlFor="address">Address:</label>
                    </select> */}
                    {/* <br /><br /> */}
                    {/* <label htmlFor="address">Address:</label>
                    <textarea  name="address" id="address" onChange={handlechange} placeholder="Enter the address"></textarea>
                    <br /><br />
                    <label htmlFor="gender">Gender:</label>
                    <input type="radio" id="male" name="gender" value="male" onChange={handlechange} />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" onChange={handlechange} />
                    <label htmlFor="female">Female</label>
                    <br /><br /> */}
                    <button  type="submit">Submit</button>
                    <button type="reset">Reset</button>
                    <h1>{username}</h1>
                    <h1>{email}</h1>
                    <h1>{password}</h1>


                </fieldset>
            </form>
    )
}
export default Form1Example;
