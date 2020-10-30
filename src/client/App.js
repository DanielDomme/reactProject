import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './pages/home';
import Users from './pages/users';
import Nav from './components/nav';
import Woodworking from './pages/woodworking';
import './app.css';
import Pepper from './pages/pepper';

const Error = () => <h1 className="text-danger">!Error 404! Everything Went Wrong!</h1>;

export default class App extends React.Component {
  state = {
    pageName: 'Home'
  };

  updatePageTitle = (page) => {
    this.setState({ pageName: page });
  }

  render() {
    const { pageName } = this.state;
    return (
      <div>
        <div style={{
          backgroundColor: '#17a2b8',
          padding: '40px',
        }}
        >
          <span className="titleBanner">{pageName}</span>

        </div>
        <Nav />
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users updatePageTitle={this.updatePageTitle} />
            </Route>
            <Route path={['/pepper', '/peppers-corner']}>
              <Pepper updatePageTitle={this.updatePageTitle} />
            </Route>
            <Route path="/woodworking">
              <Woodworking updatePageTitle={this.updatePageTitle} />
            </Route>
            <Route exact path={['/', '/home']}>
              <Home />
            </Route>
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function About() {
  return <h2>About</h2>;
}
