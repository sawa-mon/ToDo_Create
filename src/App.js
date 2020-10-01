import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  
  render() {
    return ( //以下の<div>タグ内は子コンポーネントを呼び出すだけの処理
      <div> 
         <TodoList /> 
        {/* <CompleteList></CompleteList> */}
      </div>
    ); //↑TodoFormコンポーネントはローカルストレージに直接アクセスしてTodoリストのデータ追加を行う
  }
}

export default App;
