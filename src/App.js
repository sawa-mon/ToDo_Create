import React, {useState} from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

    return (
      <div className='App'>
        <h2>タスク一覧</h2>
        <TodoForm tasks={tasks} setTasks={setTasks}/>
        <TodoList tasks={tasks} setTasks={setTasks}/>
      </div>
    );
};

export default App;
