
const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let output = keys.map(id => state.todos[parseInt(id)]);
  return output;
};

export default allTodos;