import React from "react"
import { useState, useRef } from "react"
import axios from "axios"

const PeopleInput = () => {

    const [fInput, setFinput] = useState('')
    const [lInput, setLinput] = useState('')
    const [results, setResults] = useState([])
    const [columns, setColumns] = useState([])


    const search = () => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByPeople/${fInput}/${lInput}`).then((response) => {
            setResults(response.data)})
        setColumns(["Ticket Code", "First Name", "Last Name"])
    }

    function refreshPage() {
        window.location.reload(false);
      }

    const ref1 = useRef(null)
    const ref2 = useRef(null)

    return(
        <div id="people-inputs">
            <label htmlFor="firstName">First Name: </label>
                <input ref={ref1} type="text" name="firstName" id="firstName" onInput={e => setFinput(e.target.value)}></input>
            <label htmlFor="lastName">Last Name: </label>
                <input ref={ref2} type="text" name="lastName" id="lastName" onInput={e => setLinput(e.target.value)}></input>
            <div>
                <button id="search-button" onClick={() => {
            if (fInput.length > 0 && lInput.length > 0) {
              search(); refreshPage();
            }
          }}>Search</button>
            </div>
        </div>
    )
}
export default PeopleInput