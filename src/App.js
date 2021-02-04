import React, {useState,useEffect} from "react"
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setToDos]=useState([]);
  const [status,setStatus]=useState('all');
  const [filteredTodos,setFilteredTodos]=useState([]);

  useEffect(()=>{
     filterHandler();
  },[todos,status])

  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>
          todo.completed===true)
        );
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="App">
      <header>
      <h1> ToDo Bucket</h1> 
      </header>
      <Form setInputText={setInputText} setToDos={setToDos} todos={todos} inputText={inputText} setStatus={setStatus}/>
      <TodoList todos={todos} setToDos={setToDos} filteredTodos={filteredTodos}/>
      
    </div>
  );
}

export default App;
