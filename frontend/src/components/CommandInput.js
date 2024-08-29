import React, { useState } from 'react';

function CommandInput({ onExecute }) {
  const [command, setCommand] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onExecute(command);
    setCommand('');
  };

  return (
    <div>
      <h2>Enter Git Command</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Git command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <button type="submit">Execute</button>
      </form>
    </div>
  );
}

export default CommandInput;
