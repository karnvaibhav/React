import React from "react";
import Todo from  './Todo';

const TodoList =({todos,setToDos,filteredTodos})=> {
    return(
        <div class="todo-container">
            <ul clasName="todo-list">
            {
                filteredTodos.map(todo=>(
                 <Todo text={todo.text} key={todo.id} todos={todos} setToDos={setToDos} todo={todo}/>
                ))
            }
            </ul>
        </div>

    );
}

export default TodoList;