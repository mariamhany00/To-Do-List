let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let arrayOfTasks = [];

// Check if tasks exist in local storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Load tasks from local storage to page
getDataFromLocalStorage();

// Event listener for submit button
submit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value);
        input.value = "";
    }
}

// Event listener for delete button
tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
    if(e.target.classList.contains("task")){
        toggleStatusTaskWith(e.target.getAttribute("data-id"))
        e.target.classList.toggle("done");
    }
});

// Function to add task to array
function addTaskToArray(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false
    };
    // Push task to array
    arrayOfTasks.push(task);
    // Update page
    addElementsToPageFrom(arrayOfTasks);
    // Update local storage
    addDataToLocalStorageFrom(arrayOfTasks);
}

// Function to add tasks to page
function addElementsToPageFrom(arrayOfTasks) {
    // Clear tasksDiv
    tasksDiv.innerHTML = "";
    // Loop through tasks
    arrayOfTasks.forEach(task => {
        // Create task div
        let div = document.createElement("div");
        div.className = "task";
        // Check if task is completed
        if (task.completed) {
            div.className += " done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        // Create delete button
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        div.appendChild(span);
        // Add task div to tasks container
        tasksDiv.appendChild(div);
    });
}

// Function to add data to local storage
function addDataToLocalStorageFrom(arrayOfTasks) {
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

// Function to load data from local storage
function getDataFromLocalStorage() {
    let data = localStorage.getItem("tasks");
    if (data) {
        arrayOfTasks = JSON.parse(data);
        addElementsToPageFrom(arrayOfTasks);
    }
}

// Function to delete task with specific id
function deleteTaskWith(taskId) {
    arrayOfTasks = arrayOfTasks.filter(task => task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);
}
function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
      if (arrayOfTasks[i].id == taskId) {
        arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
      }
    }
    addDataToLocalStorageFrom(arrayOfTasks);
  }
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var loginResult = document.getElementById("loginResult");

    usernameError.textContent = "";
    passwordError.textContent = "";
    loginResult.textContent = "";

    if (!username) {
        usernameError.textContent = "Please enter your username";
        return;
    }

    if (!password) {
        passwordError.textContent = "Please enter your password";
        return;
    }

    // Here you would typically send the username and password to a server for authentication
    // For this example, let's just assume the username is "user" and password is "password"
    if (username === "user" && password === "password") {
        loginResult.textContent = "Login successful!";
        // Redirect to todo.html
        window.location.href = "todo.html";
    } else {
        loginResult.textContent = "Invalid username or password";
    }
});

let myImage=document.getElementById("slideshoww");
//Array with pics i want to see in the slideshow
let images=["images/1.jpg","images/2.jpg","images/3.jpg"]
let i=0;
// عشان اتحكم مبقاش مقيد بانديكس



function SlideShow(){
    myImage.setAttribute("src",images[i]);

    if (i==images.length-1){
        i==0
    }
    else{
        i++
    }
    setTimeout(function(){
        SlideShow();
    },2000)
}
SlideShow();
