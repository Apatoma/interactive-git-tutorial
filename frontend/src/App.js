import React, { useState, useEffect } from 'react';
import CommandInput from './components/CommandInput';
import Feedback from './components/Feedback';
import Level from './components/Level';

function App() {
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [levels, setLevels] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/levels')
      .then((response) => response.json())
      .then((data) => setLevels(data));
  }, []);

  const executeCommand = async (command) => {
    const response = await fetch('http://localhost:5000/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command }),
    });
    const result = await response.json();
    setOutput(result.output);
    setError(result.error);
  };

  return (
    <div>
      <h1>Interactive Git Tutorial</h1>
      {levels.length > 0 && (
        <Level
          level={levels[currentLevel]}
          onComplete={() => setCurrentLevel(currentLevel + 1)}
        />
      )}
      <CommandInput onExecute={executeCommand} />
      <Feedback output={output} error={error} />
    </div>
  );
}

export default App;
