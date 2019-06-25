import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
  // 1: {
  //   id: 1,
  //   title: 'wash car',
  //   body: 'with soap',
  //   done: false
  // },
  // 2: {
  //   id: 2,
  //   title: 'wash dog',
  //   body: 'with shampoo',
  //   done: true
  // },
};

// {
//   id: 10,
//     title: 'claybar car',
//       body: 'with clay',
//         done: false
// }

// let newTodos = [
//   {
//     id: 3,
//     title: 'bake bread',
//     body: 'with butter',
//     done: false
//   },
//   {
//     id: 4,
//     title: 'wash fruit',
//     body: 'with whipped cream',
//     done: true
//   },
// ]

// {
//   id: 5,
//   title: 'eat almonds',
//   body: 'sea salt fsho',
//   done: false
// }


const todosReducer = (state  = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach( todo => newState[todo.id] = todo );
      return newState;
    case RECEIVE_TODO:
      newState = Object.assign({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      newState = Object.assign({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
