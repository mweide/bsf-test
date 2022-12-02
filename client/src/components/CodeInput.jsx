import React from "react"
import { useState, useRef } from "react"
import axios from "axios"

const CodeInput = (props) => {

    const [code, setCode] = useState('')
    const [columns, setColumns] = useState([])
    const [results, setResults] = useState([])
    const searchType = props.searchType

    const ref1 = useRef(null)

    function refreshPage() {
        window.location.reload(false);
      }

    const search = () => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByCodes/${code}`).then((response) => {
            setResults(response.data)})
        setColumns(["First Name", "Last Name", "Email Address", "Ticket Code"])
    }

    return(
        <div id="code-input">
            <label>
                <input ref={ref1} name="codeInput" id="codeInput" type="text" onChange={e => setCode(e.target.value)}></input>
            </label>
            <button id="search-button" onClick={() => {
            if (code.length > 0) {
              search(); refreshPage();
            }
          }}>Search</button>
        </div>
    )
}

export default CodeInput