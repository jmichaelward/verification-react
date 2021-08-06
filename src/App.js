import './App.css';
import {AppRouter} from './router';

function App(props) {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Awesome Verification!</h1>
        </header>

        <AppRouter />
      </div>
  );
}

export default App;
