import { Routes, Route } from "react-router-dom";

//layouts
import LandingPage from "./layouts/LandingPage";

//pages
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage heading ="Experience Cappadocia">
            <Home />
          </LandingPage>
        }
      ></Route>
    </Routes>
  );
}

export default App;
