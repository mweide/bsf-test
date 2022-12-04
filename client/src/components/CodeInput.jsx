import React from "react"
import { useState, useRef, useEffect } from "react"
import axios from "axios"
import Input from '@mui/material/Input';

const CodeInput = (props) => {

    /**
     * 
     * {results.map((val, k) => {
              return (<div key={k}>
                <div>{val.first_name}, {val.last_name}, {val.email_address}, {val.ticketCode}</div></div>)})
          }
     */
    const [columns, setColumns] = useState([])
    const [results, setResults] = useState([])
    const [tab, setTable] = useState(false)
    let email_address
    let ticketCode

    useEffect(() => {axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByCodes/${ref1.current.value}`).then((response) => {
        setResults(response.data)
      })}, [])

    const ref1 = useRef(null)

    /*const mappedResults = () =>{
        results.map((val, k) => {
            return (<div key={k}>
              <div>{val.first_name}, {val.last_name}, {val.email_address}, {val.ticketCode}</div></div>)})
    }*/

    function refreshPage() {
        window.location.reload(false);
    }

    const [code, setCode] = useState('')

    const search = () => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByCodes/${ref1.current.value}`).then((response) => {
            setResults(response.data)}).catch(function (error) {if (error.response) {
              /* // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
           */}})
        setColumns(["First Name", "Last Name", "Email Address", "Ticket Code"])
    }

    function getObjectByValue(objVal) {
      let objectWithValue = {}
      results.forEach(entry => {
        if (Object.values(entry).indexOf(objVal) > -1) { // email value is inside obj inside array
          console.log('entry', entry)
          objectWithValue = entry
        }
      })
      return objectWithValue
    }

    return(
        <div>
        <div id="code-input">
            <label>
                <input ref={ref1} name="codeInput" id="codeInput" type="text" onChange={e => setCode(e.target.value)}></input>
            </label>
            <button id="search-button" onClick={() => {
            if (code.length > 0) {
              search(code);
            }
          }}>Search</button>
          {code}
        </div>
        <div className="userData">
          {() => {
            const index1 = results.indexOf(email_address);
            const index2 = results.indexOf(ticketCode);
            const val1 = getObjectByValue(email_address); 
            const val2 = getObjectByValue(ticketCode); 
            return({val1, val2})}}
          
        </div>
        </div>
    )
}
export default CodeInput