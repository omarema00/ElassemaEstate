// src/components/CardContainer.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

function CardContainer() {
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [contact, setContact] = useState({ name: "", phone: "" });

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <>
      <h3 className="mb-4 text-start">الوحدات المتاحة</h3>
      <div className="row">
        {properties.length === 0 ? (
          <p className="text-center">لا توجد وحدات متاحة حالياً</p>
        ) : (
          properties.map((property) => (
            <div className="col-md-4 mb-4" key={property.id}>
              <div className="card">
                <img src={property.image} className="card-img-top" alt={property.name} />
                <div className="card-body">
                  <h5 className="card-title">{property.name}</h5>
                  <p className="card-text">{property.description}</p>
                  <p><strong>العنوان:</strong> {property.address}</p>
                  <p><strong>المساحة:</strong> {property.space} م²</p>
                  <p><strong>الطابق:</strong> {property.floor}</p>
                  <p><strong>السعة:</strong> {property.capacity}</p>
                  <Link to={`/product/${property.id}`} className="btn btn-primary w-100 mt-2">عرض التفاصيل</Link>
                  <button className="btn btn-outline-success w-100 mt-2" onClick={() => { setSelectedProperty(property); setShowModal(true); }}>
                    احجز الآن
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>طلب حجز: {selectedProperty?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>الاسم</Form.Label>
              <Form.Control type="text" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => { alert(`✅ تم إرسال الحجز لـ ${selectedProperty?.name}`); setContact({ name: "", phone: "" }); setShowModal(false); }}>
            إرسال الطلب
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>إلغاء</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardContainer;
