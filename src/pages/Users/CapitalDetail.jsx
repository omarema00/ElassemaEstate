function NewCapital() {
  return (
    <div className="container py-5 my-5">
      <h2 className="mb-4 text-center">عن العاصمة الإدارية الجديدة</h2>

      <p className="lead">
        تُعد العاصمة الإدارية الجديدة مشروعًا استراتيجيًا ضخمًا أطلقته الدولة المصرية ضمن رؤية شاملة لتطوير البنية التحتية وتحقيق التنمية المستدامة. تقع المدينة على بُعد 45 كيلومترًا شرق القاهرة، وتمتد على مساحة تزيد عن 170 ألف فدان، مما يجعلها واحدة من أكبر المدن الذكية في المنطقة.
      </p>

      <div className="row my-4">
        <div className="col-md-6 flex-column-desc">
          <h5>المنطقة الحكومية المركزية</h5>
          <p>
            تضم العاصمة الإدارية الجديدة مقرات الوزارات، مجلس الوزراء، البرلمان، والقصر الرئاسي، وقد تم تجهيزها بأحدث تقنيات البنية التحتية الذكية.
          </p>
        </div>
        <div className="col-md-6 flex-column-desc">
          <img
            src="/images/government-district.webp"
            className="img-fluid rounded shadow"
            alt="المنطقة الحكومية"
          />
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-6 flex-column-desc order-md-2">
          <h5>البرج الأيقوني والمنطقة التجارية</h5>
          <p>
            تحتوي العاصمة على حي المال والأعمال الذي يضم البرج الأيقوني – أطول ناطحة سحاب في أفريقيا – بالإضافة إلى بنوك، مقار لشركات كبرى، ومراكز مالية.
          </p>
        </div>
        <div className="col-md-6 flex-column-desc order-md-1">
          <img
            src="/images/iconic-tower.jpg"
            className="img-fluid rounded shadow"
            alt="البرج الأيقوني"
          />
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-6 flex-column-desc">
          <h5>كابيتال بارك - الحديقة المركزية</h5>
          <p>
            من أكبر الحدائق في العالم، تمتد على أكثر من 10 كم، وتضم مساحات خضراء شاسعة، مسارات للدراجات والمشي، ومناطق ترفيهية وعائلية.
          </p>
        </div>
        <div className="col-md-6 flex-column-desc">
          <img
            src="/images/capital-park.jpg"
            className="img-fluid rounded shadow"
            alt="الحديقة المركزية"
          />
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-6 flex-column-desc order-md-2">
          <h5>مشروعات سكنية وخدمية متكاملة</h5>
          <p>
            العاصمة توفر وحدات سكنية متعددة المستويات، من المتوسطة إلى الفاخرة، بجوار مدارس دولية، جامعات، مستشفيات، ومراكز تسوق وخدمات.
          </p>
        </div>
        <div className="col-md-6 flex-column-desc order-md-1">
          <img
            src="/images/residential-area.jpg"
            className="img-fluid rounded shadow"
            alt="مشروعات سكنية"
          />
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-6 flex-column-desc">
          <h5>شبكة نقل ذكية</h5>
          <p>
            تشمل خطوط المونوريل، والقطار الكهربائي، وطرقًا سريعة حديثة تربط العاصمة بالقاهرة والمدن المحيطة، مما يسهل التنقل ويقلل وقت الرحلات.
          </p>
        </div>
        <div className="col-md-6 flex-column-desc">
          <img
            src="/images/transportation.jpg"
            className="img-fluid rounded shadow"
            alt="شبكة النقل"
          />
        </div>
      </div>

      <p className="mt-5">
        إن العاصمة الإدارية الجديدة ليست مجرد توسع عمراني، بل تمثل رؤية مستقبلية لمدينة ذكية مستدامة تعتمد على التكنولوجيا، وتوفر بيئة حضرية متكاملة تدعم تطلعات مصر نحو الجمهورية الجديدة.
      </p>
    </div>
  );
}

export default NewCapital;
