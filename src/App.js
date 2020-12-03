import { Route, Switch } from "react-router-dom";
import "./App.css";
import ContactForm from "./ContactForm";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Homepage from "./Homepage";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/feature1" component={Feature1} />
        <Route exact path="/feature2" component={Feature2} />
        <Route exact path="/feature3" component={Feature3} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/contact" component={ContactForm} />
      </Switch>
    </>
  );
}

export default App;
