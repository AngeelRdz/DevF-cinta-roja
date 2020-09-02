import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GifContainer from "./views/GifContainer";
import ColorsContainer from "./views/Colors";
import AsteroidsContainer from "./views/AsteroidsContainer";
import CountContainer from "./views/CountContainer";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Colores</Link>
            </li>
            <li>
              <Link to="/gifs">Gifs</Link>
            </li>
            <li>
              <Link to="/count">Contador</Link>
            </li>
            <li>
              <Link to="/asteroids">Asteroides</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <ColorsContainer />
          </Route>
          <Route path="/gifs">
            <GifContainer />
          </Route>
          <Route path="/count">
            <CountContainer />
          </Route>
          <Route path="/asteroids">
            <AsteroidsContainer />
          </Route>
          <Route>
            <h1>404 Not found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
