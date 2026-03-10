import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";



export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes>
  );
}
