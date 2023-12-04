import React from "react";
import {MdOutlineDeleteOutline,MdEditNote,MdOutlineCheckBox,MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

const Table = () =>{
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
                    <tr>
                        <td className="p-3">
                        <span className="inline-block cursor-pointer"> <MdOutlineCheckBox /> </span>
                        </td>
                        <td className="p-3 text-sm">Lorem ipsum dolor sit.</td>
                        <td className="p-3 text-center">
                            <span className="p-1.5 text-xs font-medium tracking-wide rounded-md bg-green-300">Done</span>
                        </td>
                        <td className="p-3 text-sm">29-11-23</td>
                        <td className="p-3 text-sm font-medium grid grid-flow-col items-centre mt-5">
                            <span className="text-xl cursor-pointer"> <MdEditNote/> </span>
                            <span className="text-xl cursor-pointer"> <MdOutlineDeleteOutline/> </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-3">
                        <span className="inline-block cursor-pointer"> <MdOutlineCheckBox /> </span>
                        </td>
                        <td className="p-3 text-sm">Lorem ipsum dolor sit.</td>
                        <td className="p-3 text-center">
                            <span className="p-1.5 text-xs font-medium tracking-wide rounded-md bg-green-300">Done</span>
                        </td>
                        <td className="p-3 text-sm">29-11-23</td>
                        <td className="p-3 text-sm font-medium grid grid-flow-col items-centre mt-5">
                            <span className="text-xl cursor-pointer"> <MdEditNote/> </span>
                            <span className="text-xl cursor-pointer"> <MdOutlineDeleteOutline/> </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-3">
                        <span className="inline-block cursor-pointer"> <MdOutlineCheckBox /> </span>
                        </td>
                        <td className="p-3 text-sm">Lorem ipsum dolor sit.</td>
                        <td className="p-3 text-center">
                            <span className="p-1.5 text-xs font-medium tracking-wide rounded-md bg-green-300">Done</span>
                        </td>
                        <td className="p-3 text-sm">29-11-23</td>
                        <td className="p-3 text-sm font-medium grid grid-flow-col items-centre mt-5">
                            <span className="text-xl cursor-pointer"> <MdEditNote/> </span>
                            <span className="text-xl cursor-pointer"> <MdOutlineDeleteOutline/> </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Table;