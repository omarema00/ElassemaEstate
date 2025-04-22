// src/pages/Home.jsx
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import CardContainer from "../../components/CardContainer";

function Home() {
  return (
    <>
      {/* Hero Carousel with Video */}
      <div className="hero">
        <Carousel fade className="home-slider" interval={5000}>
          <Carousel.Item>
            <video className="home-hero-video" autoPlay muted loop>
              <source src="/videos/intro.mp4" type="video/mp4" />
              المتصفح لا يدعم تشغيل الفيديو
            </video>
            <Carousel.Caption>
              <h5 className="text-white">مرحبًا بكم في عاصمة المستقبل</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Section: Knowledge about the project */}

      <div className="">
        <section className="container ">
          <div className="row py-50 ">
            <div className="col-md-6">
              <img
                src="/images/image1.jpg"
                alt="العاصمة الإدارية"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-start flex-column px-5">
              {/* <div className=" "> */}
              <h2 className="">من نحن</h2>
              <p className="section-desc">
                مشروع العاصمة الإدارية الجديدة هو أحد أكبر المشاريع التنموية في
                مصر، ويهدف إلى خلق بيئة حضارية حديثة تتماشى مع المستقبل.
              </p>
              <Link to="/About-us" className="home-btn">
                اقرأ المزيد
              </Link>
              {/* </div> */}
            </div>
          </div>
        </section>
      </div>

      {/* Section: New Capital Intro */}
      <div className="section-color my-150">
        <section className="container ">
          <div className="row py-50">
          <div className="col-md-6 d-flex justify-content-center align-start flex-column px-5">
              <h2 className="section-title">العاصمة الإدارية الجديدة</h2>
              <p className="section-desc">
                مشروع العاصمة الإدارية الجديدة هو أحد أكبر المشاريع التنموية في
                مصر، ويهدف إلى خلق بيئة حضارية حديثة تتماشى مع المستقبل.
              </p>
              <Link to="/new-capital" className="home-btn-1">
                اقرأ المزيد
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src="/images/image1.jpg"
                alt="العاصمة الإدارية"
                className="img-fluid rounded"
              />
            </div>
         
          </div>
        </section>
      </div>

      {/* Section: available units */}
      <div className="">
        <section className="container  ">
          <div className="row py-50">
            <div className="col-md-6">
              <img
                src="/images/image1.jpg"
                alt="العاصمة الإدارية"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-start flex-column px-5">
              <h2 className="">الوحدات المتاحة</h2>
              <p className="section-desc"></p>
              <Link to="/availableUnits" className="home-btn">
                ابدأ التسوق
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
