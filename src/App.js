import "./App.css";
import Expression from "./pages/ExpressionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/exp/:symbols" element={<Expression />} />

        <Route path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
