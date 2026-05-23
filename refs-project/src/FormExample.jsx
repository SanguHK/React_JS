import React, { useRef, useState } from "react";
import { use } from "react";

const ForExample = ()=>{
    let userRef=useRef()
    console.log(userRef)

    let passRef=useRef()
    console.log(passRef)

    let [state,setState]=useState(false)

    let handleForm=(e)=>{
        e.preventDefault();
        if(!state){
           console.log(userRef.current.value)
           console.log(passRef.current.value)
        }
        setState(!state)
    }


    return(
        <>
        <form onSubmit={handleForm} >
            <fieldset >
                <legend>Login</legend>
                <label  htmlFor="username">Username:</label>
                <input ref={userRef} type="text" id="username" name="username"  placeholder="Enter Username"/>
                <br /> <br />
                <label htmlFor="password">Password:</label>
                <input   type="password"  ref={passRef} id="password" name="password" placeholder="Enter Password" />

                <br /> <br />
                <button style={{ marginRight: "20px" }}>Submit</button>
                <button>Reset</button>
            </fieldset>
        </form>
        </>
    )
}
export default ForExample