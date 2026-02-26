
function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        modifiedTodos.push("done - " + todos[index]);   // prepend the string
        return transform(index + 1, todos, modifiedTodos); // recursive call
    } else {
        return modifiedTodos;
    }
}

//should modify line 8 to prepend the string 'done - ' to each todo description

//should modify line 9 to recursively call the transform function




