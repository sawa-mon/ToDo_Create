import React from 'react';
import {TodoListItem} from '../TodoListItem/index';

export const TodoList  = () => {

  return(
    <div>
      <p>Todo実施数{/* {`Todo　未実施${}個：実施${}：総数${}個`} */}</p>
      <TodoListItem />
    </div>
  );
}
