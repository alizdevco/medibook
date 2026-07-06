import { Link } from "react-router-dom";

import DoctorCard from "./DoctorCard";
import { useMemo } from "react";

export default function TopRatedSection({ doctors }) {
  const topRated = useMemo(() => {
    return doctors.slice(0, 3);
  }, [doctors]);

  return (
    <section className="section-card-bg">
      <div className="section">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">Top rated doctors</h2>
            <p className="section-desc">
              Highly reviewed specialists trusted by thousands of patients.
            </p>
          </div>
          <Link to="/doctors">
            <button className="btn btn-outline btn-primary">View all</button>
          </Link>
        </div>

        <div className="doctor-grid">
          {topRated.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
