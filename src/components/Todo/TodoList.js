import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Input } from 'reactstrap';
import { removeTodo, updateTodo } from '../../actions/todoAction';
import TodoItem from './TodoItem';
import ModalCustom from '../Common/ModalCustom';
import { ToastContainer, toast } from 'react-toastify';

const selectTodos = state => state.todo.todos;

function TodoList() {
    const list = useSelector(selectTodos);
    const dispatch = useDispatch();
    const [IsOpenModal, setIsOpenModal] = useState(false);
    const [valueEdit, setvalueEdit] = useState({ id : 0 , value : ''});
    const toastOption = {
        position : 'top-right',
        autoClose : 2000,
        hideProgressBar : false,
        draggable : true
    };

    const onDeleteItem = (id) => {
        dispatch(removeTodo(id));
        toast.success('Delete success!', toastOption);
    }

    const onUpdateItem = (id) => {
        let _value = list.find(x=>x.id === id);
        setvalueEdit({ id : id, value : _value.value});
        toggleModal();
    }

    const toggleModal = () => setIsOpenModal(!IsOpenModal);

    const handleOnChangetext = (e) => {
        const newValue = e.target.value;
        setvalueEdit(preState => {
            return {...preState, value : newValue }
        });
    }

    const onSubmitModal = () => {
        dispatch(updateTodo(valueEdit));
        toggleModal();
        toast.success('Update success!', toastOption);
    }

    const listGroupItem = list.map((item, index) => <TodoItem
                                                    item={item}
                                                    key={index}
                                                    onDeleteItem={onDeleteItem}
                                                    onUpdateItem={onUpdateItem} />);

    return (
        <div>
            <ListGroup className="todo-list">
                {listGroupItem}
            </ListGroup>
            <ModalCustom isShow={IsOpenModal} 
                onSubmitModal={onSubmitModal}
                labelSubmit="Update"
                labelCancel="Cancel">
                <Input value={valueEdit.value} onChange={e => handleOnChangetext(e)} />
            </ModalCustom>
            <ToastContainer />
        </div>
    );
}

export default TodoList;