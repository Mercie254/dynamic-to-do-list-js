document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't double-save
    }

    // Save all current tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#task-list li").forEach(li => {
            // Remove button text before saving
            const text = li.firstChild.textContent.trim();
            if (text) tasks.push(text);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Add task to list
    function addTask(taskText, save = true) {
        if (!taskText) return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // Update localStorage after removal
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            saveTasks(); // Save after adding new task
        }

        taskInput.value = "";
    }

    // Add task from input
    function handleAddTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        addTask(taskText, true);
    }

    // Event listeners
    addButton.addEventListener("click", handleAddTask);

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleAddTask();
        }
    });

    // Load tasks from storage on page load
    loadTasks();
});
