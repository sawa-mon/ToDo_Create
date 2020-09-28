import React, { Component } from 'react';

class TodoList extends Component {
  deleteTodo(i) {
    this.props.del(i); //(子から)削除された項目のデータを親へ渡す
  }

  render() {
    return(
      <div>
        <h3>未完了リスト</h3>
        <ul>
          {
            this.props.todos.map((todo,i) => { //
              return(
              <li
              key={i}>{todo}
              <button
              onClick = {this.deleteTodo.bind(this,i)}>削除</button>
              </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;