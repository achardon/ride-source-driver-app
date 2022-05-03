import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>RIDE SOURCE APP!</h1>
      <h1>Page Count: {count}</h1>
      <p>Come here for all your driver needs!</p>
    </div>
  );
}

export default App;
