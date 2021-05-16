import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { addNewTodo } from '../../actions/todoAction';
import { v4 as uuidv4 } from 'uuid';


function TodoForm() {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    
    const handleOnChangetext = e => {
        const newValue = e.target.value;
        setValue(newValue);
    }

    const handleAddText = () =>{
        if(!value)
            return false;

        const todo = { id : uuidv4(), value : value };
        dispatch(addNewTodo(todo));
        setValue('');
    }    

    return (
        <div className="form-input">
            <InputGroup>
                <Input placeholder="Please input text" value={value} onChange={e => handleOnChangetext(e)} />
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={handleAddText}>Submit</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
}

export default TodoForm;