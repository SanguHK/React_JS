// import React from "react";
// import userContext from "./Example1/UseContext";
// import ComponentC from "./Example1/ComponentC";

//  const App = () => {
//     let details ={
//         name:"Sanganna",
//         age:22,
//         address:"Mysuru"
//     }
//     return (
//         <div>  
//            <userContext.Provider value={details}>
//         <ComponentC />
//            </userContext.Provider>
//         </div>
//     );
// };

// export default App;

import React from "react";
import QSP from "./Example2/QSP";
import courseStore from "./Example2/courseContext";
const App =()=>{
    let courses={
        JFS:['Java','HTML','CSS','JS','React','J2EE'],
        PFS:['Python','HTML','CSS','JS','Django']
    }
    return(
        <div>
            <courseStore.Provider value={courses}>
                <QSP />
            </courseStore.Provider>
        </div>
    )
}
export default App
