import React from "react"
import { useState } from "react"
import Search from './Search'

const PeopleInput = (props) => {

    const [fInput, setFinput] = useState('')
    const [lInput, setLinput] = useState('')
    const searchType = props.searchType

    return(
        <div id="people-inputs">
            <label htmlFor="firstName">
                <input type="text" name="firstName" id="firstName" onInput={e => setFinput(e.target.value)}></input>
            </label>
            <label htmlFor="firstName">
                <input type="text" name="lastName" id="lastName" onInput={e => setLinput(e.target.value)}></input>
            </label>
            <Search first_name={fInput} last_name={lInput} searchType={searchType}/>
        </div>
    )
}
export default PeopleInput