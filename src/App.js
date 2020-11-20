import React, {useState, useMemo } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ProgressBar } from './components/UI/ProgressBar';

const App = () => {
  const[tasks, setTasks] = useState([]);

  const memoChecked = useMemo(() => {
    const checkedtasks = tasks.filter((item) => 
    item.checked === true
    )
    return checkedtasks.length
  },[tasks])
  
  return(
    <div>
      <h2>全タスク件数 {tasks.length} 件</h2>
      <h2>完了タスク件数 {memoChecked} 件</h2>
      <ProgressBar
      length={tasks.length}
      checked={memoChecked}
      />
      <h2>タスクの追加</h2>
      <TodoForm tasks={tasks} setTasks={setTasks}/>
      <h2>タスク一覧</h2>
      <TodoList tasks={tasks} setTasks={setTasks}/>



    </div>
  )
};

export default App;