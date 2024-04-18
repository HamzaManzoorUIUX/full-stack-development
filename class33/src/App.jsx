import React from 'react';

const App = () => {
  const QuardEq = (a, b, c) => {
    return [(-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a, (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a]
  }
  console.log('QuardEq', QuardEq(2, 4, 2));
  return (
    <div>
      <div>
        Plus value {QuardEq(2, 4, 2)[0]}
      </div>
      <div>
        Minus value {QuardEq(2, 4, 2)[1]}
  </div>
    </div>
  );
};

export default App;