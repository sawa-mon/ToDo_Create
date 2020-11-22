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
      <StyledTasks>
        <h2>タスク一覧</h2>
        <TodoList tasks={tasks} setTasks={setTasks}/>
      </StyledTasks>
    </StyledSection>
  )
};


const StyledSection = styled.div`
  place-items: center;
  margin: auto;
  width: 500px;
`;

const StyledInfo = styled.div`
  width: 500px;
  height: 120px;
`;

const StyledForm = styled.div`
  width: 500px;
  height: 100px;
`;

const StyledTasks = styled.div`

`;

export default App;