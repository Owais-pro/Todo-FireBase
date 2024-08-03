import { doc, getDoc, db } from "../javascript/FireBase.js";

window.addEventListener("load", async()=>{
    if (!localStorage.getItem("UserId")) {
        window.location.replace("../pages/Login.html")
        return;
    }

    
const userid = localStorage.getItem("UserId");
const result = await getDoc(doc(db,"Users", userid));
console.log(result.data());
const fname = document.querySelector("#fname");
const email = document.querySelector("#email");
const lname = document.querySelector("#lname");

fname.innerHTML = `First Name : ${result.data().FirstName}`;
lname.innerHTML = `Last Name : ${result.data().LastName}`;
email.innerHTML = `Email : ${result.data().Email}`;
});


const LogOut = ()=>{
    localStorage.removeItem("UserId");
    localStorage.clear();
    window.location.replace("../pages/Login.html")
  }
  window.LogOut = LogOut;
console.log("Hello");