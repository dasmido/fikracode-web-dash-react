interface Stat {
  icon: string;
  title: string;
  value: string;
  description: string;
}

const stats: Stat[] = [
  { icon: 'fas fa-boxes', title: 'عدد المنتجات', value: '12', description: 'منتج متاح' },
  { icon: 'fas fa-users', title: 'عدد العملاء', value: '1000+', description: 'عميل راضي' },
  { icon: 'fas fa-trophy', title: 'سنوات الخبرة', value: '5+', description: 'سنوات في السوق' },
  { icon: 'fas fa-star', title: 'نسبة النجاح', value: '95%', description: 'معدل النجاح' },
];

export default function Statistics() {
  return (
    <section className="statistics">
      <div className="statistics-container">
        <div className="statistics-header">
          <h2 className="statistics-title">إحصائياتنا</h2>
          <p className="statistics-subtitle">
            اكتشف المزيد عن متجرنا من خلال الإحصائيات التالية
          </p>
        </div>

        <div className="statistics-cards">
          {stats.map((stat, index) => (
            <div key={index} className="statistics-card">
              <div className="statistics-card-header">
                <i className={`${stat.icon} statistics-icon`}></i>
                <h3 className="statistics-card-title">{stat.title}</h3>
              </div>
              <div className="statistics-card-content">
                <p className="statistics-card-value">{stat.value}</p>
                <p className="statistics-card-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
