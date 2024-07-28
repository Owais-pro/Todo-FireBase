window.addEventListener("load",()=>{
    if (localStorage.getItem("UserId")) {
        window.location.replace("../pages/Main.html");
        
    }
});

import { auth, signInWithEmailAndPassword  } from "../javascript/FireBase.js";

const SignIN = async ()=>{

    try {
        const Email = document.querySelector('#uemail');
    const Password = document.querySelector('#upassword');
    const response = await signInWithEmailAndPassword(
        auth,
        Email.value,
        Password.value
    )
    const Uid = response.user.uid;
    localStorage.setItem("UserId", Uid);
    window.location.href ="../pages/Main.html"
    } catch (error) {
        alert(error.message);
        
    }
    
};

window.SignIN = SignIN;