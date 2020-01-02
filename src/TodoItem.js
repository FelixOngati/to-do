import React from 'react';
import './styles.css';

function TodoItem(props){
    const markCompleted = {
        fontStyle: "italic",
        color: "red",
        textDecoration: "line-through"
    }
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.list.completed} onChange={()=>props.handleChange(props.list.id)}/>
            <p style = {props.list.completed ? markCompleted:null}>{props.list.text}</p>
        </div>
    )
}

export default TodoItem;