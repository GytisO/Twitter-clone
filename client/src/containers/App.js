import React, { Component } from 'react'; 
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizatonToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore()

if (localStorage.jwtToken) {
	setAuthorizatonToken(localStorage.jwtToken);
	try {
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
	} catch(e) {
		store.dispatch(setCurrentUser({}));
	}
}

const App = () => (
    <Provider store ={store}>
      <Router>
          <div>
            <Navbar />
            <Main />
          </div>
      </Router>
    </Provider>
)




export default App;
