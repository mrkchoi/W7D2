import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
  
  render() {
    let {receiveTodo, removeTodo, todos } = this.props;

    return (
      <div>
        <h3>All Todos</h3>
        <table className="ui celled table">
          <thead>
            <tr><th>Title</th>
              <th>Body</th>
              <th>Completed?</th>
              <th>Delete</th>
            </tr></thead>
          <tbody>
            {todos.map(todo => <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo} />)}
          </tbody>
        </table>

        <div className="ui divider"></div>

        <TodoForm receiveTodo={receiveTodo} />
      </div>
    )
  }
}

// const TodoList = ({ fetchTodos, todos, receiveTodo, removeTodo }) => (
//   <div>
//     <h3>All Todos</h3>
//     <table className="ui celled table">

//       <thead>
//         <tr><th>Title</th>
//           <th>Body</th>
//           <th>Completed?</th>
//           <th>Delete</th>
//         </tr></thead>
//       <tbody>
//         {todos.map(todo => <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo} />)}
//       </tbody>
//     </table>

//     <div className="ui divider"></div>

//     <TodoForm receiveTodo={receiveTodo}/>
//   </div>
// );

export default TodoList;
