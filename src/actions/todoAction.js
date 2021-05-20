export const addNewTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const updateTodo = (todo) => {
    return {
        type: 'UPDATE_TODO',
        payload: todo
    }
}

export const removeTodo = id => {
    return {
        type : 'REMOVE_TODO',
        payload : id
    }
}
