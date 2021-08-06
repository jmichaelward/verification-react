import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { route as HomeRoute } from './routes/home';
import { route as VerificationRoute } from './routes/verification';
import verifications from './data/verifications';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Link to="/">Home</Link>
            <Switch>
              {
                verifications.map(verification => {
                  const href = `/verification/${verification.id}`;
                  return <Route path={href}><VerificationRoute
                      verification={verification}/></Route>;
                })
              }
              <Route path="/"><HomeRoute /></Route>
            </Switch>

            <table>
              {
                verifications.map(verification => {
                  const {id, name, module, createdAt, modifiedAt} = verification,
                      href = `/verification/${id}`;
                  return <tr>
                    <td><Link to={href}>{name}</Link></td>
                  </tr>;
                })
              }
            </table>
          </Router>
        </header>
      </div>
  );
}

export default App;
