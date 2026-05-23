import React from "react";
import { useContext } from "react";
import courseStore from "./courseContext";
const Mayank=()=>{
    let tech=useContext(courseStore)
    console.log(tech)
    return(
        <div>
                <h1>Mayank Skills:</h1>
            {tech.PFS.map((skills)=>{
                return (
                    <p>{skills}</p>
                )
            })}
        </div>
    )
}
export default Mayank