import React, { useState } from "react";

const FormExample1 =()=>{

    let [formData, setFormData]=useState({
        username: "",
        email: "",
        password: "",
        age: "",
        dob: "",
        ph: "",
        address: "",
        gender: ""
    })

    let handlechange=(e)=>{
        setFormData({
            ...formData, [e.target.name]: e.target.value 
        })
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
    return(
        <div>
            <form  onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={handlechange} placeholder="Enter the Username" />
                    <br /><br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name='email' onChange={handlechange} placeholder="Enter the email" />
                    <br /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handlechange} placeholder="Enter the Password" />
                    <br /><br />
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" onChange={handlechange} placeholder="Enter the Age" />
                    <br /><br />
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" onChange={handlechange} />
                    <br /><br />
                    <label htmlFor="ph">Phone:</label>
                    <input type="tel" id="ph" name="ph" onChange={handlechange}  placeholder="Enter the Phone Number" max={10}/>
                    <br /><br />
                    
                    {/* <label htmlFor="country">Country:</label>

                    <select name="" id="">
                    <option value="india">India</option>
                    <option value="uk">UK</option>
                    <option value="usa">USA</option>
                    <option value="ussr">Russia</option>
                    <label htmlFor="address">Address:</label>
                    </select> */}
                    {/* <br /><br /> */}
                    <label htmlFor="address">Address:</label>
                    <textarea  name="address" id="address" onChange={handlechange} placeholder="Enter the address"></textarea>
                    <br /><br />
                    <label htmlFor="gender">Gender:</label>
                    <input type="radio" id="male" name="gender" value="male" onChange={handlechange} />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" onChange={handlechange} />
                    <label htmlFor="female">Female</label>
                    <br /><br />
                    <button  type="submit">Submit</button>
                    <button type="reset">Reset</button>


                </fieldset>
            </form>
        </div>
    )
}
export default FormExample1;