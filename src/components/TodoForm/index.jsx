import React from 'react';

export const TodoForm=( {tasks, setTasks} ) => {
  const inputRef=React.useRef(null);

  const addTask=() => {
    //input要素のバリューを取得してsetTasksを実行
    const value=inputRef.current.value;
    
    //入力値が空だった場合無効化
    if (!value.length ) {
      return;
    }

    setTasks([
      {
        title: value,
        checked: false,
      },
      ...tasks,
    ]);
    
    //入力したらinputを空にする
    inputRef.current.value='';
  };

  return(
    <div className='todo-form'>
      <input type='text' ref={inputRef} placeholder='タスクを入力' /> 
      <button onClick={addTask}>タスクを追加</button>
    </div>
  );
};

