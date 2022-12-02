import React from "react"
import { useState, useRef, useEffect } from "react"
import axios from "axios"

const CodeInput = (props) => {

    
    const [columns, setColumns] = useState([])
    const [results, setResults] = useState([])
    const [tab, setTable] = useState(false)

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByCodes/${ref1.current.value}`).then((response) => {
        setResults(response.data)
      })
  }, [])

    const ref1 = useRef(null)

    const mappedResults = () =>{
        results.map((val, k) => {
            return (<div key={k}>
              <div>{val.first_name}, {val.last_name}, {val.email_address}, {val.ticketCode}</div></div>)})
    }

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
        </div>
        <div>
          {()=> {if(results !== []) {
            results.map((val, k) => {
              return (<div key={k}>
                <div>{val.first_name}, {val.last_name}, {val.email_address}, {val.ticketCode}</div></div>)})
          }}}
        </div>
        </div>
    )
}
export default CodeInput