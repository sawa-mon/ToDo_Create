import React, {useRef} from 'react';


export const TodoForm = ({tasks, setTasks}) => {
  const inputEl = useRef(null);
  
  const addTodo = () => {
    const value = inputEl.current.value;
    if(!value.length) {
      return
    }

    setTasks([
      {
        title: value,
        checked: false,
        edit: false,
      }, ...tasks,
    ])

    inputEl.current.value = "";
  }
  
  return(
    <div>
      {/* {tasks.edit ? (
        <input type="text"placeholder="編集を終了して下さい" readOnly />
      ) : ( */}
        <input type="text" ref={inputEl} placeholder="タスクを入力して下さい"/>
       {/* )} */}
      <button onClick={addTodo} >タスクを追加する</button>
    </div>
  )
};