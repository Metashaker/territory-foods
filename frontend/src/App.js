import { BrowserRouter, Route, Routes } from "react-router-dom";

import MealsPage from "./pages/Meals";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MealsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
