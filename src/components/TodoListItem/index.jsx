import React, { useState, useRef } from 'react';


export const TodoListItem = ({task, tasks, setTasks, index, }) => {
  const [changed, setChanged] = useState(false);
  const inputEl = useRef(null);

  const handleDone = () => {
  }

  const handleRemove = () => {
    setTasks(tasks.splice(index, 1))
  }

  const handleChange = () => {
    // const value = inputEl.current.value;
  }

  return(
    <div>
      { changed ? (
        <div>
          <button onClick={handleChange}>変更</button>
          <input type="text" defaultValue={task.title} ref={inputEl} />
        </div>
      ) : (
        <div>
          <p>{task.title}</p>
          <input type="checkBox" onChange={handleDone} />
        </div>
        )}
      <button onClick={() => handleChange(!changed)}>編集</button>
      <button onClick={handleRemove}>削除</button>
    </div>
  );
};