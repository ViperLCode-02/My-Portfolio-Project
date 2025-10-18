document.getElementById("addItem").onclick = function () {
    let textbox = document.getElementById("textbox");
    let container = document.getElementById("container");

    if (textbox.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = textbox.value;
        container.appendChild(li);
        textbox.value = ""; // clear after adding
    }
};

document.getElementById("highlight").onclick = function () {
    let ali = document.querySelectorAll("li");
    for (let content of ali) {
        content.style.color = "blue";
    }
};

document.getElementById("removeAll").onclick = function () { // match HTML id
    let ali = document.querySelectorAll("li");
    for (let content of ali) {
        content.remove();
    }
};
