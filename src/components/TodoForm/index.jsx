import React, {useRef} from 'react'
// import styled from 'styled-components';



export const TodoForm = ({tasks, setTasks}) => {
  const inputEl = useRef(null);

  const addTodo = ()　=> {
    const value = inputEl.current.value;

    if(!value.length) {
      return;
    }
    
    setTasks([
    {
      title: value,
    },  ...tasks,
  ]);

  inputEl.current.value = "";
};
  
  return (
    <div>
      <input type="text" ref={inputEl} placeholder="タスクを追加"/>
      <button onClick={addTodo}>追加する</button>
    </div>
  )
};