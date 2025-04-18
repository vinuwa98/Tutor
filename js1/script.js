// Array to store tasks
let myArray = [];

// Function to add a task
function addTask() {
    let addTaskInput = document.getElementById("taskInput").value;

    if (addTaskInput.trim() !== "") {
        myArray.push(addTaskInput); // Store task in array

        // Create new list item
        let li = document.createElement("li");
        li.innerText = addTaskInput;

        // --- DELETE BUTTON ---
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "4px 8px";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.borderRadius = "4px";

        deleteBtn.onclick = function () {
            li.remove();
            myArray = myArray.filter(task => task !== addTaskInput);
        };

        // --- COMPLETE BUTTON ---
        let completeBtn = document.createElement("button");
        completeBtn.innerText = "Complete";
        completeBtn.style.marginLeft = "5px";
        completeBtn.style.backgroundColor = "green";
        completeBtn.style.color = "white";
        completeBtn.style.border = "none";
        completeBtn.style.padding = "4px 8px";
        completeBtn.style.cursor = "pointer";
        completeBtn.style.borderRadius = "4px";

        completeBtn.onclick = function () {
            li.remove();

            // Create a new li for completed task
            let completedLi = document.createElement("li");
            completedLi.innerText = addTaskInput;
            completedLi.style.textDecoration = "line-through";

            // Add to completed task list
            document.getElementById("completedTaskList").appendChild(completedLi);
        };

        // Add buttons to li
        li.appendChild(deleteBtn);
        li.appendChild(completeBtn);

        // Add to task list
        document.getElementById("taskList").appendChild(li);

        // Clear input
        document.getElementById("taskInput").value = "";
    } else {
        alert("Please enter a task before adding.");
    }
}
