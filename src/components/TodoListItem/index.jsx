import React,{useState, useRef, useMemo} from 'react';

export const TodoListItem = ({task, tasks, setTasks, index}) => {
  const [edit, setEdit] = useState(false);
  const inputEl = useRef(null);
  
  const handleDone = () => {
    const doneTodo = tasks;
    doneTodo[index].checked = !task.checked;

    setTasks([...doneTodo]);
  };

  const handleDelete = () => {
    const deleteTodo = tasks;
      deleteTodo.splice(index, 1);
      setTasks([...deleteTodo]);
  }
  const handleEdit = () => {
    const value = inputEl.current.value;
    if(!value.length) {
      return;
    }
    const editEndTodo = tasks;
    editEndTodo[index].title = value; //サンプル確認箇所
    setTasks([...editEndTodo]);

    setEdit(false);
  }

  // const memoEdit = useMemo(() => {
  //   const editCheck = tasks.filter((item) =>
  //   item.edit === true
  //   )
  //   return editCheck.edit
  // },[tasks])

  
  
  return(
    <div>
      <div>
        {edit ? (
          <div>
            <button onClick={handleEdit}>更新する</button>
            <input type="text" defaultValue={task.title} ref={inputEl}/>
          </div>
        ) : (
          <div>
              {!task.checked && (
                <div>
                  <input onClick={handleDone} type="checkBox" checked={task.checked}/>
                  <span>{task.title}</span>
                  <button onClick={() => setEdit(!edit)}>編集する</button>
                  <button onClick={handleDelete}>削除する</button>
                </div>
              )}
          </div>
        )}
      </div>
      <div>
        {task.checked && (
        <div>
          <span>{task.title}</span>
        </div>
        )}
      </div>
    </div>
  )
}