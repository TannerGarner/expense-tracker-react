'use client'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

export default function AddButton() {
    const [display, setDisplay] = useState(false);

    return (
        <div>
            {display && ( 
                <div className="addModal">
                    <ul>
                        <li>Category</li>
                        <li>Tag</li>
                        <li>Goal</li>
                        <li>Recurring</li>
                        <li>Transaction</li>
                    </ul>
                </div>
            )}
            <div
                className="addButton"
                onClick={() => setDisplay((prev) => !prev)} 
            >
                {display ? (
                    <RemoveIcon className="addImage" />
                ) : (
                    <AddIcon className="addImage" />
                )}
            </div>
        </div>
    );
}