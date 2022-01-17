import "./App.css";
import Expression from "./component/Expression";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";

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
