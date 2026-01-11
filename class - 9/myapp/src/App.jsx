import Page1 from "./components/Page1";
import GlobalContextProvider from "./context/Global";

import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserInfo from "./pages/Quiz/UserInfo";
import Instruction from "./pages/Quiz/Instruction";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Quiz/Result";
import QuizContextProvider from "./context/QuizContext";

function App() {
  return (
    // <GlobalContextProvider>
    //   <h1 className="bg-amber-300">Vijay</h1>
    //   <Page1></Page1>
    // </GlobalContextProvider>
    // <h1>Vijay</h1>

    // -------
    // <BrowserRouter>
    //   <nav>
    //     <Link to="/login">Login</Link>
    //     <span> | </span>
    //     <Link to="/signup">Signup</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/login" element={<Login />}></Route>
    //     <Route path="/signup" element={<SignUp />}></Route>
    //   </Routes>
    // </BrowserRouter>

    // -----

    <QuizContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserInfo />}></Route>
          <Route path="/instruction" element={<Instruction />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>

          {/* <Route path="*" element={<h1>Invalid Page</h1>}></Route> */}
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </QuizContextProvider>
  );
}

export default App;
