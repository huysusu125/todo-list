import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const AddTodo = (props) => {

    const addTodo = props.addTodoFunc;

    const [title, setTitle] = useState('');

    const changeTitle = function (e) {
        setTitle(e.target.value)
    }

    const addSingleTodo = e => {
        if (title !== '') {
            addTodo(title);
            setTitle('');
        }
        
    }

    return (
        <div class="search">
            <Input
                placeholder="Placeholder"
                inputProps={{ 'aria-label': 'description' }}
                value={title}
                onChange={changeTitle}
            />
            <Button onClick={() => addSingleTodo()} variant="contained" color='primary'>
                Thêm
            </Button>
        </div>
    )
}

export default AddTodo;

AddTodo.prototype = {
    addTodoFunc: PropTypes.func.isRequired,
}
