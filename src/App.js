import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import verifications from './verifications';

const Verification = (props) => <h2>{props.verification.name}</h2>;

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
                  return <Route path={href}><Verification
                      verification={verification}/></Route>;
                })
              }
              <Route path="/"></Route>
            </Switch>

            <table>
              {
                verifications.map(verification => {
                  const {id, name, module, createdAt, modifiedAt} = verification,
                      href = `/verification/${id}`;
                  return <tr>
                    <td><Link to={href}>{name}</Link></td>
                    <td>{module}</td>
                    <td>{createdAt}</td>
                    <td>{modifiedAt}</td>
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
