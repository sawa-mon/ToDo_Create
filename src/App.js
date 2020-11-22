import React, {useState, useMemo } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ProgressBar } from './components/UI/ProgressBar';
import styled from 'styled-components';

const App = () => {
  const[tasks, setTasks] = useState([]);
  
  const memoChecked = useMemo(() => {
    const checkedTasks = tasks.filter((item) => 
    item.checked === true
    )
    return checkedTasks.length
  },[tasks])
  
  return(
    <StyledSection>
      <StyledInfo>
        <h2>各件数</h2>
        <div>全タスク件数： {tasks.length} 件</div>
        <div>完了タスク件数： {memoChecked} 件</div>
        <ProgressBar
          length={tasks.length}
          checked={memoChecked}
        />
      </StyledInfo>
      <StyledForm>
        <h2>タスクの追加</h2>
        <TodoForm tasks={tasks} setTasks={setTasks}/>
      </StyledForm>
        <h2>タスク一覧</h2>
      <StyledTasks>
        <TodoList tasks={tasks} setTasks={setTasks}/>
      </StyledTasks>
    </StyledSection>
  )
};


const StyledSection = styled.div`
  place-items: center;
  margin: auto;
  width: 500px;
  height: 100vh;
  background-color: #5b7ab0;
`;

const StyledInfo = styled.div`
  height: 145px;
`;

const StyledForm = styled.div`
  height: 100px;
`;

const StyledTasks = styled.div`
  padding: 10px;
  height: 400px;
  overflow: auto;
`;

export default App;