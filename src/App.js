import React from 'react';
import TodoItem from './TodoItem'
import todosData from './todosData'
import './styles.css';

function App() {
  const todoComponents = todosData.map(item => {
    return <TodoItem key={item.id} list={item}/>
  })
  return (
    <div className="todo-list">
     {todoComponents}
    </div>
  );
}

export default App;
