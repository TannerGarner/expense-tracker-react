'use client'

import { DisplayContext } from "@/context/DisplayContextProvider"
import { useContext } from "react"

export default function CancelButton() {
    const {setDisplay} = useContext(DisplayContext)

    function handleClick(){
        setDisplay(null)
    }

    return(
        <div className="cancelButton button" onClick={()=>handleClick()}>
            <p>Cancel</p>
        </div>
    )
}