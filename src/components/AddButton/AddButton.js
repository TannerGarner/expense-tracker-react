'use client'

import { DisplayContext } from '@/context/DisplayContextProvider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext, useState } from 'react';

export default function AddButton() {
    const [open, setOpen] = useState(false);

    const {display, setDisplay} = useContext(DisplayContext);

    function handleClick(val) {
        setDisplay(val)
        setOpen(false)
    }

    const menuItems = ["Category","Tag","Goal", "Transaction","Recurring"]

    if (display !== null) return null;
    return (
        <div>
            {open && ( 
                <div className="addModal">
                    <ul>
                        {menuItems.map((item, index)=>{
                            return(<li onClick={()=>handleClick(item)} key={index}>{item}</li>)
                        })}
                    </ul>
                </div>
            )}
            <div
                className="addButton"
                onClick={() => setOpen((prev) => !prev)} 
            >
                {open ? (
                    <RemoveIcon className="addImage" />
                ) : (
                    <AddIcon className="addImage" />
                )}
            </div>
        </div>
    );
}