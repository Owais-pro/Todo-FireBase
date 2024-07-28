import { addDoc, collection, db, deleteDoc, getDocs, doc, updateDoc } from "./FireBase.js";

const userInput = document.querySelector("#input");
const div = document.querySelector(".parent");
const UserCollection = collection(db, "My-Todos");


// Function To Add Todo
const AddTodo = async () => {
    try {
        const TodoArr = {
            Value: userInput.value,
          };
          const AddData = await addDoc(UserCollection, TodoArr);
          GetValue();
        
    } catch (error) {
        console.log("Error", error.message);
    }
  
};


// Function To Get Todos
const GetValue = async () => {
    try {
        const GetData = await getDocs(UserCollection);
    let TodoObj = [];
    div.innerHTML = "";
    GetData.forEach((doc) => {
        const Obj = {
            id: doc.id,
            ...doc.data()
        }
        TodoObj.push(Obj);
    div.innerHTML += `
  <div class="card bg-dark" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title text-center text-light">${Obj.Value}</h5>
                  <div class="text-center">
                    <button class="btn btn-danger" id="${Obj.id}" onclick="DeleteTodos(this)">Delete</button>
                    <button class="btn btn-info" id="${Obj.id}" onclick="UpdateTodos(this)">Update</button>
                  </div>
                </div>
              </div>`;
  });
        
    } catch (error) {
        console.log("Error", error.message);
        
    }  
  
};

// Function To Delete Todos
const DeleteTodos = async (event)=>{
    try {   
    await deleteDoc(doc(db, "My-Todos", event.id));
    GetValue();
        
    } catch (error) {
        console.log("Error", error.message);   
    }

};

// Function To Update Todos
const UpdateTodos = async (event)=>{
    try { 
        const newInput = prompt("Enter Updated Todo");  
    UserCollection =  doc(db, "My-Todos", event.id);
   await updateDoc(UserCollection, {
    Value: newInput.value
   })

    GetValue();
        
    } catch (error) {
        console.log("Error", error.message);   
    }

};

window.UpdateTodos = UpdateTodos;
window.DeleteTodos = DeleteTodos;
window.AddTodo = AddTodo;
window.addEventListener("load", GetValue);
