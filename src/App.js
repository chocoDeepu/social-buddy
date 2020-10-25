import React from 'react';
import { 
  BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/Nomatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;