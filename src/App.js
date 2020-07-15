import React from "react";
import { Loader } from "./components/loader/Loader";

// Delay manuale
const MainLayout = React.lazy(() => {
  return Promise.all([
    import("./layout/main/MainLayout"),
    new Promise((resolve) => setTimeout(resolve, 2500)),
  ]).then(([moduleExports]) => moduleExports);
});

function App() {
  return (
    <div className="h-full">
      <React.Suspense fallback={<Loader />}>
        <MainLayout />
      </React.Suspense>
    </div>
  );
}

export default App;
