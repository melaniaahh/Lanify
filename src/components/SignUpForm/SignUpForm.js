// Firebase sedang dalam pengembangan
// import React, { useContext, useState } from "react";
// // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {FirebaseContext} from "../../context/FireBaseContext";
// import "./SignUpForm.css";

// const SignUpForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
    
//     const { firebase } = useContext(FirebaseContext);

//     return (
//         <div className="container">
//             <form onSubmit={(event) => {
//                 event.preventDefault();
//                 firebase.auth().createUserWithEmailAndPassword(email, password).then(() => alert("signed up!")).catch((error) => alert(error.message));
//                 setEmail("");
//                 setPassword("");
//                 }}>
//                 <label>Email</label>
//                 <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//                 <label>Password</label>
//                 <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     )
// }

// export default SignUpForm;