// import React, { useState } from "react";

/* In this file we have identfied the problem we face if we don't use contextapi
   i.e 1. As you can see in parent class (App) we have created a state known as 
          brandname and child class(Child) want to access this state 
        2. So inorder to access (brandname) in Child Class we need to use props and 
          access it.
        3. And the same state Grandchild also wants to access it , so here comes the 
        even if we're using the same state in child & grandchild class we always have to
        create a prop in each Class (Child, GrandChild) unneccesarily using this approach
        in small project is okay , but if we use same approach in bigger projects then it will
        create problem. which is also known as (Props Drilling).  

*/
// const GrandChild = props => {
//   return (
//     <div>
//       <h3>Grandchild: </h3>
//       <Child brand={props.brand} />
//     </div>
//   );
// };

// const Child = props => {
//   return (
//     <div>
//       <h2>Child: {props.brand}</h2>
//     </div>
//   );
// };

// const App = () => {
//   const [brandname] = useState("Amazon");
//   return (
//     <div>
//       <h1>Hello</h1>

//       <GrandChild brand={brandname} />
//     </div>
//   );
// };

// export default App;
