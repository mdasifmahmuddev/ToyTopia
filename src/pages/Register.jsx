import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle, setLoading } = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register - ToyTopia | Create Your Account";
  }, []);

  const validatePassword = (password) => {
    const errors = [];
    
    if (password.length < 6) {
      errors.push("Password must be at least 6 characters long");
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }
    
    return errors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors({});
    
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name.length < 5) {
      setErrors({ name: "Name must be at least 5 characters long" });
      toast.error("Name must be at least 5 characters long");
      return;
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setErrors({ password: passwordErrors.join(". ") });
      toast.error(passwordErrors[0]);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((error) => {
            
            setUser(user);
            toast.success("Registration successful!");
            navigate("/");
          });
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        
        if (errorCode === "auth/email-already-in-use") {
          setErrors({ email: "This email is already registered" });
          toast.error("This email is already registered");
        } else if (errorCode === "auth/invalid-email") {
          setErrors({ email: "Invalid email address" });
          toast.error("Invalid email address");
        } else if (errorCode === "auth/weak-password") {
          setErrors({ password: "Password is too weak" });
          toast.error("Password is too weak");
        } else {
          toast.error("Registration failed. Please try again");
        }
      });
  };

  const handleGoogleLogin = () => {
    setErrors({});
    signInWithGoogle()
      .then((result) => {
        toast.success("Registration successful with Google!");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Google registration failed. Please try again");
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {errors.name && <p className="text-xs text-error">{errors.name}</p>}

            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {errors.email && <p className="text-xs text-error">{errors.email}</p>}

            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input w-full pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-base-content"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-error">{errors.password}</p>}
            
            <div className="text-xs text-base-content/70 mt-2">
              <p>Password must contain:</p>
              <ul className="list-disc list-inside">
                <li>At least 6 characters</li>
                <li>One uppercase letter</li>
                <li>One lowercase letter</li>
              </ul>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-secondary btn-outline w-full"
            >
              <FcGoogle size={24} /> Register with Google
            </button>

            <p className="font-semibold text-center pt-5">
              Already Have An Account?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;