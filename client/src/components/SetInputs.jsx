import React from "react";
import EventSelector from "./EventSelector";
import PeopleInput from "./PeopleInput";
import CodeInput from "./CodeInput";

const SetInputs = (props) => {
    const searchType = props.searchType

    if(searchType === "codesByEvent"){

        return (<div><EventSelector searchType={searchType}/></div>)
    }
    if(searchType === "peopleByCodes"){
        return (<div><PeopleInput searchType={searchType} /></div>)
    }
    if(searchType === "codesByPeople"){
        return (<div><CodeInput searchType={searchType}/></div>)
    }
    if(searchType === "peopleByEvents"){
        return (<div><EventSelector searchType={searchType}/></div>)
    }
    
}

export default SetInputs