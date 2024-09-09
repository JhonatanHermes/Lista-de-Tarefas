function addTask() {
    let taskText = document.getElementById("new-task").value;
    if (taskText === "") return;

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        li.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "Excluir";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    li.appendChild(deleteBtn);

    document.getElementById("task-list").appendChild(li);
    document.getElementById("new-task").value = "";
}