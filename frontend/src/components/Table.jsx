import React from "react";
import {MdOutlineDeleteOutline,MdEditNote,MdOutlineCheckBox,MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

const Table = () =>{
    return (
        <div className="py-32">
            <table className="w-11/12 max-w-4xl">
                <thead className="border-b-2 border-black">
                    <tr>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">Check Boxes</th>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">To Do</th>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">Status</th>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">Date Created</th>
                        <th className="p-3 text-sm font-semi-bold tracking-wide text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-3 text-sm">true</td>
                        <td className="p-3 text-sm">Lorem ipsum dolor sit.</td>
                        <td className="p-3 text-sm">Done</td>
                        <td className="p-3 text-sm">29-11-23</td>
                        <td className="p-3 text-sm font-medium grid grid-flow-col">
                            <span> <MdEditNote/> </span>
                            <span> <MdOutlineDeleteOutline/> </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Table;