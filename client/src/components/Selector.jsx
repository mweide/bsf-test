import React, {createContext, useState} from 'react'
import Select from 'react-select'
import SetInputs from './SetInputs'

export const valToExport = createContext()

const Selector = () => {

    const options = [
        {value: "default", label: "--"},
        {value: "codesByEvent", label: "Codes by Event"},
        {value: "peopleByCodes", label: "People by Codes"},
        {value: "codesByPeople", label: "Codes by People"},
        {value: "peopleByEvents", label: "People by Events"}
    ]
    const handleChange = (e) => {
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
            <SetInputs searchType={selectedValue}/>
        </div>
    )
}

export default Selector