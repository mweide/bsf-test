import React from 'react'
import './App.css'
import { createContext } from 'react'
import AddEntry from '../AddEntry.jsx'
import CurrentEntries from '../CurrentEntries.jsx'
import Footer from '../Footer.jsx'
import Selector from '../Selector'
import SetInputs from '../SetInputs.jsx'
import Search from '../Search.jsx'

function App() {

  return (
    <div>
    <div className="App">
      <h1>Entries</h1>

      <AddEntry />
      <hr />
      <CurrentEntries />
      <hr />
      
      <valToExport>
        <codeContext>
          <eventSelected>
            <first>
              <last>
      <h1>Search</h1>
      <Selector />
      <SetInputs />
      <Search />
      </last>
      </first>
      </eventSelected>
      </codeContext>
      </valToExport>
      <hr />
      <Footer />
      
    </div>
    </div>
  )
}


export default App;