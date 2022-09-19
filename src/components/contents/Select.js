import React from 'react';

export default function Select({ selectedTeam, handleTeamChange }) {
  return (
    <div className="row">
      <div className="col-8 mx-auto">
        <select
          className="form-select"
          aria-label="Select Team"
          value={selectedTeam}
          onChange={handleTeamChange}
        >
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
          <option value="Team C">Team C</option>
          <option value="Team D">Team D</option>
        </select>
      </div>
    </div>
  );
}
