import React from 'react';
import './App.css';
import ToDoListItem from "./ToDoListItem.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: []
    }

    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  addItem(e) {
    e.preventDefault();

    // idがtitleのElementを取得
    const titleElement = e.target.elements["title"]
    // idがdescriptionのElementを取得
    const descriptionElement = e.target.elements["description"]

    this.setState(
      {
        todoList: this.state.todoList.concat({
          timestamp: Date.now(),
          title: titleElement.value,
          description: descriptionElement.value
        })
      },
    )

    titleElement.value = ''
    descriptionElement.value = ''
  }
  deleteItem(timestamp) {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.timestamp !== timestamp)
    })
  }

  render() {
    return (
      <div className="App">
        <form
          className="App-form"
          onSubmit={e => {this.addItem(e)}}
        >
          <div>
            <input
              id="title"
              placeholder="title"
            />
            <textarea
              id="description"
              placeholder="description"
            />
          </div>
          <div>
            <button
              type="submit"
            >
             登録
            </button>
          </div>
        </form>
        <div>
          {this.state.todoList.map(todo => (
            <ToDoListItem
              key={todo.timestamp}
              timestamp={todo.timestamp}
              title={todo.title}
              description={todo.description}
              deleteItem={this.deleteItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
