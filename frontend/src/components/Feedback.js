import React from 'react';

function Feedback({ output, error }) {
  return (
    <div>
      {output && (
        <div className="output">
          <strong>Output:</strong>
          <pre>{output}</pre>
        </div>
      )}
      {error && (
        <div className="error">
          <strong>Error:</strong>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
}

export default Feedback;
