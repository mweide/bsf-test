const Footer = () => {

    return (
        <div>
            <h2>Footer</h2>
            <p><em> Megan Weide ~ r94r698</em></p>
            <p>My role in the project was to build a search functionality and to style the app.</p>
            <ul>
                <li>Updated components/AddEntry.jsx with styling</li>
                <li>Updated components/CurrentEntries.jsx with styling</li>
                <li>components/CodeInput.jsx - A component to provide a place to input code in code searches and to initiate those searches</li>
                <li>components/EventSelector.jsx - A component to provide a place to select an event for event searches and to initiate those searches</li>
                <li>components/PeopleInput.jsx - A component to provide a place to input first/last names for people-based searches and to initiate those searches</li>
                <li>components/Selector.jsx - The tool to select the search type to conduct</li>
                <li>components/SetInputs.jsx - A component to set the proper inputs for the given search</li>
                <li>Updated components/App/App.css with some styling</li>
                <li>Updated components/App/App.js to include the main component of our feature, the selector</li>
                <li>Updated server/index.js with paths for searches to take to query the database</li>
            </ul>
            <p>Github: <a href="https://github.com/mweide/bsf-test">https://github.com/mweide/bsf-test</a></p>
        </div>
    )
}

export default Footer