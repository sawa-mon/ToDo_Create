import React from 'react';
import styled from "styled-components";

const StyledTodoListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoListItem=( { task,tasks,index,setTasks} ) => {
  const [isEdited, setIsEdited] = React.useState(false);
  const inputRef=React.useRef(null);

  const handleCheck = () => {
    const newTasks = tasks;
    newTasks[index].checked = !task.checked;

    setTasks([...newTasks]);
  }

  const handleRemove = () => {
    const removeTasks = tasks;
    removeTasks.splice(index, 1);
    setTasks([...removeTasks]);
  }

  const handleEdit = () => {
    const value = inputRef.current.value;
    if (!value.length) {
      return;
    }

    const newTasks = tasks;
    newTasks[index].title = value;
    setTasks([...newTasks]);

    setIsEdited(false);
  };



  return (
    <StyledTodoListItem>
      {isEdited ? (
        <Wrap>
        <input type='text' defaultValue={task.title} ref={inputRef} />
        <button onClick={handleEdit}>変更する</button>
        </Wrap>
      ) : (
        <Wrap>
        <input onClick={handleCheck} type='checkbox' check = { task.checked } readOnly />
        {task.checked ? <del>{task.title}</del> : task.title}
        </Wrap>
      )}
        <Wrap>
          <button onClick={handleRemove}>削除</button>
          <button onClick={() => setIsEdited(!isEdited)}>編集</button>
        </Wrap>
    </StyledTodoListItem>
  );
};
