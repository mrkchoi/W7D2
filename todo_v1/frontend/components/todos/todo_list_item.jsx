import React from 'react';

const TodoListItem = ({ todo }) => (
  <li>
    <p>{todo.title} {todo.body} (Completed: {todo.done === true ? 'true' : 'false'})</p>
  </li>
);

export default TodoListItem;