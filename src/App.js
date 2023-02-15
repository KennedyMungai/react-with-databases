import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App()
{
  const fetchMoviesHandler = () => 
  {
    fetch('https://swapi.dev/api/films/')
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
