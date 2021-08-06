import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {route as HomeRoute} from './routes/home';
import {route as VerificationRoute} from './routes/verification';
import {route as NotFoundRoute} from './routes/404';
import verifications from './data/verifications';

export const AppRouter = () => {
  return (
      <Router>
        <Link to="/">Home</Link>

        <Switch>
          <Route path="/" exact>
            <HomeRoute/>
          </Route>

          {
            verifications.map(verification => {
              const href = `/verification/${verification.id}`;
              return <Route path={href}>
                <VerificationRoute verification={verification}/>
              </Route>;
            })
          }

          <Route path="/*">
            <NotFoundRoute/>
          </Route>
        </Switch>
      </Router>
  );
};
