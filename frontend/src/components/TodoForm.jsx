import axios from "axios";
import React from "react";
import { useState } from "react";

const TodoForm = ({ setTodos, fetchData }) => {

    const [newTodo, setNewTodo] = useState({
        'body' : ''
    })

    const handleChange = (e) => {
        setNewTodo(prev => ({
            ...prev,
            'body':e.target.value
        }))
        console.log(newTodo);
    }

    const postTodo = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/todo/', newTodo)
            // setTodos(prevTodos => [...prevTodos, newTodo])
            fetchData()

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="py-6">
            <input type="text" placeholder="Add Todo" name="todo" className="input input-bordered w-full max-w-xs"
                onChange={handleChange} value={newTodo.body}
                onKeyDown={ (e) => {
                    if(e.key === 'Enter') {
                        postTodo()
                    }
                }}
            />
            <button className="btn btn-primary ml-2" onClick={postTodo}>ADD</button>
        </div>
    )
}

export default TodoForm;