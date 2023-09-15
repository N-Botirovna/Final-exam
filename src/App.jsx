import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";

function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || '');
console.log(token);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Login data={{token, setToken}}/>}/>
      </Routes>
    </>
  );
}

export default App;
