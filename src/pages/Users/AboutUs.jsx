import { useEffect, useState } from "react";

function AboutUs() {
  const [developers , setDevelopers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/developers")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  
    return (
      <div className="container py-5 my-5">
        <h2 className="mb-4 text-center">من نحن</h2>
        <p className="lead text-center">
          نحن شركة متخصصة في تسويق وبيع الوحدات العقارية لصالح أبرز المطورين في العاصمة الإدارية الجديدة. نعمل على تقديم أفضل الخيارات السكنية والتجارية لعملائنا، مع ضمان أعلى مستويات الجودة والاحترافية.
        </p>
  
        <h3 className="mt-5 mb-4 text-center">شركاؤنا من المطورين</h3>
        <div className="row">
          {developers.map((dev, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card h-100 text-center border-0 shadow-sm">
                <img
                  src={dev.logo}
                  className="card-img-top p-3"
                  alt={`شعار ${dev.name}`}
                  style={{ height: "120px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{dev.name}</h5>
                  <ul className="list-unstyled">
                    {dev.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default AboutUs;
  