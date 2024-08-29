import React from 'react';

function Level({ level, onComplete }) {
  return (
    <div>
      <h2>Level {level.level}</h2>
      <p>{level.description}</p>
      <button onClick={onComplete}>Complete Level</button>
    </div>
  );
}

export default Level;
