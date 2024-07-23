import React, { useReducer, useState } from 'react';
import todoReducer, { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './todoReducer';
import './App.css';

const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch({ type: ADD_TODO, payload: inputValue });
            setInputValue('');
        }
    };

    const handleRemoveTodo = id => {
        dispatch({ type: REMOVE_TODO, payload: id });
    };

    const handleToggleTodo = id => {
        dispatch({ type: TOGGLE_TODO, payload: id });
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            className={todo.completed ? 'completed' : ''}
                            onClick={() => handleToggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button className="remove" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
