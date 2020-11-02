import React, { useState, useRef } from 'react';

export const TodoListItem = (props) => {
  const [isEdited, setIsEdited] = useState(false);
  const inputRef = useRef(null);
  
  
  return(
    <div>
      <input type="text"/>
      <button>編集</button>
      <button>削除</button>
      <button>更新</button>
  
    </div>
  );
};