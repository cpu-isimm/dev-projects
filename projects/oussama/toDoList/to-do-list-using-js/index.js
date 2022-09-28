let input = document.querySelector("input"),
showtask = document.getElementById("showtask");

let arrayOfTasks = [] ;

if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks")) ;
}

getDataFromLocalStorage() 

function addTask () {
    if (input.value.length !== 0) {
        const obj = {
            id: Date.now(),
            content: input.value,
            status: false
        };
        arrayOfTasks.push(obj);
    }
    input.value = "";
    addElementToPage(arrayOfTasks);
    addDataToLocalStorage(arrayOfTasks)
}

function addElementToPage(arrayOfTasks) {
    showtask.innerHTML="";

    arrayOfTasks.forEach(task => {
        let div = document.createElement("div");
        div.className ="task" ;
        div.setAttribute("data-id",task.id);
        let action = document.createElement("div");
        action.className ="action";
        div.appendChild(document.createTextNode(task.content)) ;
        let check = document.createElement("i");
        check.className = "fa-solid fa-check ";
        if (task.status === false) {
            check.classList.add("act");
        }
        else {
            check.classList.add("finish");
            div.classList.add("finishtask");
        }
        let button = document.createElement("button");
        button.appendChild(document.createTextNode("Delete"));
        button.className ="btn";
        action.appendChild(check);
        action.appendChild(button);
        div.appendChild(action);
        showtask.appendChild(div);
    });
}
// add data to local storage 
function addDataToLocalStorage(arrayOfTasks) {
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
    
}
 // get data from local storage 
function getDataFromLocalStorage() {
    if (localStorage.getItem("tasks")) {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        addElementToPage(tasks) ;
    }
    
}
 // delete and complete the task 

showtask.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        let parent = e.target.parentElement
        deleteTask(parent.parentElement.getAttribute("data-id")) ;
        parent.parentElement.remove() ;
    }
    if (e.target.classList.contains("act")) {
        e.target.classList.remove("act");
        e.target.classList.add("finish");
        let grandParent =  e.target.parentElement ;
        toggleStatusTaskWith(grandParent.parentElement.getAttribute("data-id"));
        grandParent.parentElement.classList.add("finishtask");
    }
    else {
        e.target.classList.remove("finish");
        e.target.classList.add("act");
        let grandParent =  e.target.parentElement ;
        toggleStatusTaskWith(grandParent.parentElement.getAttribute("data-id"));
        grandParent.parentElement.classList.remove("finishtask");
    }
})

function deleteTask (taskID) {
    arrayOfTasks = arrayOfTasks.filter((element) => element.id != taskID) ;
    addDataToLocalStorage(arrayOfTasks) ;
}

function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
      if (arrayOfTasks[i].id == taskId) {
        arrayOfTasks[i].status == true ? arrayOfTasks[i].status = false : arrayOfTasks[i].status = true;
      }
    }
    addDataToLocalStorage(arrayOfTasks);
}