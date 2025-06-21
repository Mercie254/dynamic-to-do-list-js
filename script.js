// Run when the page finishes loading
document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();

        // If input is empty, show alert
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create li and set textContent
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Set onclick event to remove task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, then li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Attach event listener to button
    addButton.addEventListener("click", addTask);

    // Attach event listener to input for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // 🚨 This is the part you were missing: call addTask() on page load
    addTask();
});
