import React from "react";

const TodoForm = () => {
    return (
        <div className="py-6">
            <input type="text" placeholder="Add Todo" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-primary ml-2">ADD</button>
        </div>
    )
}

export default TodoForm;