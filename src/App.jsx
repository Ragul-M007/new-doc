import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    alert(`Button clicked ${clickCount + 1} times!`);
  };

  return (
    <div className="app-container">
      <h1 className="title">Welcome to My React App 🚀</h1>
      <p className="intro">
        This is a simple React application designed to help you get started with React development.
      </p>

      <div className="features">
        <h2>Features to Explore:</h2>
        <ul>
          <li>Interactive button clicks</li>
          <li>Dynamic content updates</li>
          <li>React component structure</li>
        </ul>
      </div>

      <button className="action-button" onClick={handleClick}>
        Click Me
      </button>
      {clickCount > 0 && <p>You clicked the button {clickCount} times!</p>}

      <footer className="footer">
        Enjoy building your app and modifying the code!
      </footer>
    </div>
  );
};

export default App;
