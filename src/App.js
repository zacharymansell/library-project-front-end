/* eslint-disable no-console */
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/books')
      .then((res) => res.json())
      .then((res) => setBooks(res))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <h1 className="App">SDI Library</h1>
      <ul>
        {
          books.map((b) => <li>{b.title}</li>)
        }
      </ul>
    </>
  );
}

export default App;
