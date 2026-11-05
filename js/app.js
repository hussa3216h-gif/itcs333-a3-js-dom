// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here
(function () {
    
    function updateCounter() {
    let count = document.querySelectorAll(
"#todo-list li:not(.completed)"
    ).length;

    document.getElementById("counter").textContent =
        count + (count == 1 ? " item left" : " items left");
}
function add(e){
    e.preventDefault();

    let list=document.querySelector("ul");
    let text = document.getElementById("todo-input").value;
    let error = document.getElementById("error-msg");

    if (text.trim() == "") {
        error.classList.remove("hidden");
        return;
    }

    error.classList.add("hidden");

    let item = document.createElement("li");
    let itemText = document.createElement("span");
    itemText.className = "item-text";
    itemText.textContent = text;
    item.appendChild(itemText);

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    item.appendChild(deleteButton);
    list.appendChild(item);
    updateCounter();
}

function toggle(e) {
    if (e.target.classList.contains("item-text")) {
        e.target.parentElement.classList.toggle("completed");
    } else if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }

    updateCounter();

}

function showAll() {
    let items = document.querySelectorAll("#todo-list li");

    for (let item of items) {
        item.style.display = "";
    }
}

function showActive() {
    let items = document.querySelectorAll("#todo-list li");

    for (let item of items) {
        if (item.classList.contains("completed")) {
            item.style.display = "none";
        } else {
            item.style.display = "";
        }
    }
}

function showDone() {
    let items = document.querySelectorAll("#todo-list li");

    for (let item of items) {
        if (item.classList.contains("completed")) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}



document.getElementById("todo-form").addEventListener("submit",add);
document.getElementById("todo-list").addEventListener("click", toggle);
document.getElementById("filter-all").addEventListener("click", showAll);
document.getElementById("filter-active").addEventListener("click", showActive);
document.getElementById("filter-done").addEventListener("click", showDone);
})();