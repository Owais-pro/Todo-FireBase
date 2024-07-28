window.addEventListener("load",()=>{
  if (localStorage.getItem("UserId")) {
      window.location.replace("../pages/Main.html");
    
      
  }
});

import {auth,db,doc,setDoc,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "../javascript/FireBase.js";


  const signUp = async () => {

  try {
    const FirstName = document.querySelector("#fname");
    const LastName = document.querySelector("#lname");
    const Email = document.querySelector("#email");
    const Password = document.querySelector("#password");

    const UserRecord = {
      FirstName: FirstName.value,
      LastName: LastName.value,
      Email: Email.value,
    };
    const Response = await createUserWithEmailAndPassword(
      auth,
      Email.value,
      Password.value
    );
    const Uid = Response.user.uid;
    await setDoc(doc(db, "Users", Uid), UserRecord);
    alert("Registration Successfull");
    window.location.href = "../pages/Login.html";
  } catch (error) {
    alert(error.message);
  }
};

window.signUp = signUp;


