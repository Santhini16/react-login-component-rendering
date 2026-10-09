import { useState } from "react";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Home email={email} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
}

export default App;