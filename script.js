const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function AddTask(){
    if(inputBox.value === ''){
        alert("Debes escribir algo para añadirlo a la lista");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    save_data();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save_data();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save_data();
    }

}, false);

function save_data(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showList();