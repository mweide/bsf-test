import React from "react"
import { useState } from "react"
import Table from './Table'
import axios from "axios"

const Search = (props) => {

    const searchType = props.searchType
    const evt = props.selectedEvent
    const first_name = props.first_name
    const last_name = props.last_name 
    const code = props.codeValue

    const [results, setResults] = useState([])
    const [columns, setColumns] = useState([])

    
    const setSearch = () => {
        if(searchType === "codesByEvent"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByEvent/${evt}`).then((response) => {
                setResults(response.data)})
            setColumns(["Event Name", "Event Date", "Ticket Code"])
        }
        if(searchType === "peopleByCodes"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByCodes/${code}`).then((response) => {
                setResults(response.data)})
            setColumns(["First Name", "Last Name", "Email Address", "Ticket Code"])
        }
        if(searchType === "codesByPeople"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByPeople/${first_name}/${last_name}`).then((response) => {
                setResults(response.data)})
            setColumns(["Ticket Code", "First Name", "Last Name"])
        }
        if(searchType === "peopleByEvents"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByEvents/${evt}`).then((response) => {
                setResults(response.data)})
            setColumns(["Event Name", "Event Date", "First Name", "Last Name"])
        }
    }
    
    const checkSearch = () => {
        if(columns !== []){
            return <Table columns={columns} data={results} />
        }
    }

    return(
        <div>
            <div>
                <button id="search-button" onChange={setSearch()}>Search</button>
            </div>
            <div>
                {checkSearch()}
            </div>
        </div>
    )

}

export default Search