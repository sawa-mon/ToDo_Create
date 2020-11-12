import React, { useState, useRef } from 'react';



export const TodoListItem = ({task, tasks, setTasks, index }) => {
  const [changed, setChanged] = useState(false);
  const inputEl = useRef(null);

  const handleDone = () => {
    const endTasks = tasks;
    endTasks[index].checked = !task.checked;
    setTasks([...endTasks]);
  }

  const handleRemove = () => {
    const removeTask = tasks;
    removeTask.splice(index, 1);
    setTasks([...removeTask]);
  } //認識：removeTaskから1番目の配列(すなわち削除ボタンを押した配列)のタスクを削除してセットタスクとして上書きする
  //Que？：直接=> const removeTask = tasks.splice()としないのはなんで？

    const handleChange = () => {
      const value = inputEl.current.value;
      if(!value.length) {
        return;
      }

      const upateTasks = tasks;
      upateTasks[index].title = value;
      setTasks([...upateTasks]);

      setChanged(!true);
    };

  return(
    <div>
      { changed ? (
        <div>
          <button onClick={handleChange}>変更</button>
          <input type="text" defaultValue={task.title} ref={inputEl} />
        </div>
      ) : (
        <div>
          <input type="checkBox" check={task.checked} onClick={handleDone} />
          {task.checked ? (
          <del>{task.title}</del>
          ) : (
          <p>{task.title}</p>)}
        </div>
        )}
        <button onClick={() => setChanged(!changed)}>編集</button>
      <button onClick={handleRemove}>削除</button>
    </div>
  );
};