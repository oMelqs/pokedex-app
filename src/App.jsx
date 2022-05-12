import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { configRoutes } from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
        {configRoutes.map((route, key) => {
          return <Route key={key} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
