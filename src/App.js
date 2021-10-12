import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { getUserWithStoredToken } from "./store/user/actions";

import Homepage from "./pages/Homepage";
import Navigation from "./components/navigation/index";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import GiftCardPage from "./pages/GiftCardPage";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/gift" component={GiftCardPage} />
      </Switch>
    </div>
  );
}

export default App;
