import React from 'react';
import TodoItem from './TodoItem'
import './styles.css';

function App() {
  return (
    <div className="todo-list">
     <TodoItem/>
     <TodoItem/>
     <TodoItem/>
     <TodoItem/>
    </div>
  );
}

export default App;
