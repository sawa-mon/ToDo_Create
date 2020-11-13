import React, {useState, useRef} from 'react'

export const TodoListItem = ({tasks, task, index, setTasks}) => {
  const [edit, setEdit] = useState(false);
  const inputEl = useRef(null);


  const handleRemove = () => {
    const removeTasks = tasks;
    removeTasks.splice(index, 1);
    setTasks([...removeTasks]);
  }

  const handleDone = () => {
    const doneTasks = tasks;
    doneTasks[index].checked = !task.checked;

    setTasks([...doneTasks]);
  }


  const handleEdit = () => {
    const value = inputEl.current.value;
    if(!value.length) {
      return
    }

    const reNewTasks = tasks;
    reNewTasks[index].title = value;
    setTasks([...reNewTasks]);

    setEdit(!true);
  }


  return (
    <div>
      {edit ? (
        <div>
          <button onClick={handleEdit}>更新する</button>
          <input text="text" defaultValue={task.title} ref={inputEl}/>
        </div>
      ) : (
        <div>
          <input type="checkBox" onClick={handleDone} check={task.checked} />
          {task.checked ? (<del>{task.title}</del>):(<span>{task.title}</span>)}
        </div>
      )}
      <button onClick={handleRemove}>削除ボタン</button>
      <button onClick={() => {setEdit(!edit)}}>編集する</button>
    </div>
  )
};