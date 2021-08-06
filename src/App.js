import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import verifications from './verifications';

const Verification = (props) => <h2>{props.name}</h2>;

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <nav>
                <ul>
                  {
                    verifications.map(verification => {
                      const {id, name} = verification,
                          href = `/verifications/${id}`;
                      return <li><Link to={href}>{name}</Link></li>;
                    })
                  }
                </ul>
              </nav>
            </div>

            <Switch>
              {
                verifications.map(verification => {
                  const href = `/verifications/${verification.id}`;
                  return <Route path={href}><Verification name={verification.name}/></Route>;
                })
              }
            </Switch>
          </Router>
        </header>
      </div>
  );
}

export default App;
