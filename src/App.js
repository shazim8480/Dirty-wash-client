import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Admin from "./Components/Admin/Admin/Admin";
import AddService from "./Components/Admin/AddService/AddService";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/Admin/ManageServices/ManageServices";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login";
import PrivateRoute from "../src/Components/PrivateRoute/PrivateRoute";
import CheckOut from "./Components/User/CheckOut/CheckOut";
import BookingList from "./Components/User/BookingList/BookingList";
import Review from "./Components/User/Review/Review";

export const UserContext = createContext();
export const ActionContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const selections = [{ name: "Pending" }, { name: "Confirmed" }];

  const [actions, setActions] = useState(selections[0]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ActionContext.Provider value={[actions, setActions, selections]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            {/* admin routes start */}
            <PrivateRoute path="/admin/ordersList">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/admin/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/admin/manageServices">
              <ManageServices />
            </PrivateRoute>
            <PrivateRoute path="/admin/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            {/* admin routes end */}

            {/* user routes start */}
            <PrivateRoute path="/checkOut/servicePayment/:id">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/checkOut/bookingList">
              <BookingList />
            </PrivateRoute>
            <PrivateRoute path="/checkOut/review">
              <Review />
            </PrivateRoute>
            {/* user routes end  */}

            {/* login routes */}
            <Route path="/login">
              <Login />
            </Route>
            {/* login routes */}
          </Switch>
        </Router>
      </ActionContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
