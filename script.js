const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const btnAdd = document.getElementById("btn-add");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else if(inputBox.value.length >= 22) {
    alert("You task exceeds max characters")
  }else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listcontainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  if (localStorage.getItem("data") === "") {
    listcontainer.innerHTML = "";
  } else {
    listcontainer.innerHTML = localStorage.getItem("data");
  }
}

showTask();
btnAdd.addEventListener("click", addTask);
