import React, { useRef } from 'react'
import './style.css';
interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent) =>void; //didnot return anything 
}
const InputFeild:React.FC<Props> = ({todo,setTodo,handleAdd}:Props) => {
// console.log(todo);
const inputRef = useRef<HTMLInputElement> (null);
  
  return (
    <form className='input' 
    onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
      }}>
       <input
       ref={inputRef}
        type="input"
       value={todo}
       onChange={
        (e) => setTodo(e.target.value)
       }
        placeholder='enter a task'
       className='inputBox' />
       <button className='inputSubmit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild