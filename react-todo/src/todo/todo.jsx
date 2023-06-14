import "./todo.css";
import React, { Fragment } from "react";

export const Todo = () => {
    const [todos,setTodos] = React.useState([]);

    const handleSetTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: +e.timeStamp.toFixed(0),
            todoName: e.target[0].value,
        };
        setTodos((prev) => [...prev, newTodo]);
        e.target[0].value = "";
    }

    const RemoveTodo = (id) => {
        setTodos((prev) => prev.filter(prev=>prev.id!==id));
    };

    React.useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <>
            <div className="wrapper">
                <form action="" onSubmit={(e) => handleSetTodo(e)}>
                    <input type="text" />
                    <button type="submit">Add</button>
                </form>
                <div className="todo-wrap">
                    <ul>
                        {Boolean(todos.length) ? (
                            <>
                                {todos.map((todo) => (
                                    <li key={todo.id}>
                                        {todo.todoName} <b onClick={()=>RemoveTodo(todo?.id)}>X</b>
                                    </li>
                                ))}
                                
                            </>
                        ) : (
                            <li>Nothing here</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}