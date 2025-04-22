import { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  
    if (res.ok) {
      alert("📩 تم إرسال رسالتك بنجاح!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("حدث خطأ، يرجى المحاولة لاحقاً.");
    }
  };
  

  return (
    <div className="container py-40 my-5">
      <h2 className="text-center mb-4">تواصل معنا</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">الاسم</label>
              <input
                type="text"
                className="form-control"
                placeholder="أدخل اسمك"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">البريد الإلكتروني</label>
              <input
                type="email"
                className="form-control"
                placeholder="example@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">رسالتك</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="اكتب رسالتك هنا..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
