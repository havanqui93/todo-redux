import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoItem({ item, onDeleteItem }, key) {
    return (
        <ListGroupItem className="todo-item" key={key}>
            <span>{item.value}</span>
            <span className="badge badge-dark" onClick={() => onDeleteItem(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </ListGroupItem>
    );
}

export default TodoItem;