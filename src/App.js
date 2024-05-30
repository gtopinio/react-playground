import './App.css';

const App = () => {
  const name = 'Mark Genesis'
  let isNameVisible = true
  return (
    <div className="App">
      <h1>
        Hello {isNameVisible && name ? name + '!' : 'World!'}
        {
          isNameVisible && name ? 
          <>
            <p>Name exists!</p>
          </>
          :
          <>
            <p>Name does not exist!</p>
          </>
        }
      </h1>
    </div>
  );
}

export default App;
