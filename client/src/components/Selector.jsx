import React, {createContext, useState} from 'react'
import Select from 'react-select'

export const valToExport = createContext()

const Selector = () => {

    const options = [
        {value: "default", label: "--"},
        {value: "codesByEvent", label: "Codes by Event"},
        {value: "peopleByCodes", label: "People by Codes"},
        {value: "codesByPeople", label: "Codes by People"},
        {value: "peopleByEvents", label: "People by Events"}
    ]
    const handleChange = e => {
        //e.preventDefault()
        setSelectedValue(e.value)
      }

    const [selectedValue, setSelectedValue] = useState("default");
    
    return(
        <div id="selector-div">
            <form id="selector-form">
                <Select 
                id="selector" 
                options={options}
                placeholder="Select search type..."
                value = {options.find(obj => obj.value === selectedValue)}
                onChange={handleChange} />
            </form>
            <valToExport.Provider value={selectedValue}></valToExport.Provider>
        </div>
    )
}

export default Selector