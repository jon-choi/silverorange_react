import React, { useEffect, useState } from 'react';
import { RepoList } from './components/RepoList';

import './App.css';

export function App() {
  const [apiData, setApiData] = useState([]);

  const baseUrl = 'http://localhost:4000';

  // initial load
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}/repos`, {
          mode: 'cors',
        });

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

  return (
    <div className="App">
      {apiData === [] ? null : <RepoList apiData={apiData} />}
    </div>
  );
}
