import "./App.css";
import Home from "./components/Home/Home";
import { Route, useLocation, Switch } from "react-router-dom";
import About from "./components/About/About";
import { useTransition, animated } from "react-spring";
import Link1 from "./components/Link1/Link1";
import Link2 from "./components/Link2/Link2";
import Link3 from "./components/Link3/Link3";
import Link4 from "./components/Link4/Link4";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
  });

  const animation = transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/link1" component={Link1} />
        <Route path="/link2" component={Link2} />
        <Route path="/link3" component={Link3} />
        <Route path="/link4" component={Link4} />
      </Switch>
    </animated.div>
  ));

  return <div className="App">{animation}</div>;
}

export default App;
