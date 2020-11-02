import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [tasks,setTasks] = React.useState([]);

// console.log(tasks)

    return (
      <div className='App'>
        <h2>タスク一覧</h2>
        <TodoForm />
        <TodoList />
      </div>
    );
}

export default App;
