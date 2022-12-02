import React from "react"
import { useState } from "react"
import Select from "react-select"
import Search from './Search'

const EventSelector = (props) => {
    const [selectedEvent, setSelectedEvent] = useState('default')
    const options = ["1","2","3","4"] //create query for events list

    const searchType = props.selectedValue
    const handleChange = e => {
        e.preventDefault()
        setSelectedEvent(e.value)
    }

    return(
        <div>
            <form id="event-selector-form">
                <Select 
                id="event-selector" 
                options={options}
                placeholder="Select event"
                value = {selectedEvent}
                onChange={handleChange} />
            </form>
            <div>
                <Search searchType={searchType} selectedEvent={selectedEvent}/>
            </div>
        </div>
    )
}
export default EventSelector