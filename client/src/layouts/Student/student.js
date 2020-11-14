import React from "react";
import API from "../../utils/API";

// export default class Student extends React.component{
//         constructor(props) {
//       super(props);
//       this.state = {

//       };
//     }
//     render() {
//         return (
//           <>
//             <div className="wrapper">
//                 <p>student</p>
              
//             </div>
          
//           </>
//         );
//       }
// }

export default function Student(props) {
    console.log(props.match.params.id)
    // const id = "5fa377860b4faa5e30c00bbc";
    API.getStudents(props.match.params.id)
        .then(res => {
            console.log("-----------")
            console.log(res)
        })
        .catch(err => {
            console.log("-----------")
            console.log(err)
        })
    return (
        <p>STUDENT</p>
    )
}