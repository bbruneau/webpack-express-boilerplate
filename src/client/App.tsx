import React, { useState } from "react";

export const App: React.FC = () => {
  const [num, setNum] = useState(0);
  return (
    <h1>
      hello world {num}
      <button onClick={() => setNum(prev => prev + 1)}>+</button>
    </h1>
  );
};
