import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./components/shared/Home";
import Navbar from "./components/shared/Navbar";
import NoMatch from "./components/shared/NoMatch";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import FetchUser from "./components/auth/FetchUser";
import Tacos from "./components/tacos/Tacos";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/tacos" component={Tacos} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
