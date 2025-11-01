import React from 'react';
import { Link } from 'react-router-dom';

// This component shows the list of sub-muscles (e.g., Upper, Middle, Lower Traps)
function SubMusclePage({ subMuscles, backLink }) {
  return (
    <div className="Page-content">
      {/* This link should go back to the home page (diagram) */}
      <Link to="/">← Back to Diagram</Link>
      <h2 style={{ marginTop: '20px' }}>Select an Area</h2>
      <div className="list-container">
        {subMuscles.map(muscle => (
          <Link
            key={muscle.id}
            // This link goes forward to the detail page, e.g., "/traps/traps-upper"
            to={`${backLink}/${muscle.id}`} 
            className="list-item-link"
          >
            {muscle.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SubMusclePage;
