
// // Object DEstructuring
// let student={
//     studentID:201,
//     studentName:"Rahul",
//     age:20,
//     contact:{
//         email:"rahul@gmail.com",
//         phone:987463210,

//     },
//     address:{
//         city:"Mysore",
//         state:"Karnataka",
//         pincode:570001
//     }
// };
// console.log(student)

// let {studentID,studentName,age,contact:{email,phone},address:{
//     city,state,pincode
// }}=student
// console.log(studentID)
// console.log(studentName)
// console.log(age)
// console.log(email)
// console.log(phone)
// console.log(city)
// console.log(state)
// console.log(pincode)

// // Array DEstructuring

// let skills=["java","html","Css","sql"]
// console.log(skills)

// let [s1,s2,s3,s4]=skills
// console.log(s1)
// console.log(s1)
// console.log(s3)
// console.log(s4)


// //Object destructuring task-2

// let product={
//     productId:501,
//     productName:"Laptop",
//     price:75000,
//     specs:{
//         brand:"Dell",
//         ram:"16GB",
//         Storage:" 512 SSD"
//     },
//     seller:{
//         name:"Tech Store",
//         city:"Bangalore"
//     },
// };
// console.log(product)

// let {productId,productName,price,specs,seller}=product
// console.log(productId)
// console.log(productName)
// console.log(price)

// let {brand,ram,Storage}=specs

// console.log(specs)
// console.log(brand)
// console.log(ram)
// console.log(Storage)
// console.log(seller)
// console.log(city)
// console.log(name)

console.log("___Task-3________")

// let company={
//     companyName:"Infosys",
//     city:"Bangalore",
//     department:{
//         depName:"Development",
//         manager:{
//             name:"Priya",
//             experience:10
//         }
//     },
//     employees:{
//         total:500,
//         active:450
//     }
// };
// console.log(company)

// let {companyName,city,department:{depName,manager:{name,experience}},
// employees:{total,active}}=company
// console.log(companyName)
// console.log(city)
// console.log(depName)
// console.log(name)
// console.log(experience)
// console.log(total)
// console.log(active)


// Task-4
console.log("------------Task-4----------------")

let school={
    schoolName:"National Public School",
    principal:"Mr.Sharam",
    classes:{
        class10:{
            sectionA:{
                teacher:"Mrs.Rao",
                strength:30
            }
        }
    },
    address:{
        City:"Bangalore",
        state:"Karnataka"
    }
};
console.log(school)

let {schoolName,principal,classes:{class10:{sectionA:{teacher,strength}}},
address:{City,state}}=school

console.log(schoolName)
console.log(principal)
console.log(teacher)
console.log(strength)
console.log(City)
console.log(state)

console.log("------------Task-6----------------")
let student={
    stdID:101,
    stdName:"Tejas",
    stdAddres:{
        street:"#893",
        area:"TK Layout",
        loc:"Mysore",
        State:"Karnataka",
        pincode:570009
    },
    subjects:["Java","SQL","WEB","React JS", "J2EE"]
}
console.log(student)

let {stdID,stdName,stdAddres:{street,area,loc,State,pincode},subjects:[s1,s2,s3,s4,s5]}=student
console.log(stdID)
console.log(stdName)
console.log(street)
console.log(area)
console.log(loc)
console.log(State)
console.log(pincode)

console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)


console.log("------------Task-7----------------")
let technology={
    frontend:["HTML","SQL","JS","React "],
    middlelayer:["Java","Node JS","Express JS"],
    database:["SQL","MongoDB"]
}
let {frontend:[f1,f2,f3,f4],middlelayer:[m1,m2,m3,m4],database:[d1,d2]}=technology
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)
console.log(m1)
console.log(m2)
console.log(m3)

console.log(d1)

console.log(d2)