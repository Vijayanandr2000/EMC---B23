import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Signup = () => {
  const [user, seUser] = useState({});
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    seUser({
      ...user,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch("http://localhost:8000/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const apiResp = await resp.json();

    console.log("apiResp", apiResp);

    setMsg(apiResp.message);
  };

  return (
    <>
      {msg ? (
        <h1>{msg}</h1>
      ) : (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            required
            placeholder="Enter youe email...!"
            id="email"
            onChange={handleChange}
          />
          <input
            type="text"
            required
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
          <button type="submit">SignUp</button>
        </form>
      )}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link>
        <span
          style={{
            margin: "0 20px",
          }}
        >
          {" "}
          |{" "}
        </span>
        <Link to="/signup">SignUp</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Login</h1>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
