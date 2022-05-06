import React, { useEffect, useState } from 'react';
import { RepoList } from './components/RepoList';
import { Buttons } from './components/Buttons';

import './App.css';

export function App() {
  const [apiData, setApiData] = useState([]);
  const [sort, setSort] = useState('all');

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
          const jsonData = await response.json(); // stores fetched data in state if successful

          jsonData.sort((a: any, b: any) =>
            a.created_at > b.created_at ? 1 : -1
          ); // displays list of repos in reverse chronological order

          setApiData(jsonData);
        }
      } catch (error) {
        alert('Unable to fetch data');
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Buttons apiData={apiData} setSort={setSort} />
      {apiData === [] ? null : <RepoList apiData={apiData} sort={sort} />}
    </div>
  );
}
