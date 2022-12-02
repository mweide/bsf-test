import React from "react"
import { useState,createContext } from "react"

export const first = createContext()
export const last = createContext()

const PeopleInput = () => {

    const [fInput, setFinput] = useState('')
    const [lInput, setLinput] = useState('')

    return(
        <div id="people-inputs">
            <label htmlFor="firstName">
                <input type="text" name="firstName" id="firstName" onInput={e => setFinput(e.target.value)}></input>
            </label>
            <label htmlFor="firstName">
                <input type="text" name="lastName" id="lastName" onInput={e => setLinput(e.target.value)}></input>
            </label>
            <first.Provider value={fInput}></first.Provider>
            <last.Provider value={lInput}></last.Provider>
        </div>
    )
}
export default PeopleInput