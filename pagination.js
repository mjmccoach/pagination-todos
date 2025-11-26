let total = 0;
let skip = 0;
let todos = [];

const getToDos = function (skip) {
    fetch(`https://dummyjson.com/todos?limit=20&skip=${skip}`)
    .then(res => res.json())
    .then(data => 
        console.log(data.todos),
        incrementSkip()
        );
};

incrementSkip = function() {
    skip = skip + 20;
};

getToDos(skip);
console.log("Skip is ", skip);
console.log("Todos are ", todos.map((todo) => {console.log(todo)}));
getToDos(skip);
console.log("Skip is ", skip);
console.log("Todos are ", todos.map((todo) => todo.id));
getToDos(skip);
console.log("Skip is ", skip);
console.log("Todos are ", todos.map((todo) => todo.id));