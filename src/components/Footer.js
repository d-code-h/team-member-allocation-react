import React from 'react';

export default function Footer() {
  return (
    <div className="row">
      <div className="col-8 mx-auto text-center">
        <footer>
          <h4>Team Member Allocation App - {new Date().getFullYear()}</h4>
        </footer>
      </div>
    </div>
  );
}
