document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create <li> and set text
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn"); // ✅ REQUIRED BY TEST

        // Set onclick to remove li from list
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, then li to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener("click", addTask);

    // Add task on Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // ✅ Only attach event listeners — do not call addTask() automatically
});
