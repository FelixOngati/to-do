import React, {Component} from 'react';
import TodoItem from './TodoItem'
import todosData from './todosData'
import './styles.css';

class App extends Component {

  constructor(){
    super()

    this.state={
      todos:todosData
    }

    this.handleChange = this.handleChange.bind(this)
  }

handleChange(id){
  this.setState((prevState)=>{
    const updatedTodos = prevState.todos.map(item => {
      if (item.id === id){
        return{
          ...item,
          completed:!item.completed
        }
      }
      return item
    })
    return {
      todos:updatedTodos
    }
  })
}


  render(){
    const todoComponents = this.state.todos.map(item => { return <TodoItem key={item.id} list={item} handleChange={this.handleChange}/>})
    return (
      <div className="todo-list">
      {todoComponents}
      </div>
    );
  }
  
}

export default App;
