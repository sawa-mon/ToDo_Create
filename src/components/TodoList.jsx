import React ,{ useRef,useState } from 'react';   
import TodoListItem from './TodoListItem';

const TodoList=()=>{
  const inputEl = useRef(null)
  const [todos,setTodos]=useState([])//初期値

  //  const [State名　,  Stateを変える関数] =useState("初期値")

const addTodo=(inputEl)=>{
    const title=inputEl.current.value //文字列としての認識の為のブロック
      const newTodo={
          title:title,
          isCompleted: false //最初は完了していないためfalse
      }
  setTodos((prevState)=>{
    const newTodoList=[...prevState,newTodo]
      inputEl.current.value= "";
      return newTodoList
  })
}

const deleteTodo=(index)=>{
}

return (
    <section>
      <h1>マイタスク</h1>
        <input placeholder="タスクを入力" ref={inputEl}></input>
        <button onClick={()=> addTodo(inputEl)}>追加</button>
      <h2>未完了</h2>
          {todos.length > 0 && (
            todos.map((todo,index)=>(
            <TodoListItem deleteTodo = {deleteTodo} isCompleted = {todo.isCompleted} key = {index} title = {todo.title} index = {index}/>
            ))
          )}
      <h2>完了</h2>
          {todos.length > 0 && (
            todos.map((todo,index)=>(
            <TodoListItem deleteTodo = {deleteTodo} key = {index} title = {todo.title} index = {index}/>
            ))
          )}
      </section>
)
}

export default TodoList
