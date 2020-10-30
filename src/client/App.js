import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './pages/home';
import Users from './pages/users';
import Nav from './components/nav';
import Woodworking from './pages/woodworking';
import './app.css';
import Pepper from './pages/pepper';
import panorama from '../resources/panorama2.png';

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
        <div className="titleContainer">
          <img className="bannerImage" src={panorama} alt="titlePageImage" />
          <div className="titleBanner">{pageName}</div>
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
