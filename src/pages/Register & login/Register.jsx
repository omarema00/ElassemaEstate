import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password) {
      return alert("يرجى ملء جميع الحقول");
    }

    const newUser = { email, password, role: 'user' };

    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    if (res.ok) {
      alert("تم التسجيل بنجاح");
      navigate('/login');
    } else {
      alert("فشل في التسجيل");
    }
  };

  return (
    <div className="container py-120 my-5">
      <h2 className="text-center mb-4">تسجيل حساب جديد</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">البريد الإلكتروني</label>
            <input type="email" className="form-control" placeholder="أدخل بريدك الإلكتروني" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">كلمة المرور</label>
            <input type="password" className="form-control" placeholder="أدخل كلمة المرور" onChange={e => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-dark" onClick={handleRegister}>تسجيل</button>
          <p className="mt-3 text-center">
            لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
