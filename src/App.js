import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './route/Home';
import Teams from './route/Teams';
import Footer from './components/Footer';

function App() {
  const [selectedTeam, setTeam] = useState(
    localStorage.getItem('selectedTeam') || 'Team B'
  );

  const [employees, updateEmployee] = useState(
    JSON.parse(localStorage.getItem('employeesList')) || [
      {
        id: 1,
        fullName: 'Bob Jones',
        designation: 'JavaScript Developer',
        gender: 'male',
        teamName: 'Team A',
      },
      {
        id: 2,
        fullName: 'Jill Bailey',
        designation: 'Node Developer',
        gender: 'female',
        teamName: 'Team A',
      },
      {
        id: 3,
        fullName: 'Gail Shepherd',
        designation: 'Java Developer',
        gender: 'female',
        teamName: 'Team A',
      },
      {
        id: 4,
        fullName: 'Sam Reynolds',
        designation: 'React Developer',
        gender: 'male',
        teamName: 'Team B',
      },
      {
        id: 5,
        fullName: 'David Henry',
        designation: 'DotNet Developer',
        gender: 'male',
        teamName: 'Team B',
      },
      {
        id: 6,
        fullName: 'Sarah Blake',
        designation: 'SQL Server DBA',
        gender: 'female',
        teamName: 'Team B',
      },
      {
        id: 7,
        fullName: 'James Bennet',
        designation: 'Angular Developer',
        gender: 'male',
        teamName: 'Team C',
      },
      {
        id: 8,
        fullName: 'Jessica Faye',
        designation: 'API Developer',
        gender: 'female',
        teamName: 'Team C',
      },
      {
        id: 9,
        fullName: 'Lita Stone',
        designation: 'C++ Developer',
        gender: 'female',
        teamName: 'Team C',
      },
      {
        id: 10,
        fullName: 'Daniel Young',
        designation: 'Python Developer',
        gender: 'male',
        teamName: 'Team D',
      },
      {
        id: 11,
        fullName: 'Adrian Jacobs',
        designation: 'Vue Developer',
        gender: 'male',
        teamName: 'Team D',
      },
      {
        id: 12,
        fullName: 'Devin Monroe',
        designation: 'Graphic Designer',
        gender: 'male',
        teamName: 'Team D',
      },
    ]
  );

  // USE EFFECTS
  // SelectedTeam

  useEffect(() => {
    localStorage.setItem('selectedTeam', selectedTeam);
  }, [selectedTeam]);

  // Employees
  useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees));
  }, [employees]);

  return (
    <Router>
      <div className="container">
        <Header
          selectedTeam={selectedTeam}
          teamCount={
            employees.filter((employee) => employee.teamName === selectedTeam)
              .length
          }
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                employees={employees}
                updateEmployee={updateEmployee}
                selectedTeam={selectedTeam}
                setTeam={setTeam}
              />
            }
          ></Route>
          <Route
            path="/teams"
            element={
              <Teams employees={employees} selectedTeam={selectedTeam} />
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
