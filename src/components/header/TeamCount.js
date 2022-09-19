import React from 'react';

export default function TeamCount({ selectedTeam, teamCount }) {
  return (
    <h5 className="text-center">
      {selectedTeam} has {teamCount}{' '}
      {teamCount === 0 || teamCount === 1 ? 'member' : 'members'}
    </h5>
  );
}
