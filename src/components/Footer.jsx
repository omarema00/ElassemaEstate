import React from "react";

const Footer = () => (
  <footer dir="rtl" className="footer">
    <div className="footer-container">
      <div className="footer-branding">
        <span className="footer-title"> العاصمة العقارية</span>
        <span className="footer-copy">&copy; {new Date().getFullYear()} جميع الحقوق محفوظة.</span>
      </div>
      <nav className="footer-nav">
        <a href="/" className="nav-text">الرئيسية</a>
        <a href="/contact" className="nav-text">تواصل معنا</a>
        <a href="/availableUnits" className="nav-text">الوحدات المتاحة</a>
      </nav>
    </div>
  </footer>
);

export default Footer;