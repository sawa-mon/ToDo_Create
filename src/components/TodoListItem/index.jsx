import React,{useState, useRef} from 'react';
import styled from 'styled-components';

export const TodoListItem = ({task, tasks, setTasks, index, handleEdit}) => {
  const [edit, setEdit] = useState(false);
  const inputTodo = useRef(null);

  const handleDone = () => {
    const doneTodo = tasks;
    doneTodo[index].checked = !task.checked;
    setTasks([...doneTodo]);
  };

  const handleDelete = () => {
    const deleteTodo = tasks;
      deleteTodo.filter(index);
      setTasks([...deleteTodo]);
  }


  return(
    <StyledSection>
        {edit ? (
          <StyledInner>
          <button onClick={() => { handleEdit(index, inputTodo.current.value)
            setEdit(false)
            }} >更新する</button>
            <input type="text" defaultValue={task.title} ref={inputTodo}/>
          </StyledInner>
        ) : (
          <StyledInner onClick={handleDone}>
            <input type="checkBox" checked={task.checked} readOnly/>
              {task.checked ? (
                <del>{task.title}</del>
                ) : (
                  task.title
                )}
          </StyledInner>
            )}
            <StyledInner>
              <button onClick={() => setEdit(!edit)}>編集する</button>
              <button onClick={handleDelete}>削除する</button>
            )}
            </StyledInner>
    </StyledSection>
  )
};

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

const StyledInner = styled.div`
  display:flex;
  align-items: center;
  font-size: 25px;

  button {
    height: 25px;
  }
`;
