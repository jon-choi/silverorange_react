import React from 'react';

export function RepoList({ apiData }) {
  return (
    <div>
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
        <tbody>
          {apiData.map((repo, index) => {
            return (
              <tr key={index}>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
                <td>{repo.language}</td>
                <td>{repo.number_of_forks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
