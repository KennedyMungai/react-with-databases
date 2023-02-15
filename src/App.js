import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App()
{
  const fetchMoviesHandler = () => 
  {
    fetch('https://swapi.dev/api/films/').then((response) =>
    {
      return response.json()
    }).then((data) =>
    {
      return data.results
    })
  }

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList />
      </section>
    </React.Fragment>
  );
}

export default App;
