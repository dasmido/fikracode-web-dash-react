interface Testimonial {
  img: string;
  name: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    img: '/images/client1.jpg',
    name: 'محمد أحمد',
    rating: 4.5,
    review: 'لقد استمتعت بتجربة تسوق فريدة مع أفضل المنتجات والعروض الحصرية. الخدمة ممتازة والجودة عالية جداً.'
  },
  {
    img: '/images/client2.jpg',
    name: 'أميرة عبد الله',
    rating: 5,
    review: 'متجر رائع يوفر جميع احتياجاتي. الشحن سريع والتغليف آمن. سأتسوق من هنا مرة أخرى بالتأكيد.'
  },
  {
    img: '/images/client3.jpg',
    name: 'عبد الرحمن محمد',
    rating: 4.5,
    review: 'تجربة ممتازة مع خدمة عملاء متميزة. المنتجات أصلية والأسعار تنافسية. أوصي بهذا المتجر للجميع.'
  }
];

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients-container">
        <div className="clients-header">
          <h2 className="clients-title">عملائنا</h2>
          <p className="clients-subtitle">اكتشف المزيد عن ما يقوله عملائنا من خلال الشهادات التالية</p>
        </div>

        <div className="clients-testimonials">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-card-header">
                <img src={t.img} alt={t.name} />
                <div className="testimonial-card-info">
                  <h3 className="testimonial-card-name">{t.name}</h3>
                  <div className="testimonial-card-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star${i + 0.5 === t.rating ? '-half-alt' : i < t.rating ? '' : '-o'}`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
              <div className="testimonial-card-content">
                <p className="testimonial-card-review">{t.review}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="clients-logos">
          <img src="/images/google.png" alt="جوجل" />
          <img src="/images/ebay.png" alt="إيباي" />
          <img src="/images/google.png" alt="جوجل" />
          <img src="/images/google.png" alt="جوجل" />
        </div>
      </div>
    </section>
  );
}
