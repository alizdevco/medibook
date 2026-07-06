const columns = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    title: "Patients",
    links: ["Find a Doctor", "Book Appointment", "Insurance", "Help Center"],
  },
  {
    title: "Doctors",
    links: ["Join MediBook", "Practice Tools", "Resources", "Partnerships"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "HIPAA", "Cookies"],
  },
];

const socials = ["🌐", "✉️", "💬", "📡"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="brand">
              <div className="brand-icon">🩺</div>
              <span className="brand-name">
                Medi<span>Book</span>
              </span>
            </div>
            <p className="footer-tagline">
              Book trusted, top-rated doctors near you. Quality care, simple
              scheduling, no waiting rooms.
            </p>
            <div className="footer-socials">
              {socials.map((icon, i) => (
                <a key={i} href="#" className="footer-social-btn">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="footer-col-title">{col.title}</h3>
              <ul className="footer-col-links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 MediBook, Inc. All rights reserved.</p>
          <p>Made with care for healthier communities.</p>
        </div>
      </div>
    </footer>
  );
}
