import React from 'react'
import './App.css'
import AddEntry from '../AddEntry.jsx'
import CurrentEntries from '../CurrentEntries.jsx'
import Footer from '../Footer.jsx'
import Selector from '../Selector'

function App() {

  return (
    <div>
    <div className="App">
      <h1>Entries</h1>

      <AddEntry />
      <hr />
      <CurrentEntries />
      <hr />
      <h1>Search</h1>
      <Selector/>
      <hr />
      <Footer />
    </div>
    </div>
  )
}


export default App;