function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
       
    modifiedTodos.push("done - " + todos[index]);
  return transform(index + 1, todos, modifiedTodos;
}
        // on this line - prepend the string 'done - ' to each `todo` description
        // on this line - call transform recursively
    }else{
        return modifiedTodos;
    }
}



//should modify line 8 to prepend the string 'done - ' to each todo description

//should modify line 9 to recursively call the transform function



