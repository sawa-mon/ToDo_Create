import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[], //stateプロパティのtodosプロパティでリストデータの管理
      newTodo:'' //stateプロパティのnewTodoプロパティでテキストボックスの入力データを管理
    };
  }

  handleChange(e){
    this.setState({newTodo: e.target.value}); //handleChangeメソッドでnewTodoプロパティの値の更新
  }

  addTodo() {
    if(this.state.newTodo === '')return;
    const todos = this.state.todos;
    todos.push(this.state.newTodo); //newTodoプロパティの値を↓
    this.setState({todos: todos}); //todosプロパティへ追加
    this.setState({newTodo:''}); //todosプロパティへの追加後はnewTodoプロパティに空文字を設定
  }
  deleteTodo(i) {
    const todos = this.state.todos;
    todos.splice(i,1); //JavaScriptのArrayオブジェクトのspliceメソッドを使いデータ削除を行う
    this.setState({todos: todos}); //データの削除後はsetStateメソッドを使いstateプロパティのtodosプロパティを更新
  }

  render() {
    return (
      <div>
        <h2>ToDoリスト</h2>
        <input
        value = {this.state.newTodo} //value属性とonChange属性の両方を使用し双方向データバインディングをする
        onChange= {this.handleChange.bind(this)} //value属性とonChange属性の両方を使用し双方向データバインディングをする
        placeholder = "ここにTodoを書き込み..."
        />
        <button //追加ボタンをクリックで、addTodoメソッドが呼ばれる
        onClick = {this.addTodo.bind(this)}>追加
        </button>
        
        <h3>未完了リスト</h3>
        <ul>
          {
            this.state.todos.map((todo, i) => { //JavaScriptのArrayオブジェクトのmapメソッドを使ってリスト表示を行う
              return ( //key={i} には配列のindexを設定
                <li key = {i}>{todo} 
                <button
                onClick ={this.deleteTodo.bind(this, i)}>削除</button>
                </li>
              )
            })
          }
              </ul>
      </div>
    );
  }
}

export default App;
