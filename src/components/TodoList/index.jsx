import React from 'react';
import {TodoListItem} from '../TodoListItem';

export const TodoList = ({tasks, setTasks, setChecked}) => {
  
  return tasks.map((task, index) => (
      <TodoListItem key={index} tasks={tasks} setTasks={setTasks} task ={task} index={index} setChecked={setChecked} />
    )
  )
};