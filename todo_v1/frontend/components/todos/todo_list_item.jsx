import React from 'react';

const TodoListItem = ({ todo, removeTodo }) => (
  <li>
    <p>{todo.title} {todo.body} (Completed: {todo.done === true ? 'true' : 'false'})</p>
    <button onClick={() => {removeTodo(todo)}}>X</button>
  </li>
);

export default TodoListItem;