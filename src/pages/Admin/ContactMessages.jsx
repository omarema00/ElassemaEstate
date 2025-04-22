import { useEffect, useState } from "react";

function ContactMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((res) => res.json())
      .then((data) => {
        // Sort messages by newest first
        const sorted = [...data].sort((a, b) => b.id - a.id);
        setMessages(sorted);
      });
  }, []);

  const total = messages.length;
  const recentMessages = messages.slice(0, 3);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">رسائل التواصل</h2>

      {/* Stats Overview */}
      <div className="row mb-4 text-center">
        <div className="col-md-4 mb-3">
          <div className="border p-3 rounded bg-light">
            <h5 className="mb-1">📨 عدد الرسائل</h5>
            <h3 className="text-primary">{total}</h3>
          </div>
        </div>
        <div className="col-md-8 mb-3">
          <div className="border p-3 rounded bg-white">
            <h5 className="mb-3">🕒 أحدث الرسائل</h5>
            {recentMessages.length === 0 ? (
              <p>لا توجد رسائل</p>
            ) : (
              <ul className="list-unstyled">
                {recentMessages.map((msg) => (
                  <li key={msg.id} className="mb-2 border-bottom pb-2">
                    <strong>{msg.name}</strong> - {msg.email}
                    <div className="text-muted small">{msg.message}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Messages Table */}
      {messages.length === 0 ? (
        <p className="text-center">لا توجد رسائل حالياً</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>الاسم</th>
                <th>البريد الإلكتروني</th>
                <th>الرسالة</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ContactMessages;
