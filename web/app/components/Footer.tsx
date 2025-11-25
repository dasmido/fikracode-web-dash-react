import Link from "next/link";

export default function Footer() {
  const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 500,
};

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-brand">
              <i className="fas fa-store footer-logo-icon"></i>
              <h3 className="footer-brand-title">فكرة كود</h3>
              <p className="footer-brand-description">
              . نقدم منتجات عالية الجودة وخدمة عملاء متميزة.
              </p>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="فيسبوك"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="تويتر"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="إنستغرام"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="لينكد إن"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="يوتيوب"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">روابط سريعة</h4>
            <ul className="footer-links">
              <li><Link style={linkStyle} href="/">الرئيسية</Link></li>
          <li><Link style={linkStyle} href="/products">المنتجات</Link></li>
          <li><Link style={linkStyle} href="/contact">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">خدمة العملاء</h4>
            <ul className="footer-links">
              <li><a href="#faq" className="footer-link">الأسئلة الشائعة</a></li>
              <li><a href="#shipping" className="footer-link">الشحن والتوصيل</a></li>
              <li><a href="#returns" className="footer-link">سياسة الإرجاع</a></li>
              <li><a href="#support" className="footer-link">الدعم الفني</a></li>
              <li><a href="#track" className="footer-link">تتبع الطلب</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">تواصل معنا</h4>
            <div className="footer-contact">
              <div className="footer-contact-item"><i className="fas fa-map-marker-alt"></i> العراق، بغداد</div>
              <div className="footer-contact-item"><i className="fas fa-phone"></i> <span dir="ltr">+966 50 123 4567</span></div>
              <div className="footer-contact-item"><i className="fas fa-envelope"></i> info@fikracode.com</div>
              <div className="footer-contact-item"><i className="fas fa-clock"></i> الأحد - الخميس: 8:00 ص - 10:00 م</div>
            </div>
            
          </div>
        </div>

        {/* Payments */}
        <div className="footer-payments">
          <h5>نقبل الدفع عبر</h5>
          <div className="footer-payment-methods">
            <img src="/images/visa.png" alt="كاش" />
            
          </div>
        </div>

        {/*<div className="footer-bottom">
          <p>© 2024 فكره كود. جميع الحقوق محفوظة. | تصميم وتطوير بكود عالي الجودة</p>
          <div>
            <a href="#privacy">سياسة الخصوصية</a>
            <a href="#terms">الشروط والأحكام</a>
            <a href="#cookies">سياسة الكوكيز</a>
          </div>
        </div>*/}
      </div>
    </footer>
  );
}
