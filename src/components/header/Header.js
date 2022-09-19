import React from 'react';
import Nav from './Nav';
import TeamCount from './TeamCount';

export default function Header({ selectedTeam, teamCount }) {
  return (
    <header>
      <Nav />
      <div className="row">
        <div className="col-8 mx-auto">
          <hgroup className="mt-4 mb-3">
            <h1 className="text-center">Team Member Allocation</h1>
            <TeamCount selectedTeam={selectedTeam} teamCount={teamCount} />
          </hgroup>
        </div>
      </div>
    </header>
  );
}
