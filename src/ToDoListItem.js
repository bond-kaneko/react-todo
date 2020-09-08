import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    return (
      <div className="ToDoListItem">
        <div className="ToDoListItem-title">{this.props.title}</div>
        <div className="ToDoListItem-description">{this.props.description}</div>
        <button onClick={() => this.props.deleteItem(this.props.timestamp)}>削除</button>
      </div>
    );
  }
}

export default ToDoListItem;