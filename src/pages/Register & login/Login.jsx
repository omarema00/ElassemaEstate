import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate(user.role === "admin" ? "/dashboard" : "/");
      } else {
        alert("بيانات الدخول غير صحيحة");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("حدث خطأ ما، حاول مرة أخرى");
    }
  };

  return (
    <div className="container py-120  my-5">
      <h2 className="text-center mb-4">تسجيل الدخول</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">البريد الإلكتروني</label>
            <input
              type="email"
              className="form-control"
              placeholder="أدخل بريدك الإلكتروني"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">كلمة المرور</label>
            <input
              type="password"
              className="form-control"
              placeholder="أدخل كلمة المرور"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-dark" onClick={handleLogin}>
            دخول
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
