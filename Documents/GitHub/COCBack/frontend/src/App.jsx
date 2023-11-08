import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])  

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []); useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setJokes(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      })
      .catch((err) => {
        console.error('Error fetching jokes:', err);
      });
  });

  return (
    <>
      <h1>Jokes with Himanshu</h1>
      <p>JOKE : {jokes.length}</p>

      {
        
  Array.isArray(jokes) &&jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App;
