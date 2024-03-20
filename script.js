function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

document.getElementById("addTask").addEventListener("click", function () {
    var taskName = prompt("Enter task name:");
    if (taskName) {
        var task = document.createElement("div");
        task.className = "task";
        task.draggable = true;
        task.textContent = taskName;
        task.id = "task" + (document.querySelectorAll(".task").length + 1);
        task.addEventListener("dragstart", drag);

        // Add delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function () {
            task.remove();
        };

        task.appendChild(deleteButton);

        document.querySelector(".todo").appendChild(task);
    }
});
