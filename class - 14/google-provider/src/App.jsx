import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";

import { auth, provider } from "./config/firebase";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleClick = async () => {
    const { user } = await signInWithPopup(auth, provider);
    setUser(user);
  };

  const handlSignOut = async () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <>
      <h1>Signin with Google Provider using Firebase</h1>

      {user ? (
        <div>
          <h2>Welcome {user.displayName}</h2>
          <img src={user.photoURL} alt={user.displayName} />
          <br></br>
          <button onClick={handlSignOut}>Signout</button>
        </div>
      ) : (
        <button onClick={handleClick}>Signin With Google</button>
      )}
    </>
  );
}

export default App;
