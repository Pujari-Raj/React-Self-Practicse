import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Avoid this: directly modifying state
    count++;
     // It throw error(Uncaught TypeError: Assignment to constant variable.) , This won't trigger a re-render or update the component

    // Correct: Use the state updater function provided by useState
    setCount(count + 1); // This triggers a re-render and updates the component
  };
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </>
  );
};

export default Test;
