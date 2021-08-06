import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo'
import axios from 'axios';
const Todos = () => {
    const [todosState, setTodosState] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get('http://localhost:8081/todo');
                // console.log(res.data)
                setTodosState(res.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getTodos();
    }, [])
    const markComplete = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        });
        console.log((newTodos));
        setTodosState(newTodos);
    }

    const deleteTodo = async id => {
        try {
            await axios.delete(`http://localhost:8081/todo/${id}`);
            const newTodos = todosState.filter(todo => todo.id !== id);
            setTodosState(newTodos);
          } catch (error) {
            console.log(error.message);
          }
    }

    const addTodo = async title => {
        try {
            const res = await axios.post('http://localhost:8081/todo', { title: title, completed: false });
            const newTodos = [...todosState, res.data]
            setTodosState(newTodos);
        } catch (error) {
            console.error(error.message);
        }
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