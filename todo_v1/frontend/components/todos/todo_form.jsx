import React from 'react';
import uniqueId from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 5,
      title: '',
      body: '',
      done: false
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateDone = this.updateDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    let title = e.currentTarget.value;
    this.setState({ title });
  }

  updateBody(e) {
    let body = e.currentTarget.value;
    this.setState({ body });
  }

  updateDone(e) {
    let checked = e.currentTarget.checked;
    this.setState({ done: checked });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      id: uniqueId()
    });
    this.props.receiveTodo(this.state);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input type="text" value={this.state.title} onChange={this.updateTitle}/>
        </label>
        <br/><br/>
        <label>Body:
          <input type="text" value={this.state.body} onChange={this.updateBody}/>
        </label>
        <br/><br/>
        <label>Completed? &nbsp;&nbsp;
          <input type="checkbox" onChange={this.updateDone}/>
        </label>
        <br/><br/>
        <input type="submit" value="Add Todo" className="ui button basic blue"/>
      </form>
    )
  }
}

export default TodoForm;