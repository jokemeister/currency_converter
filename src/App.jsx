import "./App.css";

import { CurrencyProvider } from "./hoc/CurrencyProvider";

import Router from "./router";

function App() {
  return (
    <div className="App">
      <CurrencyProvider>
        <Router />
      </CurrencyProvider>
    </div>
  );
}

export default App;
