import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import Footer from "./Components/Footer";

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginForm}></Route>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/about" component={About}></ProtectedRoute>
        <ProtectedRoute component={NotFound} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </>
);

export default App;
