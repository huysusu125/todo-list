import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo'
const Todos = () => {
    const [todosState, setTodosState] = useState([
        {
            id: uuidv4(),
            title: 'việc 1',
            completed: true,
        },
        {
            id: uuidv4(),
            title: 'việc 2',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'việc 3',
            completed: false,
        }
    ]);

    const markComplete = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        });
        console.log((newTodos));
        setTodosState(newTodos);
    }

    const deleteTodo = id => {
        const newTodos = todosState.filter(todo => todo.id !== id);
        setTodosState(newTodos);
    }

    const addTodo = title => {
        const newTodo = { id: uuidv4(), title: title, completed: false };
        const newTodos = [...todosState, newTodo];
        setTodosState(newTodos);
    }
    return (
        <div>
            <AddTodo addTodoFunc={addTodo} />
            {todosState.map(todo =>
                <TodoItem
                    key={todo.id}
                    todoProps={todo}
                    markCompleteFunc={markComplete}
                    deleteTodoFunc={deleteTodo}
                />)}
        </div>
    )
}

export default Todos;