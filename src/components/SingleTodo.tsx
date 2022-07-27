import React, { useEffect, useRef, useState } from 'react'
import {AiFillEdit,AiFillDelete}from 'react-icons/ai';
import {MdOutlineDone} from 'react-icons/md'
import { Todo } from "../Model";
import './style.css';
import TodoList from './TodoList';

type Props ={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo,todos,setTodos}:Props) => {
  const [edit ,setEdit] = useState<boolean>(false);
  // value of edit mode 
  const [editTodo ,setEditTodo] = useState<string>("todo.todo");

const handleDone = (id:number) => {
 setTodos(todos.map((todo) =>
 todo.id===id? {...todo, isDone: !todo.isDone} : todo 
) )
}

const handleDelete = (id:number) =>{
setTodos(todos.filter((todo) => todo.id !== id))
}

const handleEdit = (e:React.FormEvent,id:number) =>{
e.preventDefault();

// if todo .is is matches the id send by onSubmit take all todo( ...todo)
   
setTodos(todos.map((todo) => (
  todo.id ===id? {...todo,todo:editTodo}:todo
))
)
setEdit(false)
};

// whennever the edit changes fire off this 
// when we enter edit the focus is in input button 
useEffect(()=>{
  inputRef.current?.focus();
},[edit])
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form action="" className='todoSingle' onSubmit={(e) => handleEdit(e,todo.id)}>

      {/* edit mode is on display input if not done normal */}
      {edit ? (
      <input
      ref={inputRef}
       value={editTodo}
       onChange={(e)=>{
      setEditTodo (e.target.value)} } 
      className="todoSingleTest" />
      ):  todo.isDone?(
        <s className=' todoSingleText'>{todo.todo} </s> //strike tag 
      ): (
        <span className=' todoSingleText'>{todo.todo} </span>
      )}
      
      
      <div>
        <span className='icon'onClick= {() => {
          if(!edit && !todo.isDone){
            setEdit(!edit)
          }
        }}>
          <AiFillEdit/>
        </span>
        <span className='icon' onClick={() => handleDelete (todo.id)}>
          <AiFillDelete/> </span>
          <span className='icon' onClick={() => handleDone(todo.id)}><MdOutlineDone/></span>
      </div>
    </form>
  )
}

export default SingleTodo