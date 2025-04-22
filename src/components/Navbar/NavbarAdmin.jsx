import { Link, useNavigate } from "react-router-dom";

function NavbarAdmin({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 mb-4 admin-navbar">
      <div className="container-fluid">
        <Link to="/dashboard" className="navbar-brand fw-bold text-white">
          لوحة التحكم
        </Link>
        <div className="ms-auto d-flex align-items-center gap-3">
          <Link to="/dashboard" className="btn btn-outline-light">
            الرئيسية
          </Link>
          <Link to="/dashboard/units" className="btn btn-outline-light">
            الوحدات
          </Link>
          <Link to="/dashboard/messages" className="btn btn-outline-light">
            رسائل التواصل
          </Link>

          <button className="btn btn-danger" onClick={handleLogout}>
            تسجيل الخروج
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
