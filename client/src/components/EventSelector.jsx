import React from "react"
import { useState } from "react"
import Select from "react-select"
import axios from "axios"
import Table from "./Table"

const EventSelector = (props) => {
    const [selectedEvent, setSelectedEvent] = useState('default')
    const options = [{value:"1", label:"1"},{value:"2", label:"2"},{value:"3", label:"3"},{value:"4", label:"4"}] //create query for events list
    const searchType = props.selectedValue

    const [results, setResults] = useState([])
    const [columns, setColumns] = useState([])

    function refreshPage() {
        window.location.reload(false);
    }

    const search = () => {
        if(searchType === "codesByEvent"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByEvent/${selectedEvent}`).then((response) => {
                setResults(response.data)})
            setColumns(["Event Name", "Event Date", "Ticket Code"])
        }
        if(searchType === "peopleByEvents"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByEvents/${selectedEvent}`).then((response) => {
                setResults(response.data)})
            setColumns(["Event Name", "Event Date", "First Name", "Last Name"])
        }
    }

    const mappedResults = () => {
        if(searchType === "codesByEvent"){
            results.map((val, k) => {
                return (<div key={k}>
                  <div>{val.event_name}, {val.event_date}, {val.ticketCode}</div></div>)})
        }
        if(searchType === "peopleByEvents"){
            results.map((val, k) => {
                return (<div key={k}>
                  <div>{val.event_name}, {val.event_date}, {val.first_name}, {val.last_name}</div></div>)})
        }
    }

    return(
        <div>
            <form id="event-selector-form">
                <Select 
                id="event-selector" 
                options={options}
                placeholder="Select event"
                value = {options.find(obj => obj.value === selectedEvent)}
                onChange={e=> {setSelectedEvent(e.value)}} />
            </form>
            <div>
            <button id="search-button" onClick={() => {
            if (selectedEvent.length > 0) {
              search();
            }
          }}>Search</button>
            </div>
            <Table columns={columns} data={mappedResults}/>
        </div>
    )
}
export default EventSelector