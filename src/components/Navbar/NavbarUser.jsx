import { Link, useNavigate } from "react-router-dom";

function NavbarUser({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4  user-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold">العاصمة العقارية</Link>
        <div className="ms-auto d-flex align-items-center gap-3">
        <Link to="/contact" className="nav-text">تواصل معنا</Link>
  {user ? (
    <>
      <span className="fw-semibold nav-text">مرحباً، {user.role === "admin" ? "مسؤول" : "مستخدم"}</span>
      <button className="btn btn-outline-danger" onClick={handleLogout}>تسجيل الخروج</button>
    </>
  ) : (
    <>
      <Link to="/login" className="btn btn-outline-primary">تسجيل الدخول</Link>
      <Link to="/register" className="btn btn-primary">إنشاء حساب</Link>
    </>
  )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarUser;
