// src/pages/ProductsDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, [id]);

  if (!property) return <p className="text-center my-5">...جاري التحميل</p>;

  return (
    <div className="container py-40 my-5">
      <h2 className="mb-4 text-center">{property.name}</h2>
      <img
        src={property.image}
        alt={property.name}
        className=" rounded mb-4"
        style={{ maxHeight: "380px", objectFit: "fill" }}
      />
      <p><strong>الوصف:</strong> {property.description}</p>
      <p><strong>العنوان:</strong> {property.address}</p>
      <p><strong>المساحة:</strong> {property.space} م²</p>
      <p><strong>الطابق:</strong> {property.floor}</p>
      <p><strong>السعة:</strong> {property.capacity}</p>
    </div>
  );
}

export default ProductDetail;