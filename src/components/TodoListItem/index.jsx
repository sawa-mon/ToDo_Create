import React,{useState, useRef} from 'react';

export const TodoListItem = ({task, tasks, setTasks, index}) => {
  const[edit, setEdit] = useState(false);
  const inputEl = useRef(null);

  const handleEdit = () => {
    const value = inputEl.current.value;
    const editEndTodo = tasks;
    editEndTodo[index].title = value; //サンプル確認箇所
    setTasks([...editEndTodo]);

    setEdit(false);
  }

  const handledone = () => {
    const doneTodo = tasks;
    doneTodo[index].checked = !task.checked;
    setTasks([...doneTodo]);
  }

  const handleDelete = () => {
    const deleteTodo = tasks;
      deleteTodo.splice(index, 1);
      setTasks([...deleteTodo]);
  }
  
  return(
    <div>
        {edit ? (
          <div>
            <button onClick={handleEdit}>更新する</button>
            <input type="text" defaultValue={task.title} ref={inputEl}/>
          </div>
        ) : (
          <div>
            <input onClick={handledone} type="checkBox" check={task.checked}/>
              {task.checked ? (
                <del>{task.title}</del>
                ) : (
                  <span>{task.title}</span>
              )}
          </div>
        )}
      <button onClick={() => setEdit(!edit)}>編集する</button>
      <button onClick={handleDelete}>削除する</button>
    </div>
  )
}