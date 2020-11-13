import React, { useState } from 'react'
import { useRef } from 'react';

export const TodoListItem = ({task, tasks ,setTasks, index}) => {
  const [edit, setEdit] = useState(false);
  const inputEl = useRef(null);

  const handleEdit = () => {
    const value = inputEl.current.value;
    // if(!value.length) {
    //   return
    // }

    const editTodo = tasks;
    editTodo[index].title = value;
    setTasks([...editTodo]);

    setEdit(false);
  }

  const handledone = () => {
    const checkedTodo = tasks;
    checkedTodo[index].checked = !task.checked;

    setTasks([...checkedTodo]);
  }

  const handleDelete = () => {
    const deleteTodo = tasks;
    deleteTodo.splice(index, 1);
    setTasks([...deleteTodo]);
  }

  return (
    <div>
      {edit ? (
        <div>
          <input type="text" defaultValue={task.title} ref={inputEl}/>
          <button onClick={handleEdit}>内容を変更する</button>
        </div>
      ) : (
        <div>
          {task.checked ? (
            <del>{task.title}</del>
            ) : (
            <span>{task.title}</span>
          )}
        </div>
      )}
      <input type="checkBox" onClick={handledone} check={task.checked}/>
      <button onClick={() => setEdit(!edit)}>編集する</button>
      <button onClick={handleDelete}>削除する</button>
    </div>
  )
};