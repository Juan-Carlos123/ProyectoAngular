import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
            {/* Authentication */}
            <Route path='/auth' component={AuthRoutes} />
            
            {/* Dashboard */}
            <Route path='/dashboard' component={DashboardRoutes} />
            
            {/* Redirect Routes */}
            <Route path='/redirect' component={RedirectRoutes} />

            {/* Landing Routes */}
            <Route path='/service' component={LandingRoutes} />
                          
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
