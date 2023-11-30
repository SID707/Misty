const typetodo = document.getElementById("typetask");
const task = document.getElementById("tasks");

function addtask(){
    if(typetodo.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = typetodo.value;
        task.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    typetodo.value='';
    savedata();
}

    document.getElementById('typetask');
    
    // add listener for keyup event
    addEventListener('keyup', function(event) {
        event.preventDefault();
    
        if (event.keyCode === 13) {
            document.getElementById('dj').click();
    	}
    });

task.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
 

function savedata(){
    localStorage.setItem("data", task.innerHTML);
}

function showtodo(){
    task.innerHTML = localStorage.getItem("data");
}

showtodo();