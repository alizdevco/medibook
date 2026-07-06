import HeroSearch from "./HeroSearch";
import HeroMedia from "./HeroMedia";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <span className="hero-pill">🛡️ Trusted by 50,000+ patients</span>

          <h1 className="hero-title">
            Find and book the right doctor, effortlessly.
          </h1>

          <p className="hero-subtitle">
            Search top-rated specialists near you, compare reviews, and book
            your appointment online in just a few clicks.
          </p>
          <HeroSearch />
          <div className="hero-stats">
            <div>
              <p className="hero-stat-value">1,200+</p>
              <p className="hero-stat-label">Verified doctors</p>
            </div>
            <div>
              <p className="hero-stat-value">98%</p>
              <p className="hero-stat-label">Patient satisfaction</p>
            </div>
            <div>
              <p className="hero-stat-value">50k+</p>
              <p className="hero-stat-label">Appointments booked</p>
            </div>
          </div>
        </div>
        <HeroMedia />
      </div>
    </section>
  );
}
