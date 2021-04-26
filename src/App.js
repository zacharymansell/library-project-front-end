import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/api/books');
  }, []);
  return (
    <>
      <h1 className="App">SDI Library</h1>
      <ul />
    </>
  );
}

export default App;
