import './App.css';
import { useEffect } from 'react';
import { searchMovies } from './services/omdbService';

function App() {

  useEffect(() => {
    const fetchMovies = async () => {
      await searchMovies('batman');
    };

    fetchMovies();
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
