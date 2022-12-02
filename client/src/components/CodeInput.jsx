import React from "react"
import { useState } from "react"
import Search from './Search'

const CodeInput = (props) => {

    const [code, setCode] = useState('')
    const searchType = props.searchType

    return(
        <div id="code-input">
            <label>
                <input name="codeInput" id="codeInput" type="text" onChange={e => setCode(e.target.value)}></input>
            </label>
            <Search searchType={searchType} codeValue={code} />
        </div>
    )
}

export default CodeInput