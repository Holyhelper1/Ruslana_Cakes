
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo_text_light.png"
// import styles from "./admin-login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import openEye from "../../../assets/icons/open-eye.png";
import closedEye from "../../../assets/icons/closed-eye.png";
// import background from "../../../assets/admin-background.jpg";
import { auth } from "../../../firebase";
// import { UploadButton } from "../upload-button/upload-button";
// import { useDispatch } from "react-redux";
import { useState } from "react";

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);      
      
      // dispatch({ type: 'LOGIN' });
      navigate("/Ruslana_Cakes/admin/control-panel");
    } catch (error) {
      console.error("Ошибка входа:", error);
      setError("Не удалось войти. Проверьте ваши учетные данные.");
    }
  };

   return (
    <div className="admin-login-container">
      {error && <p style={{ color: "red", textAlign: 'center' }}>{error}</p>}
      <div className="admin-header"></div>
      <div className="admin-login-wrapper">
      <form className="loginForm" onSubmit={handleSubmit}>
      <img src={logo} alt="logo" width={"180px"} height={"auto"} />
        <input
          className="inputField"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="inputField "
          type={showPassword}
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
            className="passwordToggle"
            onClick={() =>
              setShowPassword(showPassword === "password" ? "text" : "password")
            }
          >
            {showPassword === "password" ? <img src={closedEye} alt="closed eye"  width={"30px"}/> : <img src={openEye} alt="open eye" width={"30px"}/>}
          </span>
        <button className="loginButton">Войти</button>
      </form>
      </div>
      
    </div>
  );
  
};