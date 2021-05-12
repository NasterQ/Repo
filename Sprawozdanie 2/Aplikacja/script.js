function insert(){
    let nr = document.querySelector("#nr").value;
    let content = document.querySelector("#content").value;
    let parametry = "nr=" + nr;
    parametry += "&content=" + content;
    loadDoc("POST", "add.php", "results", parametry, "");
}

function deleteR(id){
    parametry = "id=" + id;
    loadDoc("POST", "delete.php", "results", parametry, "");
}

function editR(id, content){
    let newContent = prompt("What do you want to change?", content);
    let parametry = "id=" + id;
    parametry += "&content=" + newContent;
    loadDoc("POST", "edit.php", "results", parametry, "");
}

window.onload = function(){
    loadDoc("", "create.php", "", "", "");
    loadDoc(this, "select.php", "ToDoList", "ToDoList", "");
    document.querySelector("#createButton").addEventListener('click', loadDoc.bind(this, "GET", "create.php", "results", "", ""));
    document.querySelector("#addEntryButton").addEventListener('click', insert);
    document.querySelector("#addEntryButton").addEventListener('click', loadDoc.bind(this, "GET", "select.php", "ToDoList", "", ""));
    document.querySelector("#selectButton").addEventListener('click', loadDoc.bind(this, "GET", "select.php", "ToDoList", "", ""));
}


