import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';

function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setError("");
    let isValid = true;
    if (email.trim() === "") {
      setEmailError("Please enter the email");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter the password");
      isValid = false;
    }

    if (!isValid) return;

    const formData = JSON.parse(localStorage.getItem("users")) || [];

    if (formData.length > 0) {
      const user = formData.find(
        (user) =>
          user.email === email.trim() &&
          user.password === password.trim()
      );
      if (user) {
        console.log("User found...");
        localStorage.setItem("loggedInUser", JSON.stringify(user)); 
        navigate('/');
      } else {
        setError("User not found. Please check your credentials.");
      }
    } else {
      setError("No user data found. Please sign up first.");
    }
  };

  return (
    <div className="SignUp-page Login-page">
      <img className='img' src="https://mironcoder-hotash.netlify.app/images/pattern.webp" alt="" />
      <div className='login'>
        <a href="/">
          <img src="https://mironcoder-hotash.netlify.app/images/logo.webp" alt="" />
        </a>
        <h4>Log in to your account</h4>
        <form onSubmit={handleSubmit} className="signup-form login-form">
          <div className='input-sections'>
            <div className='input-forms'>
              <i><AccountCircleIcon /></i>
              <input
                placeholder='Enter Your Email'
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <p className='error-msg'>{emailError}</p>
          </div>
          <div className='input-sections'>
            <div className='input-forms'>
              <i><LockIcon /></i>
              <input
                placeholder='Enter Your Password'
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className='password-icon'><VisibilityIcon onClick={togglePassword} /></i>
            </div>
            <p className='error-msg'>{passwordError}</p>
          </div>
          <p className='error-msg'>{error}</p>
          <button type='submit'>Log in</button>
          <p style={{ textAlign: "left" }}>
            Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
