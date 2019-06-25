import TodoList from './todo_list';
import { connect } from  'react-redux';
import allTodos from '../../reducers/selectors';
import { fetchTodos } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => {
  return ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);