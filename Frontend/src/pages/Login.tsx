interface IPorp {}

// eslint-disable-next-line no-empty-pattern
const Login = ({}: IPorp) => {
  return (
    <form>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <input
        type="email"
        className="form-control my-2 rounded"
        placeholder="Email Address"
        required
      />

      <input
        type="password"
        className="form-control my-2 rounded"
        placeholder="Password"
        required
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
