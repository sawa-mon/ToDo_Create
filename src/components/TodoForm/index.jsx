import React, {useRef} from 'react';
import styled from 'styled-components';


export const TodoForm = ({tasks, setTasks}) => {
  const inputEl = useRef(null);
  
  const addTodo = () => {
    const value = inputEl.current.value;
    if(!value.length) {
      return
    }

    setTasks([
      {
        title: value,
        checked: false,
      }, ...tasks,
    ])

    inputEl.current.value = "";
  }
  
  return(
      <StyledAddArea>
        <input type="text" ref={inputEl} placeholder="タスクを入力して下さい"/>
        <button onClick={addTodo} >タスクを追加する</button>
      </StyledAddArea>
  )
};

const StyledAddArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 5px;

  input {
    width: 310px;
    height: 30px;
  }

  button {
    width: 125px;
    height: 36px;
  }
`;