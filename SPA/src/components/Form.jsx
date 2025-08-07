import { useState } from "react";
import "./Form.css";
function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username Must have 8 Letters Long");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email Should have @gmail");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setPasswordColor("red");
      setErrorPassword("Password must have atleast 8 Letters");
    }
    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setConfirmPasswordColor("red");
      setErrorConfirmPassword("Password & Confirm Password should be same");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className="error">{errorUserName}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <buttom className="submit-btn" onClick={validate}>
            Submit
          </buttom>
        </form>
      </div>
    </>
  );
}

export default Form;
