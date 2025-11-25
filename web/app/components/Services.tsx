interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: 'fas fa-truck', title: 'شحن سريع', description: 'توصيل سريع وآمن لجميع الطلبات خلال 24-48 ساعة' },
  { icon: 'fas fa-shield-alt', title: 'ضمان الجودة', description: 'جميع منتجاتنا مضمونة وخاضعة لمعايير الجودة العالية' },
  { icon: 'fas fa-undo', title: 'إرجاع مجاني', description: 'إمكانية إرجاع المنتجات خلال 30 يوم بدون رسوم إضافية' },
  { icon: 'fas fa-headset', title: 'دعم العملاء', description: 'فريق دعم متخصص متاح 24/7 لمساعدتك في جميع استفساراتك' },
  { icon: 'fas fa-credit-card', title: 'دفع آمن', description: 'طرق دفع متعددة وآمنة مع تشفير أحدث المعاملات' },
  { icon: 'fas fa-gift', title: 'عروض خاصة', description: 'عروض وخصومات حصرية لعملائنا المميزين بانتظام' },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">خدماتنا</h2>
          <p className="services-subtitle">
            نقدم لكم أفضل الخدمات لضمان تجربة تسوق ممتازة ومريحة
          </p>
        </div>

        <div className="services-cards">
          {services.map((service, index) => (
            <div key={index} className="services-card">
              <div className="services-card-header">
                <i className={`${service.icon} services-icon`}></i>
                <h3 className="services-card-title">{service.title}</h3>
              </div>
              <div className="services-card-content">
                <p className="services-card-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
