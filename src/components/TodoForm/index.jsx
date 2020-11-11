import React, { useRef, useState } from 'react';


export const TodoForm = ({tasks, setTasks}) => {
  const inputEl = useRef(null);

  
  const addTodo = () => {
    const value = inputEl.current.value;

    setTasks([
      ...tasks,
      {title: value, done: false},
    ]);

    inputEl.current.value="";
  };
    
    return(
      <div>
        <input type="text" ref={inputEl} placeholder="タスク記入" />
        <button onClick={addTodo}>タスク追加</button>
      </div>
  );
};