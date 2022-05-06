import React from 'react';
import './RepoList.scss';

export function RepoList({ apiData, sort }) {
  return (
    <div className="repo-list">
      <h1>List of Repositories</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Number of Forks</th>
          </tr>
        </thead>
        {/* maps over api data and displays accordingly */}
        <tbody>
          {sort === 'all'
            ? apiData.map((repo, index) => {
                return (
                  <tr key={index}>
                    <td>{repo.name}</td>
                    <td>{repo.description}</td>
                    <td>{repo.language}</td>
                    <td>{repo.forks_count}</td>
                  </tr>
                );
              })
            : apiData
                .filter((repo) => repo.language === sort)
                .map((repo, index) => {
                  return (
                    <tr key={index}>
                      <td>{repo.name}</td>
                      <td>{repo.description}</td>
                      <td>{repo.language}</td>
                      <td>{repo.forks_count}</td>
                    </tr>
                  );
                })}
        </tbody>
      </table>
    </div>
  );
}
