import React, { useState } from 'react';
import TodoItem from './TodoItem';

const Todos = () => {
    const [todosState, setTodosState] = useState([
        {
            id: 1,
            title: 'việc 1',
            completed: true,
        },
        {
            id: 2,
            title: 'việc 2',
            completed: false,
        },
        {
            id: 3,
            title: 'việc 3',
            completed: false,
        }
    ]);

    const markComplete = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        });
        setTodosState(newTodos);
    }
    return (
        <div>
            {todosState.map(todo => <TodoItem key={todo.id} todoProps={todo} markCompleteFunc={markComplete} />)}
        </div>
    )
}

export default Todos;