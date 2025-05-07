import { Routes, Route } from "react-router-dom";
import SignUp from "./SinUp";
import Total from "./TotalContent";
import LogIn from "./LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Total />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn/>}/>
      </Routes>
    </>
  );
}

export default App;
