import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  
  render() {
    return ( //以下の<div>タグ内は子コンポーネントを呼び出すだけの処理
      <div> 
        <TodoForm></TodoForm> 
        <TodoList></TodoList> 
      </div>
    ); //↑TodoFormコンポーネントはローカルストレージに直接アクセスしてTodoリストのデータ追加を行う
  }
}

export default App;
