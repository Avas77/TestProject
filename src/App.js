import "./App.css";
import Home from "./components/Home/Home";
import { Route, useLocation, Switch } from "react-router-dom";
import About from "./components/About/About";
import { useTransition, animated } from "react-spring";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-100%,0)" },
  });

  const animation = transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </animated.div>
  ));

  return <div className="App">{animation}</div>;
}

export default App;