import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
const TodoItem = (props) => {
    const todo = props.todoProps;
    const markComplete = props.markCompleteFunc;
    
    const todoItemStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none'
    }
    
    return (
        <div className="todo-item">
            <div className="todo-start">
                <Checkbox onChange={()=> markComplete(todo.id)} checked={todo.completed} value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                <p style={todoItemStyle}>{todo.title}</p>
            </div>
            <div className="btn-group">
                <Button className="btn" variant="contained" >
                    Sửa
                </Button>
                <Button className="btn" variant="contained" color="secondary">
                    Xóa
                </Button>
            </div>
        </div>
    )
}

//PropTypes
TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompleteFunc: PropTypes.func.isRequired,
}

export default TodoItem;