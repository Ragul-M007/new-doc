import React, { useState } from 'react';

const Home = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => setClickCount(prev => prev + 1);

  return (
    <div>
      <h1>Welcome to My React App 🚀</h1>
      <p>This is the home page of your React application.</p>

      <button onClick={handleClick}>Click Me</button>
      {clickCount > 0 && <p>You clicked the button {clickCount} times!</p>}
    </div>
  );
};

export default Home;
