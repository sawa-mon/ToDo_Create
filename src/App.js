import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [tasks,setTasks] = React.useState([]);

// console.log(tasks)

    return (
      <div className='App'>
        <h2>マイタスク</h2>
        <TodoForm tasks={tasks} setTasks={setTasks}/>
        <TodoList tasks={tasks} setTasks={setTasks} />
      </div>
    );
}

export default App;
