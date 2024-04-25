import React, { useState } from 'react';

const App = () => {
  let [age, setAge] = useState(10)
  return (
    <div>
      <input type="text" value={age} onChange={e => setAge(e.target.value)} />
      {age}
      <button onClick={() => {
        // a++
        setAge(++age)
      }}>click me</button>
    </div>
  );
};

export default App;