export const fetchTodos = () => {
  return $.ajax({
    method: "GET",
    url: "./api/todos"
  })
}

export const createTodo = (data) => {
  return $.ajax({
    method: "POST",
    url: "./api/todos",
    data: {todo: data}
  })
}


// export default fetchTodos;
