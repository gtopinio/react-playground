import './App.css';

const App = () => {
  const name = 'Mark Genesis'
  let isNameVisible = true
  return (
    <div className="App">
      <h1>
        Hello {isNameVisible && name ? name + '!' : 'World!'}
      </h1>
    </div>
  );
}

export default App;
