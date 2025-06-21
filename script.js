// Run the following code after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select important DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new <li> element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create "Remove" button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to task, and task to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener("click", addTask);

    // Add task on Enter key press
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
