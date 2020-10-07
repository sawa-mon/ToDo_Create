import React from 'react';
import styled from 'styled-components'
import { TodoListItem } from '../TodoListItem';

const StyledTodoError = styled.div`
padding: 16px;
`;

export const TodoList=({ tasks, setTasks }) => {
  return tasks.length > 0 ? (
    tasks.map(( task, index ) => (
      <TodoListItem
      key={index}
      task={task}
      tasks={tasks}
      index={index}
      setTasks={setTasks}
      />
      ))
      ) : (
        <StyledTodoError>
          タスクねぇのか？
          <span role='img' aria-label='sad'>
            暇人か？
          </span>
        </StyledTodoError>
      );
};


