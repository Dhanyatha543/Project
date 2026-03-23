import React, { useEffect, useState } from 'react';

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter Value: ${count}`;
  }, [count]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>useEffect Demo</h1>
      <p style={{ fontSize: 18, margin: '12px 0' }}>Counter Value: {count}</p>
      <div>
        <button onClick={() => setCount((c) => c + 1)} style={{ marginRight: 8 }}>
          Increase
        </button>
        <button onClick={() => setCount((c) => c - 1)}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default UseEffectDemo;
