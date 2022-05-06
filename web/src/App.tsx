import React, { useEffect, useState } from 'react';

import './App.css';

export function App() {
  const [apiData, setApiData] = useState([]);

  const baseUrl = 'http://localhost:4000/repos';

  // initial load
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(baseUrl);

        if (response.status !== 200) {
          alert('Oops! Unable to fetch data');
        } else {
          setApiData(await response.json()); // stores fetched data in state if successful
        }
      } catch (error) {
        alert('Unable to fetch data');
      }
    }
    fetchData();
  }, []);

  return <div className="App">{apiData}</div>;
}
