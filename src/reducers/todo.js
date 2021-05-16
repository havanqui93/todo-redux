const initalState = {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    idUpdate: null
}

const todoReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodos = [...state.todos];
            newTodos.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return { ...state, todos: newTodos };

        case 'REMOVE_TODO':
            const deleteTodo = [...state.todos];
            const index = deleteTodo.findIndex(x=>x.id == action.payload);
            deleteTodo.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(deleteTodo));
            return { ...state, todos: deleteTodo };

        default:
            return state;
    }
};

export default todoReducer;