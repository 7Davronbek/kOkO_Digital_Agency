import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer2 from "./components/Footer2";
import ScrollToTop from "./components/ScrollToTop";
import ContactsPage from "./pages/ContactsPage";
import AboutUs from "./pages/AboutUs";
// import AllPortfolio from "./pages/AllPortfolio";
import WebDevelopment from "./pages/WebDevelopment";
import InternetMarketing from "./pages/InternetMarketing";
import Design from "./pages/Design";
import Moushen from "./pages/Moushen";
import Phone from "./components/Phone";
import Blog from "./pages/Blog";
import MyModal from "./components/MyModal";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Cursor from "./components/cursor/Cursor";
import CustomCursor from "./components/cursor/CustomCursor";
import SocialFixed from "./components/SocialFixed";
import Up from "./components/Up";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <>
    <Provider store={store}>
      <HashRouter>
      <Cursor />

      <CustomCursor />

        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/about-us" exact component={AboutUs} />
          {/* <Route path="/projects" exact component={AllPortfolio} /> */}
          <Route path="/contacts" exact component={ContactsPage} />
          <Route path="/web-development" exact component={WebDevelopment} />
          <Route
            path="/internet-marketing"
            exact
            component={InternetMarketing}
          />
          <Route path="/design" exact component={Design} />
          <Route path="/motion" exact component={Moushen} />
          {/* <Route path='/services' exact component={Services} /> */}
        </Switch>

        <Phone />
        <Footer2 />
        <MyModal />
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          theme="dark"
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: "999999999" }}
        />

        <SocialFixed />
        <Up />

      </HashRouter>
    </Provider>
  </>,
  document.getElementById("KOKO")
);
