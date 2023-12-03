let notecontainer = document.querySelector(".note-container");
let createBtn = document.getElementById("btn");
let notes = document.querySelectorAll(".para")

function showNotes() {
    notecontainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notecontainer.innerHTML)
}

createBtn.addEventListener("click", function () {
    let inputbox = document.createElement("p")
    let img = document.createElement("img")
    inputbox.className = "para"
    inputbox.setAttribute("contenteditable", "true")
    img.src = "images/delete.png"
    notecontainer.appendChild(inputbox).appendChild(img)
})

notecontainer.addEventListener("click", function deletBtn(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".para")
        notes.forEach(el => {
            el.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", function () {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})