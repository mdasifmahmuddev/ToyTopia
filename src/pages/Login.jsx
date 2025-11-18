import React, { useContext, useState, useEffect } from "react";

import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle, setLoading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - ToyTopia | Sign in to Your Account";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login successful!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setLoading(false);
        
        if (errorCode === "auth/invalid-credential") {
          setError("Invalid email or password");
          toast.error("Invalid email or password");
        } else if (errorCode === "auth/user-not-found") {
          setError("No user found with this email");
          toast.error("No user found with this email");
        } else if (errorCode === "auth/wrong-password") {
          setError("Incorrect password");
          toast.error("Incorrect password");
        } else if (errorCode === "auth/too-many-requests") {
          setError("Too many failed attempts. Please try again later");
          toast.error("Too many failed attempts. Please try again later");
        } else {
          setError(errorCode);
          toast.error("Login failed. Please try again");
        }
      });
  };

  const handleGoogleLogin = () => {
    setError("");
    signInWithGoogle()
      .then((result) => {
        toast.success("Login successful with Google!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        setError(errorCode);
        toast.error("Google login failed. Please try again");
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <Link to="/auth/forgot-password" className="link link-hover text-sm text-primary">
                Forgot password?
              </Link>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-secondary btn-outline w-full"
            >
              <FcGoogle size={24} /> Login with Google
            </button>

            <p className="font-semibold text-center pt-5">
              Don't Have An Account?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;