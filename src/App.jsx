import './App.css';
import data from './MOCK_DATA.js';
import React, { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");

  return (
<div className='App'>
    
    <div className="container">

      <input type="text" placeholder="Search.." value={search} onChange={(e) => setSearch(e.target.value)} />

      {data.filter((val) => {
        if (search == "") {
          return val;
        }
        else if (val.first_name.toLowerCase().includes(search.toLowerCase()
        )) {
          return val;
        }
      })
        .map((val, index) => {
          return (
            <div className='arrayCont' key={index}>
              <p>{val.first_name}</p>
            </div>
          );
        }
        )}

    </div>

  </div>
  );
}

export default App;
