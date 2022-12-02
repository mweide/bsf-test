import React from "react"
import { useState } from "react"
import { useContext } from "react"
import Table from './Table'
import axios from "axios"
import valToExport from './Selector'
import { first, last } from "./PeopleInput"
import { codeContext } from "./CodeInput"
import { eventSelected } from "./EventSelector"

const Search = () => {

    const searchType = useContext(valToExport)
    const first_name = useContext(first)
    const last_name = useContext(last)
    const code = useContext(codeContext)
    const event = useContext(eventSelected)

    const [results, setResults] = useState([])
    const [columns, setColumns] = useState([])

    
    const setSearch = () => {
        if(searchType === "codesByEvent"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByEvent/${event}`).then((response) => {
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
            axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByEvents/${event}`).then((response) => {
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