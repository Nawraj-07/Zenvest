// src/components/OpenAccount.js
/*import React, { useState } from "react";

const Login = () => {
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Signup successful!");
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } else {
      alert(data.msg || "Signup failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "2rem" }}>
      <label htmlFor="mobile" style={{ fontSize: "1rem" }}>Signup now</label>
      <br />
      <input
        type="tel"
        placeholder="Enter your mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
        style={{ padding: "0.5rem", width: "250px", marginTop: "1rem" }}
      />
      <br />
      <button type="submit" style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", backgroundColor: "#387ed1", color: "white", border: "none", cursor: "pointer" }}>
        Get OTP
      </button>
      <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
        By proceeding, you agree to the Zenvest <a href="#">terms</a> & <a href="#">privacy policy</a>
      </p>
    </form>
  );
};

export default Login;*/

// src/components/OpenAccount.js
/*import React, { useState } from "react";

const Login = () => {
  const [mobile, setMobile] = useState("");

  // ✅ REPLACE ONLY THIS FUNCTION BELOW
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3002/api/auth/otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent successfully!");
        // You can store or redirect if needed
      } else {
        alert(data.msg || "Failed to send OTP.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  // 👇 Everything below this stays the same
  return (

    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "2rem" }}>
      <label htmlFor="mobile" style={{ fontSize: "1rem" }}>Signup now</label>
      <br />
      <input
        type="tel"
        placeholder="Enter your mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
        style={{ padding: "0.5rem", width: "250px", marginTop: "1rem" }}
      />
      <br />
      <button type="submit" style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", backgroundColor: "#387ed1", color: "white", border: "none", cursor: "pointer" }}>
        Get OTP
      </button>
      <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
        By proceeding, you agree to the Zenvest <a href="#">terms</a> & <a href="#">privacy policy</a>
      </p>
    </form>
  );
};

export default Login;*/

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Login.css'; // Import the CSS file

const Login = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#login-form-section") {
      const element = document.getElementById("login-form-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3002/api/auth/otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();

      if (res.ok) {
        // Store the token in localStorage for authentication
        localStorage.setItem('token', data.token);
        alert("OTP sent successfully!");
        navigate('/dashboard'); // Use navigate instead of window.location
      } else {
        alert(data.msg || "Failed to send OTP.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="login-container p-5 mb-5">
      {/* Left Image Side */}
      <div className="login-image-side">
        <img
          src="/media/signup.png"
          alt="Signup Visual"
          className="login-image"
        />
      </div>

      {/* Right Login Form Side */}
      <div className="login-form-side" id="login-form-section">
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="mobile" className="login-label">
            Signup now
          </label>
          <br />
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="login-input"
          />
          <br />
          <button
            type="submit"
            id="get-otp-button"
            className="login-button"
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#205ba6"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "#387ed1"}
          >
            Get OTP
          </button>
          <p className="login-terms-text">
            By proceeding, you agree to the Zenvest <a href="#">terms</a> & <a href="#">privacy policy</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;