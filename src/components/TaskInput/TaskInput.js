import React, {Component} from 'react';
import './TaskInput.css'

class TaskInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      items: []
    };

    //Binds
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    return <form className="Task" onSubmit=={this.onSubmit}>
        <input value={this.state.term} placeholder="Introduce a new task..." className="Task__Input"></input>
        <button>Submit</button>
    </form>;
  }
}

export default TaskInput;