export default function HeroMedia() {
  return (
    <div className="hero-media">
      <div className="hero-image-wrap">
        <img src="/hero-doctor.png" alt="Doctor" />
      </div>

      <div className="hero-float-card rating card">
        <svg className="star-filled" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <div>
          <p className="hero-float-title">4.9/5</p>
          <p className="hero-float-sub">12k+ reviews</p>
        </div>
      </div>

      <div className="hero-float-card confirm card">
        <div className="hero-float-icon">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <div>
          <p className="hero-float-title">Appointment confirmed</p>
          <p className="hero-float-sub">Today, 10:30 AM with Dr. Okafor</p>
        </div>
      </div>
    </div>
  );
}
