import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App()
{

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={ } />
      </section>
    </React.Fragment>
  );
}

export default App;
