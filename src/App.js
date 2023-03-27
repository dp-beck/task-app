import React, { Component } from 'react';
import Overview from './components/Overview';
// Apps Js is going to handle the input field with the logic

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask (newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  }

  render() {
    return (
    <div className="App">
      <input
        type="text"
        id="task"
        name="task" />
      <button onClick={() => {
        const newTask = document.getElementById("task").value;
        this.addTask(newTask);
      }
      }>Add Task</button>
      <Overview tasks={this.state.tasks}/>
    </div>
    );
  };
}

export default App;
