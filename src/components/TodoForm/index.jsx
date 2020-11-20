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
      }, ...tasks
    ])

    inputEl.current.value = "";
  }

  
  return(
    <div>
      <input type="text" ref={inputEl}/>
      <button onClick={addTodo} >タスクを追加する</button>
    </div>
  )
};