import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoItem({ item, onDeleteItem, onUpdateItem }, key) {
    return (
        <ListGroupItem className="todo-item" key={key}>
            <span>{item.value}</span>

            <span className="badge badge-update" onClick={() => onUpdateItem(item.id)}>
                <FontAwesomeIcon icon={faEdit} />
            </span>
            <span className="badge badge-del" onClick={() => onDeleteItem(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </ListGroupItem>
    );
}

export default TodoItem;