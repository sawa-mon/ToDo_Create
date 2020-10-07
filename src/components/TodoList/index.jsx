import React from 'react';
import styled from 'styled-components'
import { TodoListItem } from '../TodoListItem';



export const TodoList=({ tasks, setTasks }) => {
  return tasks.length > 0 ? (
    tasks.map(( task, index ) => (
      <TodoListItem
      key={index}
      index={index}
      task={task}
      tasks={tasks}
      setTasks={setTasks}
      />
      ))
      ) : (
        <div>
          タスクねぇのか？
            死んでるマグロか？学べよ！鍛えろよ！
        </div>
      );
};