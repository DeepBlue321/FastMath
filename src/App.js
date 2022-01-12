import "./App.css";
import Expression from "./component/Expression";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";

function App() {
  return (
        <BrowserRouter>

      <Routes>
     
        <Route path="/sub" element={<Expression symbol={"-"} />} />
        <Route path="/add" element={<Expression symbol={"+"} />} />
        <Route path="/multiply" element={<Expression symbol={"*"} />} />
        <Route path="/" element={<Menu />} />
      </Routes>
      </BrowserRouter>

   
  );
}

export default App;
