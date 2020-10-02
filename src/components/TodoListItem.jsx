import React,{useState,useRef} from "react";
import PurpleButton from "./RedButton"
import TodoList from "./TodoList";

const TodoListItem=({title,deleteTodo,index,setTodos,isCompleted})=>{
  const inputEl = useRef(null)
  const [edit,setEdit]=useState( false ) //tureにすると最初から編集可能状態になる

  const changeTodo = (index,title) => {
    const newTodo = title;
      const todo = newTodo[index];
  
      todo.title = title;
  
      setTodos(() => [...newTodo]);
  }


return (
  <>
  { ! edit ? (
    <div>
      <div>{title}</div>
       {/* <button onClick={()=>setEdit(!edit)}>編集</button>  */}
      <PurpleButton  onClick = {() => setEdit(!edit)} label = "編集"/>
      <button onClick = {() => deleteTodo(index)}>削除</button>
      <button >{isCompleted ? "戻す" : "完了" } </button> 
    </div>
    ):( 
    <div>
    <input defaultValue={title} />
    <button onClick = {() => changeTodo(index,inputEl.current.value)}>変更</button>
    </div>
    )}
  </> 
  )
}

export default TodoListItem;