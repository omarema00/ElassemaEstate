import { useEffect, useState } from "react";

function AdminHome() {
  const [unitCount, setUnitCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setUnitCount(data.length));

    fetch("http://localhost:5000/contacts")
      .then((res) => res.json())
      .then((data) => setMessageCount(data.length));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">لوحة التحكم الرئيسية</h2>
      <div className="row text-center">
        <div className="col-md-6 mb-4">
          <div className="bg-light border rounded p-4 shadow-sm">
            <h5 className="mb-2">📦 عدد الوحدات المتاحة</h5>
            <h2 className="text-success">{unitCount}</h2>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="bg-light border rounded p-4 shadow-sm">
            <h5 className="mb-2">📨 عدد رسائل التواصل</h5>
            <h2 className="text-primary">{messageCount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
