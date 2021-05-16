import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'reactstrap';
import { removeTodo } from '../../actions/todoAction';
import TodoItem from './TodoItem';

const selectTodos = state => state.todo.todos;


function TodoList() {
    const list = useSelector(selectTodos);
    const dispatch = useDispatch();

    const onDeleteItem = (id) => {
        dispatch(removeTodo(id));
    }

    return (
        <ListGroup className="todo-list">
            {
                list.map((item, index) => <TodoItem item={item} key={index} onDeleteItem={onDeleteItem} />)
            }
        </ListGroup>
    );
}

export default TodoList;