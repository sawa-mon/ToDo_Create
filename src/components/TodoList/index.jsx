import React from 'react';
import {TodoListItem} from '../TodoListItem/index';

export const TodoList  = ({tasks, setTasks}) => {
  return tasks.map((task, index) => (
    <TodoListItem setTasks={setTasks} tasks={tasks} task={task} index={index} />
  ))
};