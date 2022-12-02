import React from "react";
import { useContext } from "react";
import EventSelector from "./EventSelector";
import PeopleInput from "./PeopleInput";
import CodeInput from "./CodeInput";
import { valToExport } from "./Selector";

const SetInputs = () => {
    const searchType = useContext(valToExport)

    if(searchType === "codesByEvent"){

        return (<div><EventSelector /></div>)
    }
    if(searchType === "peopleByCodes"){
        return (<div><PeopleInput /></div>)
    }
    if(searchType === "codesByPeople"){
        return (<div><CodeInput /></div>)
    }
    if(searchType === "peopleByEvents"){
        return (<div><EventSelector /></div>)
    }
    
}

export default SetInputs