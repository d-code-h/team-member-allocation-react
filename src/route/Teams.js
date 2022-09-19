import React, { useState } from 'react';

export default function Teams({ employees, selectedTeam }) {
  const organizedEmployees = [];
  const teams = ['Team A', 'Team B', 'Team C', 'Team D'];
  for (let i = 0; i < teams.length; i++) {
    const team = employees.filter((employee) => employee.teamName === teams[i]);

    organizedEmployees.push({
      team: teams[i],
      members: team,
      collapsed: selectedTeam === teams[i] ? 'False' : 'True',
    });
  }
  const [employeesByTeam, updatedEmployeees] = useState(organizedEmployees);

  function handleByTeamClick(event) {
    const updateByTeam = employeesByTeam.map((employee) =>
      employee.team === event.currentTarget.id
        ? employee.collapsed === 'True'
          ? { ...employee, collapsed: 'False' }
          : { ...employee, collapsed: 'True' }
        : employee
    );

    updatedEmployeees(updateByTeam);
  }
  return (
    <main>
      <div className="row my-4">
        <div className="col-8 mx-auto">
          {employeesByTeam.map((team) => {
            return (
              <div
                id={team.team}
                key={team.team}
                className="card text-center"
                onClick={handleByTeamClick}
              >
                <div className="card-header text-secondary bg-light">
                  <h4>Team Name: {team.team}</h4>
                </div>
                <ul
                  className={
                    team.collapsed === 'True'
                      ? 'list-group list-group-flush collapse'
                      : 'list-group list-group-flush '
                  }
                >
                  <li className="list-group-item">
                    {team.members.map((member) => {
                      return (
                        <div key={member.id}>
                          <h5>Full Name: {member.fullName}</h5>
                          <p>Designation: {member.designation}</p>
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
