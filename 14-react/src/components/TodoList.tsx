import React from "react";
import './TodoList.css'

interface ITodo {
    items: { id: string, text: string }[];
    onRemove: (id: string) => void;
}

const TodoList: React.FC<ITodo> = (props) => {
    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={props.onRemove.bind(null, todo.id)}>Remove entry</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
