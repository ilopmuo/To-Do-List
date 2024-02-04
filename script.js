/* Creamos 2 constantes, una para la input box y otra para la lista de tareas */

const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

/* La primera función es añadir tarea, en esta función empezamos con un if
para descartar la posibilidad de que la input box esté vacía, si hay algo se crea un elemento lista
y se introduce en la lista de tareas, también se crea el elemento span para poder eliminar la tarea
, cada elemento tiene su x para cerrar.
La orden de la linea 22 es para que la input box se vacie tras añadir una tarea y un save data para 
que al cerrar el navegador no se pierdan las tareas  */
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

/* Este apartado es para cada vez que hagamos click, lo primero, si hacemos click en un elemento lista
lo cambia a checked y guarda, si el click es en el span elimina el elemento y guarda.
 */
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

/* Para guardar en el navegador los datos de la aplicación y que no se pierdán al cerrarlo */
function save_data(){
    localStorage.setItem("data", listContainer.innerHTML);
}

/* Al inicial el navegador muestra la lista de tareas guardada */
function showList(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showList();