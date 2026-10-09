import "./Login.css";
function Login({
  email,
  setEmail,
  password,
  setPassword,
  setIsLoggedIn
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} >
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Next</button>
       
      </form>
    </div>
  );
}

export default Login;