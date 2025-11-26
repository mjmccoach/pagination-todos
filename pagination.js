fetch("https://dummyjson.com/todos?limit=20&skip=0")
.then(res => res.json())
.then(data => console.log(data.todos));