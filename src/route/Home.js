import React from 'react';
import Select from '../components/contents/Select';

import Male from '../images/maleProfile.jpg';
import Female from '../images/femaleProfile.jpg';

export default function Main({
  employees,
  updateEmployee,
  selectedTeam,
  setTeam,
}) {
  function handleTeamChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeClick(event) {
    const updatedEmployeeData = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.parentElement.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: '' }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    updateEmployee(updatedEmployeeData);
  }

  return (
    <>
      <Select selectedTeam={selectedTeam} handleTeamChange={handleTeamChange} />
      <main className="mt-3 mb-4">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row">
              {employees.map((employee) => (
                <div
                  id={employee.id}
                  key={employee.id}
                  className="col-md-4 mt-3 mb-3"
                >
                  <div
                    className={
                      employee.teamName === selectedTeam
                        ? 'card standout'
                        : 'card'
                    }
                    onClick={handleEmployeeClick}
                  >
                    <img
                      src={employee.gender === 'male' ? Male : Female}
                      className="card-img-top"
                      alt="Male Profile"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{employee.fullName}</h5>
                      <p className="card-text">{employee.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
