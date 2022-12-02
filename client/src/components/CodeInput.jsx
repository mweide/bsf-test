import React from "react"
import { useState, createContext } from "react"

export const codeContext = createContext()

const CodeInput = () => {

    const [code, setCode] = useState('')

    return(
        <div id="code-input">
            <label>
                <input name="codeInput" id="codeInput" type="text" onChange={e => setCode(e.target.value)}></input>
            </label>
            <codeContext.Provider value={code}></codeContext.Provider>
        </div>
    )
}

export default CodeInput