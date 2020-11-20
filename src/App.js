import React, {useState} from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ProgressBar } from './components/UI/ProgressBar';

const App = () => {
  const[tasks, setTasks] = useState([]);
  const [now, setNow] = useState(0);
  const [length, setLength] = useState(0);
  const [text, setText] = useState("");
  
  
  return(
    <div>
      <ProgressBar
      now={now}
      setNow={setNow}
      length={tasks.length}
      setLength={setLength}
      text={text}
      setText={setText}
      />
      <h2>全タスク件数</h2>
      <div
        name="length"
        type="number"
        value={length}
      >
        {tasks.length}
      </div>
      <div>完了タスク件数 {now}</div>
      <input
        name="text"
        type="range"
        max={tasks.length}
        value={now}
      />
      <h2>タスクの追加</h2>
      <TodoForm tasks={tasks} setTasks={setTasks}/>
      <h2>タスク一覧</h2>
      <TodoList tasks={tasks} setTasks={setTasks}/>



    </div>
  )
};

export default App;