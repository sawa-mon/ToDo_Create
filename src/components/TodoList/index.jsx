import React from 'react'
import { TodoListItem } from '../TodoListItem';

export const TodoList = ({tasks, setTasks}) => {
  return tasks.map((task, index) => (
    <div>
      <TodoListItem key={index} index={index} tasks={tasks} task={task} setTasks={setTasks} />
    </div>
    ))
};