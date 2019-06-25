import React from 'react';

const TodoListItem = ({ todo, removeTodo }) => (
  <tr>
    <td data-label="Title">{todo.title}</td>
    <td data-label="Body">{todo.body}</td>
    <td data-label="Completed">{todo.done === true ? 'true' : 'false'}</td>
    <td data-label="Delete"><div onClick={() => { removeTodo(todo) }}><i className="close icon close_icon"></i></div></td>
  </tr>
);

export default TodoListItem;