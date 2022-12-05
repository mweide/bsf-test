import React from "react"
import { useState, useRef, useEffect } from "react"
import axios from "axios"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

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

    const checkLen = () => {
      if (code.length > 0) {
        search(code);
      }
    }

    return(
        <div>
        <div id="code-input">
            <TextField
              sx={{
                width: .33, 
                justifySelf: "center"
              }}
              id="codeInput"
              label="Code"
              ref={ref1}
              onChange={e => setCode(e.target.value)}
            />
            <br/>
            <Button id="search-button" variant="contained" sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }} onClick={() => {checkLen()}}>Search</Button>
        </div>
        </div>
    )
}
export default CodeInput