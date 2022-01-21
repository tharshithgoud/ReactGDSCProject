import "./App.css";
import Navbar from "./Components/Other/Navbar/Navbar.component";
import About from "./Components/About/About.component";
import Home from "./Components/Home/Home.component";
import Projects from "./Components/Projects/Projects.component"
import TimeLine from "./Components/Timeline/Timeline.component"
import ContactUs from "./Components/ContactUs/ContactUs.component"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/timeline" exact component={TimeLine} />
          <Route path="/contact" exact component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
