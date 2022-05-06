import React from 'react';
import './Buttons.scss';

export function Buttons({ setSort, apiData }) {
  const languages = apiData.map((repo) => repo.language);
  const uniqueLanguages = new Set(languages);

  return (
    <div className="buttons">
      <h2>Filter By</h2>
      <button onClick={() => setSort('all')}>All</button>
      {[...uniqueLanguages].map((language, index) => {
        return (
          <button key={index} onClick={() => setSort(language)}>
            {language}
          </button>
        );
      })}
    </div>
  );
}
