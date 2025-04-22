import { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/fetchProducts"; // لاحقاً يمكن تغيير الاسم إلى fetchProperties

function UnitsPage() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [address, setAddress] = useState('');
  const [space, setSpace] = useState('');
  const [floor, setFloor] = useState('');
  const [capacity, setCapacity] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [imgPreview, setImgPreview] = useState('');
  const [properties, setProperties] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    const data = await fetchProducts();
    setProperties(data);
  };

  const resetForm = () => {
    setName('');
    setDesc('');
    setAddress('');
    setSpace('');
    setFloor('');
    setCapacity('');
    setImgFile(null);
    setImgPreview('');
    setIsEditing(false);
    setEditingId(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPreview(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleAddOrUpdateProperty = async () => {
    if (!imgPreview) {
      alert("يرجى تحميل صورة");
      return;
    }

    const propertyData = {
      name,
      description: desc,
      address,
      space,
      floor,
      capacity,
      image: imgPreview,
    };

    const url = `http://localhost:5000/products${isEditing ? `/${editingId}` : ''}`;
    const method = isEditing ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(propertyData),
    });

    if (res.ok) {
      alert(isEditing ? "✅ تم تحديث الوحدة!" : "✅ تم إضافة الوحدة!");
      resetForm();
      loadProperties();
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("هل أنت متأكد من حذف هذه الوحدة؟")) return;

    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert("🗑️ تم حذف الوحدة.");
      loadProperties();
    }
  };

  const handleEdit = (property) => {
    setName(property.name);
    setDesc(property.description);
    setAddress(property.address);
    setSpace(property.space);
    setFloor(property.floor);
    setCapacity(property.capacity);
    setImgPreview(property.image);
    setIsEditing(true);
    setEditingId(property.id);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">{isEditing ? "تعديل الوحدة العقارية" : "إضافة وحدة عقارية جديدة"}</h2>

      <div className="mb-4">
        <div className="mb-3">
          <label className="form-label">اسم الوحدة</label>
          <input className="form-control" value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">الوصف</label>
          <input className="form-control" value={desc} onChange={e => setDesc(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">العنوان</label>
          <input className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">المساحة (م²)</label>
          <input className="form-control" value={space} onChange={e => setSpace(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">الطابق</label>
          <input className="form-control" value={floor} onChange={e => setFloor(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">السعة (مثال: ٣ غرف، ٢ حمام)</label>
          <input className="form-control" value={capacity} onChange={e => setCapacity(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">تحميل صورة</label>
          <input type="file" accept="image/*" className="form-control" onChange={handleImageChange} />
        </div>

        {imgPreview && (
          <div className="mb-3">
            <img src={imgPreview} alt="Preview" className="img-preview" />
          </div>
        )}

        <button className="btn btn-dark me-2" onClick={handleAddOrUpdateProperty}>
          {isEditing ? "تحديث الوحدة" : "إضافة الوحدة"}
        </button>
        {isEditing && (
          <button className="btn btn-secondary" onClick={resetForm}>إلغاء التعديل</button>
        )}
      </div>

      <hr />

      <h4 className="mb-4 text-center">قائمة الوحدات العقارية</h4>
      <div className="row">
        {properties.map(property => (
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

                <button className="btn btn-sm btn-warning mb-2 me-2" onClick={() => handleEdit(property)}>تعديل</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(property.id)}>حذف</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnitsPage;
