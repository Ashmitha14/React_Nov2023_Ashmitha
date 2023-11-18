import React, { useState, useEffect } from "react";

const FunctionalLifecycleExample = () => {
  // State initialization
  const [count, setCount] = useState(0);

  // Mounting Phase - Equivalent to componentDidMount in class component
  useEffect(() => {
    console.log("Component is mounted!");

    // Cleanup function (equivalent to componentWillUnmount in class component)
    return () => {
      console.log("Component will unmount!");
    };
  }, []); // Empty dependency array means it only runs once after the initial render

  // Updating Phase - Equivalent to componentDidUpdate in class component
  useEffect(() => {
    console.log("Component has been updated!");
    // You can perform additional actions here based on state or prop changes
    // Cleanup function for this update (equivalent to componentWillUnmount in class component)
    return () => {
      console.log("Component will unmount (update cleanup)!");
    };
  }, [count]); // Run whenever 'count' changes

  // Render
  console.log("Rendering...");

  return (
    <div>
      <h1>Functional Component Lifecycle Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default FunctionalLifecycleExample;