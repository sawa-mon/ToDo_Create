import React from 'react';
// import styled from "styled-components";

// const StyledTodoListItem = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 16px;
//   border-bottom: 1px solid #ddd;
// `;
// const Wrap = styled.div`
//   display: flex;
//   align-items: center;
// `;

export const TodoListItem=( {task,tasks,index,setTasks} ) => {
  // const [isEdited, setIsEdited] = React.useState(false);
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
    console.log(tasks);
  }


  return (
    // <StyledTodoListItem>
    <div className='todo-list-item'>
      <input type='text' defaultValue={task.title} ref={inputRef} />
      <input onClick={handleCheck} type='checkbox' check = { task.checked } readOnly />
      {task.checked ? <del>{task.title}</del> : task.title}
      <button onClick={handleRemove}>削除</button>
    </div>
      // </StyledTodoListItem>
  );
};