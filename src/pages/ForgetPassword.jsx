import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const auth = getAuth();

  useEffect(() => {
    document.title = "Reset Password - ToyTopia | Forgot Your Password";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        
        if (errorCode === "auth/user-not-found") {
          toast.error("No account found with this email");
        } else if (errorCode === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else {
          toast.error("Failed to send reset email");
        }
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl p-8">
        <h2 className="font-bold text-3xl text-center mb-2">Forgot Password?</h2>
        <p className="text-center text-base-content/70 mb-6">
          Enter your email to receive a password reset link
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Reset Password
          </button>

          <div className="text-center mt-6">
            <Link to="/auth/login" className="link link-hover text-primary">
              ← Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;