import React,{useState, useRef} from 'react';
import styled from 'styled-components';

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
  
  return(
    <StyledSection>
        {edit ? (
          <div>
            <button onClick={handleEdit}>更新する</button>
            <input type="text" defaultValue={task.title} ref={inputEl}/>
          </div>
        ) : (
          <div>
            <input onClick={handleDone} type="checkBox" checked={task.checked}/>
              {task.checked ? (
                    <del>{task.title}</del>
                  ) : (
                    <span>{task.title}</span>
                  )}
          </div>
        )}
              <button onClick={() => setEdit(!edit)}>編集する</button>
              <button onClick={handleDelete}>削除する</button>
    </StyledSection>
  )
};

const StyledSection = styled.div`
  display: flex;
  align-items: center;
`;

// const StyledChecked = styled.div`
// `;