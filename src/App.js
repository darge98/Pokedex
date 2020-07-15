import React from "react";
import "./App.css";
import { Loader } from "./components/loader/Loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Delay manuale
const MainLayout = React.lazy(() => {
  return Promise.all([
    import("./layout/main/MainLayout"),
    new Promise((resolve) => setTimeout(resolve, 2500)),
  ]).then(([moduleExports]) => moduleExports);
});

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/">
            <MainLayout />
          </Route>
        </Switch>
      </React.Suspense>
    </div>
  );
}

export default App;
