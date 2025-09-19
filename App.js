
// import './App.css';
// import User from './User';

// function App() {
//   return (
//     <div>
//       <h1>Props in react js</h1>
//        <User name="naresh" age="32" email="abc@test.com"/>
//     </div>
//   );
// }

// export default App;


// Pass Props as Variables...............................................................

// import './App.css';
// import User from './User';

// function App() {
//   let userName = "naresh";
//   let age = 32;
//   let email = "abcd@test.com";
//   return (
//     <div>
//       <h1>Props in react js</h1>
//        <User name={userName} age={age} email={email}/>
//     </div>
//   );
// }

// export default App;

// pass props as object ..................................................................

// import './App.css';
// import User from './User';

// function App() {
//   let userObject = {
//     name: "naresh saini",
//     age: 32,
//     email: "abc@test.com"
//   }
 
//   return (
//     <div>
//       <h1>Props in react js</h1>
//        <User userObject= {userObject}/>
//     </div>
//   );
// }

// export default App;

// pass array props....................................................................

// import './App.css';
// import User from './User';

// function App() {
//  let collegeName = ["IIT", "NIT", "RTU", "DU"];
 
//   return (
//     <div>
//       <h1>Props in react js</h1>
//        <User names = {collegeName[0]} />
//        <User names = {collegeName[1]} />
//        <User names = {collegeName[2]} />
//        <User names = {collegeName[3]} />
//     </div>
//   );
// }

// export default App;

// pass props on click..............................................................

// import './App.css';
// import Student from './User';
// import User from './User';
// import { useState } from 'react';

// function App() {
//  const [student, setStudent] = useState("naresh")
 
//   return (
//     <div>
//       <h1>Props in react js</h1>
//        {
//         student && <Student name = {student} />
//        }
//        <button onClick={() => setStudent("kumar")}>update student name</button>
//     </div>
//   );
// }

// export default App;

// Default props.........................................................

// import './App.css';
// import Student from './User';
// import User from './User';
// import { useState } from 'react';

// function App() {
 
 
//   return (
//     <div>
//       <h1>Props in react js</h1>
//       <User name="naresh saini" />
//       <User name="kumar saini" />
//       <User />
//       <User />
      
//     </div>
//   );
// }

// export default App;

// wrapper ......................................................................

import './App.css';
import Wrapper from './User';
import Student from './User';
import User from './User';
import { useState } from 'react';

function App() {
 
 
  return (
    <div>
      <h1>Props in react js</h1>
      <Wrapper color="blue">
         <h1>hello everyone</h1>
      </Wrapper>
       <Wrapper>
         <h1>hello naresh</h1>
      </Wrapper>
       <Wrapper>
         <h1>hello admin</h1>
         <h2 style={{color:"red"}}>please login</h2>
      </Wrapper>
    </div>
  );
}

export default App;