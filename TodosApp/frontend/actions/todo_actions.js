export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import * as todosAPIUtil from '../util/todo_api_util';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => (dispatch) => {
  return todosAPIUtil.fetchTodos().then(res => {
    dispatch(receiveTodos(res))
  })
};


window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.fetchTodos = fetchTodos;


// store.dispatch(receiveTodo(todo));