'use client';

import { useContext } from "react";
import { DisplayContext } from "@/context/DisplayContextProvider";

export default function SaveButton() {

    return (
        <button type="submit"  className="saveButton button">Save</button>
    );
}