import React,{useState} from "react";
import PurpleButton from "./RedButton"

const TodoListItem=({title,deleteTodo,index,isCompleted})=>{

  const [edit,setEdit]=useState(false)

return (
  <>
  { !edit ? (
    <div>
      <div>{title}</div>
       {/* <button onClick={()=>setEdit(!edit)}>編集</button>  */}
      <PurpleButton  onClick={()=>setEdit(!edit)} label="編集"/>
      <button  onClick={()=>deleteTodo(index)}>削除</button>
      <button >{isCompleted ? "戻す" : "完了" } </button> 
    </div>
    ):( 
    <div>
    <input defaultValue={title} />
    <button>変更</button>
    </div>
    )}
  </> 
  )
}

export default TodoListItem;