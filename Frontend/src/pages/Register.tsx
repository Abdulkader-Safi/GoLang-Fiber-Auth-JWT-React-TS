import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IPorp {}

type User = {
  name: string;
  email: string;
  password: string;
};

// eslint-disable-next-line no-empty-pattern
const Register = ({}: IPorp) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const handelRegister = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3030/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      return navigate("/login");
    } else {
      alert("Something went wrong, please try again later");
    }
  };

  return (
    <form onSubmit={handelRegister}>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>

      <input
        type="text"
        className="form-control my-2 rounded"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />

      <input
        type="email"
        className="form-control my-2 rounded"
        placeholder="Email Address"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />

      <input
        type="password"
        className="form-control my-2 rounded"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Register;
