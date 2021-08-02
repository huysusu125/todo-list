import React from 'react';
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos';
const App = () => {
    return (
        <>
            <Header />
            <Todos />
        </>
    )
}

export default App;