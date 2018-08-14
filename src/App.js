import React from "react";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="credit-card-title">
          <h1>CREDIT CARD</h1>
        </div>
        <div>
          <img
            src="https://uploads.codesandbox.io/uploads/user/d0bb8d01-630c-4782-b308-b54cce71db59/TIR3-chip-img.png"
            className="chip-img"
            alt="chip"
          />
        </div>
        <div className="credit-card-logo-details">
          <div className="credit-card-details">
            <h2 className="code-card">7253 3256 7895 1245</h2>
            <div className="code-card-special">
              <h2 className="code-card-holder">5422</h2>
              <div className="code-card-year-month">
                <div className="year-month">
                  <h6 className="code-card-holder-year-month">VALID</h6>
                  <h6 className="code-card-holder-year-month y">THRO</h6>
                </div>
                <h2 className="code-card-holder">11/50</h2>
              </div>
            </div>
            <div>
              <h3 className="code-card-holder">CARDHOLDER</h3>
            </div>
          </div>
          <div className="credit-logo">
            <img
              src="https://uploads.codesandbox.io/uploads/user/d0bb8d01-630c-4782-b308-b54cce71db59/isvG-logo.jpg"
              className="logo-img"
              alt="logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
