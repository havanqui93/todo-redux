import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { addNewTodo } from '../../actions/todoAction';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

function TodoForm() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const toastOption = {
        position : 'top-right',
        autoClose : 2000,
        hideProgressBar : false,
        draggable : true
    };

    const handleOnChangetext = e => {
        const newValue = e.target.value;
        setValue(newValue);
    }

    const handleOnKeyDown = e => {
        if(e.keyCode === 13){
            handleAddText();
        }
    }

    const handleAddText = () => {
        if (!value)
            return false;

        const todo = { id: uuidv4(), value: value };
        dispatch(addNewTodo(todo));
        setValue('');
        toast.success('Add success!', toastOption);
    }

    return (
        <div className="form-input">
            <InputGroup>
                <Input placeholder="Please input text" value={value} 
                onChange={e => handleOnChangetext(e)} 
                onKeyDown={e => handleOnKeyDown(e)}
                />
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={handleAddText}>Submit</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <ToastContainer />
        </div>
    );
}

export default TodoForm;