export const initialState = {
  todos: [
    {
      todo: "build app using reducer",
      completed: false,
      id: 4567899876
    },
    {
      todo: "eat lunch",
      completed: true,
      id: 4567890987
    },
    {
      todo: "get a job as a webdeveloper",
      completed: false,
      id: 9876543456
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { todo: action.payload, completed: false, id: Date.now() }
        ]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      };
    case "CLEAR":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
