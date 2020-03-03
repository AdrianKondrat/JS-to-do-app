

const input = document.querySelector("input[type='text']");
const ul = document.querySelector('ul');
const spans = document.querySelectorAll("span");
const saveBtn = document.querySelector(".save");
const clearBtn = document.querySelector(".clear");

input.addEventListener("keypress", function(keyPressed){
    if(keyPressed.which === 13) {
        var li = document.createElement('li');
        var spanElement = document.createElement('span');
        var icon = document.createElement('i');

        var newTodo = this.value;
        this.value = " "; 

        icon.classList.add("fas", "fa-trash-alt");
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteTodo();
    }
});

ul.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }
});

saveBtn.addEventListener("click", function(ev){
    localStorage.setItem("todoList", ul.innerHTML);
});

clearBtn.addEventListener("click", function(){
    ul.innerHTML = "";
    localStorage.removeItem("todoList", ul.innerHTML);
});

 function loadTodo(){
     if(localStorage.getItem("todoList")){
         deleteTodo();
     }    
 }

function deleteTodo(){
    for (let span of spans){
        span.addEventListener("click", function(){
            span.parentElement.remove();
            span.stopPropagation();
        })
    }
}

