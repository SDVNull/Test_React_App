import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const App = () => {
  return (
    <React.Fragment>
      <Header />
			<Main />
      <Footer />
    </React.Fragment>
  );
};

export default App;
