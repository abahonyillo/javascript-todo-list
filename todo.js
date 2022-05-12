const listEl = document.getElementById("list");
const formEl = document.getElementById("form");
const textEl = document.getElementById("todoText");

let listOfTodos = [
    {
        id: 1,
        text: "Have breakfast"
    },
    {
        id: 2,
        text: "Have lunch"
    },
    {
        id: 3,
        text: "Have dinner"
    }
    

];


const createTodo = (e) => {
    e.preventDefault();

    if (textEl.value ===""){
        alert("provide valid input");
    }
    else {
        let newTodo = {
            id: listOfTodos.length+1,
            text: textEl.value
        }

        listOfTodos.push(newTodo);
        printTodos();
        textEl.value = null;
        printTodos();
    }
};

formEl.addEventListener('submit', createTodo);

const deleteTodo = (id) => {

    let proceed = confirm("Are you sure of this action!");
    if (proceed === "true");

    else return"";
    
    let newListOfTodo = listOfTodos.filter(function(todo){
        return todo.id !== id;
    });

    listOfTodos = newListOfTodo;
    printTodos();

    
};

function printTodos(){
    listEl.innerHTML = null;

    for(let todo of listOfTodos){
        const li = document.createElement('li');
        const span = document.createElement('span');
        const delBtn = document.createElement('button');

        li.textContent = todo.text;
        listEl.appendChild(li);

        li.textContent = todo.text;
        li.appendChild(delBtn);

        textContent = todo.text;
        delBtn.textContent = "Delete";

        delBtn.addEventListener("click", function(){
            return deleteTodo(todo.id);
        });

        delBtn.className = "btn btn-danger btn-sm";
        li.className = "list-group-item d-flex justify-content-between";

        li.appendChild(span);
        li.appendChild(delBtn);
        listEl.appendChild(li);

        
    }
}

printTodos();
