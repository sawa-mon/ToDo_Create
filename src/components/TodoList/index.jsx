import React from 'react';
import {TodoListItem} from '../TodoListItem';

export const TodoList = ({tasks, setTasks}) => {
  const handleEdit = (index,title) => {
    if(!title.length) {
      return;
    }
    tasks[index].title = title; //サンプル確認箇所
    setTasks([...tasks]);
  }


  return tasks.map((task, index) => (
      <TodoListItem key={index} tasks={tasks} setTasks={setTasks} task={task} index={index} handleEdit={handleEdit}/>
    )
  )
};
