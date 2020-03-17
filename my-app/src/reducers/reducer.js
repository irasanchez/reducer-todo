export const initialState = {
  arbitraryItem: "jhvfdsfjbj",
  todos: [
    {
      todo: "build app using reducer",
      completed: false,
      id: 4567899876
    },
    {
      todo: "eat lunch",
      completed: true,
      id: 4567775447
    },
    {
      todo: "get a job as a web developer",
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
          todo.id, action.payload.id;
          return todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      };
    case "CLEAR":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.completed === false;
        })
      };
    default:
      return state;
  }
};
