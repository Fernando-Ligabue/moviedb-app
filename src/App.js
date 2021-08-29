import React, { useState } from 'react';
import axios from 'axios';
import ConfigApi from './config';


import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiURL = ConfigApi.api_url;

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiURL + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiURL + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(data)

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        {(typeof state.results != "undefined") ? <Results results={state.results} openPopup={openPopup} /> : <h3 className="noresults">'No film with this name found in the database! Please Try again!'</h3>}

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App