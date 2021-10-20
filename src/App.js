import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { getUserWithStoredToken } from "./store/user/actions";

import Homepage from "./pages/Homepage";
import MessageBox from "./components/MessageBox";
import Navigation from "./components/navigation/index";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import Footer from "./components/footer";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/orders" component={OrderPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
