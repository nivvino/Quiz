import React, { useContext } from 'react'
import { AppContext } from '../context'

export default function UserTable() {
    const {scores}=useContext(AppContext)
    const sortedScores = [...scores].sort((a, b) => b.score - a.score);
  return (
    <div>
      <div>
        <h1>User Scores</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedScores.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
