import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';

function RouteApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/country/:id" component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouteApp;
