export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload]
            };
        case ("TOGGLE_TODO"):
            return {
                todos: state.todos.map((todo, ind) => {
                    if (ind === action.payload) {
                        return {...todo, completed: !todo.completed}
                    } else {
                        return todo;
                    }
                })
            }
        case ("CLEAR_COMPLETED"):
            return {
                todos: state.todos.filter(todo => !todo.completed)
            };
        default:
            return state;
    }
};