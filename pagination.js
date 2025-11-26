let total = 0;
let skip = 0;

const getToDos = function (skip) {
    fetch(`https://dummyjson.com/todos?limit=20&skip=${skip}`)
    .then(res => res.json())
    .then(data => () => {
            total = data.total;
            skip = skip + 20
        });
}