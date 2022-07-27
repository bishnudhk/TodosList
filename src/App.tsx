import React, { useState } from 'react'
import './App.css'
import InputFeild from './components/InputFeild'
import TodoList from './components/TodoList'
import { Todo } from './Model'
import { DragDropContext } from 'react-beautiful-dnd';


const App: React.FC = ({}) => {
  
  // create first state
  const [todo,setTodo] = useState<string>("");
  const[todos,setTodos] = useState<Todo[]>([]);
  const [completeTodos,setCompleteTodo] = useState <Todo[]> ([]);

  // handleAdd function//react.FormEvent is Event type 
  const handleAdd = (e:React.FormEvent) =>{
  e.preventDefault();
  if(todo){
    setTodos([...todos,{id:Date.now(),todo: todo,
    isDone:false}])

    setTodo("");
  }
  
  }

  console.log(todos);
  return (
    <DragDropContext>
    <div className='App'>
        <span className='heading'>Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo}
        handleAdd= {handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} 
        completeTodos = {completeTodos}
        setCompleteTodo = {setCompleteTodo} />
    </div>
    </DragDropContext>
  )
}

export default App