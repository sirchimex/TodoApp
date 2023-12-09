import React from "react";
import {MdOutlineDeleteOutline,MdEditNote,MdOutlineCheckBox,MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

const Table = ({todos, setTodos,isLoading}) =>{
    return (
        <div className="py-2">
            <table className="w-11/12 max-w-4xl">
                <thead className="border-b-2 border-black">
                    <tr>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">CheckBox</th>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">To Do</th>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">Status</th>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">Date Created</th>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <div>Is Loading</div>:
                    <>
                    {todos.map((todoItem, index) => {
                        return (

                            <tr key={todoItem.id} className="border-b border-black">
                                <td className="p-3" title={todoItem.id}>
                                    <span className="inline-block cursor-pointer"> 
                                        {todoItem.completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                                    </span>
                                </td>
                                <td className="p-3 text-sm">{todoItem.body}</td>
                                <td className="p-3 text-center">
                                    <span className={`p-1.5 text-xs font-medium tracking-wide rounded-md ${todoItem.completed ? 'bg-green-300' : 'bg-red-300'} `}>
                                    {todoItem.completed ? 'Done' : 'Incomplete'}
                                    </span>
                                </td>
                                <td className="p-3 text-sm">29-11-23</td>
                                <td className="p-3 text-sm font-medium grid grid-flow-col items-centre mt-5">
                                    <span className="text-xl cursor-pointer"> <MdEditNote/> </span>
                                    <span className="text-xl cursor-pointer"> <MdOutlineDeleteOutline/> </span>
                                </td>
                            </tr>  
                        )
                    })
                    
                    } </>
}
                </tbody>
            </table>
        </div>
    )
}
export default Table;