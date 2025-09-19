// function User({name,age,email}) {
//     return (
//         <div>
//             <h1>user component</h1>
//             <h1>Name:{name}</h1>
//              <h1>Age:{age}</h1>
//               <h1>Email:{email}</h1>
//         </div>
//     )
// }

// export default User

// pass props as object .................................................................

// function User({userObject}) {
//     return (
//         <div>
//             <h1>user component</h1>
//             <h1>Name:{userObject.name}</h1>
//              <h1>Age:{userObject.age}</h1>
//               <h1>Email:{userObject.email}</h1>
//         </div>
//     )
// }

// export default User

//............................................................................
// pass array props  

// function User({names}) {
//     return (
//         <div>
//             <h1>College name</h1>
//             <h1>{names}</h1>
//         </div>
//     )
// }

// export default User

//..............................................................................
// props on click

// function Student({name}) {
//     return (
//         <div>
//             <h1>{name}</h1>
//         </div>
//     )
// }

// export default Student

//////////////////////////////////////////////////////////////////////////////////

// default props

// function User({name = "New User"}) {
//     return (
//         <div>
//             <h1>{name}</h1>
//         </div>
//     )
// }

// export default User

// wrapper ............................................................................

function Wrapper({children,color="aqua"}) {
    return (
        <div style={{color:color, border:"1px solid green", width:"300px", margin:"10px"}}>
           {children}
        </div>
    )
}

export default Wrapper