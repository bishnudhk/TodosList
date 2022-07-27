import React from 'react'
import "./style.css"
import {Todo} from "../Model"
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completeTodos: Todo[];
    setCompleteTodo:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({todos, setTodos}: Props) => {
  return (
    // <div className='todos'>
    //    {todos.map(todo => (
    //     // <li>{todo.todo}</li>
    //     <SingleTodo todo= {todo} 
    //    key={todo.id} todos={todos}
    //    setTodos={setTodos} />
    //    ))}

    //  </div>
  // );

  <div className='container'>
    <Droppable droppableId='TodosList'>
      {
        (provided) => (
          <div className='todos' ref={provided.innerRef}
          {...provided.droppableProps}>
          <span className='todosHeading'>Active Tasks</span>
          {todos.map((todo) =>(
            <SingleTodo todo={todo} todos={todos}
             key={todo.id}
             setTodos={setTodos} />
          ))}
    
        </div>
        )
      }
   
    </Droppable>


    <Droppable droppableId='TodosRemove'>
      {
        () =>(
          <div className='todos remove'>
      <span className='todosHeading'>Complete Tasks</span>
      {todos.map((todo) =>(
        <SingleTodo 
        todo={todo}
         todos={todos}
         key={todo.id}
         setTodos={setTodos} />
      ))}
   </div>
        )
      }
      </Droppable>
   
  </div>
  
 );
};
export default TodoList