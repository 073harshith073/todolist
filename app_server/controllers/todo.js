document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(text) {
        const taskItem = document.createElement("li");
        taskItem.textContent = text;

        const modifyButton = document.createElement("button");
        modifyButton.textContent = "Modify";
        modifyButton.addEventListener("click", function () {

        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(modifyButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    }
});
