import React from 'react';
import { useParams, Link } from 'react-router-dom';

// 1. Make sure the function name is 'InjuryPossibilityPage'
// 2. Make sure the prop is '{ allBodyParts, backLink }'
function InjuryPossibilityPage({ allBodyParts, backLink }) {
  
  // Get the sub-muscle ID from the URL (e.g., "traps-upper")
  const { id } = useParams();

  // 3. This is the new logic that fixes the error
  // It searches through ALL body parts to find the matching sub-muscle
  let muscle;
  if (allBodyParts && Array.isArray(allBodyParts)) {
    for (const part of allBodyParts) {
      // Check if this part has subMuscles and if the ID is in there
      if (part.subMuscles && Array.isArray(part.subMuscles)) {
        const found = part.subMuscles.find(m => m.id === id);
        if (found) {
          muscle = found;
          break;
        }
      }
    }
  }

  // If no muscle was found (bad URL or data error)
  if (!muscle) {
    return (
      <div className="Page-content">
        <h2>Area not found!</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  // If we found it, render the details
  return (
    <div className="Page-content">
      {/* Use the 'backLink' prop to go back to the correct page */}
      <Link to={backLink}>← Back to Muscle Areas</Link>
      
      <h2 style={{ marginTop: '20px' }}>{muscle.name}</h2>
      <p>Here are common injuries associated with this area:</p>
      
      {muscle.possibleInjuries.map(injury => (
        <div className="injury-card" key={injury.name}>
          <h3>{injury.name}</h3>
          <p>{injury.description}</p>
          <strong>Common Causes:</strong>
          <ul>
            {injury.commonCauses.map(cause => (
              <li key={cause}>{cause}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// 4. Make sure the export matches the function name
export default InjuryPossibilityPage;
