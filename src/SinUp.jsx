
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VisibilityIcon from '@mui/icons-material/Visibility';


function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const initialCriteria = {
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false
  };
  const [passwordCriteria, setPasswordCriteria] = useState(initialCriteria);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

   const togglePassword = () => {
      setShowPassword((prev) => !prev);
    };
  

  const formats = {
    name: /^[a-zA-Z\s]{5,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  };

  const ValidateFrom = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!formats.name.test(formData.name)) {
      newErrors.name = "Name must be at least 5 letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!formats.email.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (
      !passwordCriteria.length ||
      !passwordCriteria.uppercase ||
      !passwordCriteria.lowercase ||
      !passwordCriteria.number ||
      !passwordCriteria.specialChar
    ) {
      newErrors.password = "Password does not meet all the criteria.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      setPasswordCriteria({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        specialChar: /[^A-Za-z0-9]/.test(value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ValidateFrom()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      alert("SignUp Successful!");
      navigate('/logIn');
    }
  };

  return (
    <div onSubmit={handleSubmit} className="SignUp-page">
      <div className="signup-left">
        <img src="https://mironcoder-hotash.netlify.app/images/pattern.webp" alt="" />
        <div className="left-banner">
          <h1>Best UI/UX Fashion Ecommerce Dashboard & Admin Panel</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem earum quasi natus libero necessitatibus.</p>
          <button onClick={() => navigate('/')}>
            <i><HomeIcon /></i>
            <span>Go to Home</span>
          </button>
        </div>
      </div>

      <form className="signup-form">
        <a href="/">
          <img src="https://mironcoder-hotash.netlify.app/images/logo.webp" alt="" />
        </a>
        <h4>Register a new account</h4>

        <div className='input-sections'>
          <div className='input-forms'>
            <i><AccountCircleIcon /></i>
            <input placeholder='Enter Your Name' type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <p className='error-msg'>{errors.name}</p>
        </div>

        <div className='input-sections'>
          <div className='input-forms'>
            <i><EmailIcon/></i>
            <input placeholder='Enter Your Email' type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <p className='error-msg'>{errors.email}</p>
        </div>

        <div className='input-sections'>
          <div className='input-forms'>
            <i><LockIcon /></i>
            <input placeholder='Enter Your Password' type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)} />
            <i className='password-icon'><VisibilityIcon onClick={togglePassword} /></i>
          </div>
          <p className='error-msg'>{errors.password}</p>
          {isPasswordFocused && (
            <div className='password-rules'>
              <p style={{ color: passwordCriteria.length ? 'green' : 'red' }}>
                {passwordCriteria.length ? <CheckCircleIcon /> : <CancelIcon />} At least 8 characters
              </p>
              <p style={{ color: passwordCriteria.uppercase ? 'green' : 'red' }}>
                {passwordCriteria.uppercase ? <CheckCircleIcon /> : <CancelIcon />} Must contain a capital letter
              </p>
              <p style={{ color: passwordCriteria.lowercase ? 'green' : 'red' }}>
                {passwordCriteria.lowercase ? <CheckCircleIcon /> : <CancelIcon />} Must contain a small letter
              </p>
              <p style={{ color: passwordCriteria.number ? 'green' : 'red' }}>
                {passwordCriteria.number ? <CheckCircleIcon /> : <CancelIcon />} Must contain a number
              </p>
              <p style={{ color: passwordCriteria.specialChar ? 'green' : 'red' }}>
                {passwordCriteria.specialChar ? <CheckCircleIcon /> : <CancelIcon />} Must contain a special character
              </p>
            </div>
          )}
        </div>
        <div className='input-sections'>
          <div className='input-forms'>
            <i><VerifiedUserIcon /></i>
            <input placeholder='Confirm Your Password' type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <p className='error-msg'>{errors.confirmPassword}</p>
        </div>

        <div className='check-box-section'>
          <input type="checkbox" />
          <label>I agree to all Terms & Conditions</label>
        </div>

        <button type='submit'>Sign Up</button>
        <p>Already have an account? <span onClick={() => navigate('/logIn')}>Login</span></p>
        <button style={{backgroundColor:"#00ACEE"}}>
          <GoogleIcon />
          continue with google
        </button>
      </form>
    </div>
  );
}

export default SignUp;
