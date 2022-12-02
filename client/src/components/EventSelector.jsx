import React from "react"
import { createContext, useState } from "react"
import Select from "react-select"

export const eventSelected = createContext()

const EventSelector = () => {
    const [selectedEvent, setSelectedEvent] = useState('default')
    const options = [1,2,3,4] //create query for events list

    const handleChange = e => {
        e.preventDefault()
        setSelectedEvent(e.value)
    }

    return(
        <div id="event-selector-div">
            <form id="event-selector-form">
                <Select 
                id="event-selector" 
                options={options}
                placeholder="Select event"
                value = {options.find(obj => obj.value === selectedEvent)}
                onChange={handleChange} />
            </form>
            <eventSelected.Provider value={selectedEvent}></eventSelected.Provider>
        </div>
    )
}
export default EventSelector