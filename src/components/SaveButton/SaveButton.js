'use client'

import { DisplayContext } from "@/context/DisplayContextProvider";
import { useContext } from "react";

export default function SaveButton() {
    const {setDisplay} = useContext(DisplayContext);

    function handleClick(){
        setDisplay(null)
    }

    return(
        <div className="saveButton button" onClick={()=>handleClick()}>
            <p>Save</p>
        </div>
    )
}