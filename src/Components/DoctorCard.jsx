import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const DoctorCard = function ({ doctor }) {
  return (
    <div className="doctor-card card">
      <div className="doctor-card-top">
        <div className="doctor-avatar">
          <img src={doctor.avatar} alt={doctor.name} />
        </div>

        <div className="doctor-card-headline">
          <div className="doctor-name-specialty">
            <div className="doctor-name">{doctor.name}</div>
            <div className="doctor-specialty">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="14"
                height="14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span>{doctor.specialty}</span>
            </div>
          </div>

          <button className="fav-btn">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="doctor-card-body">
        <div className="doctor-rating-row">
          <StarRating rating={doctor.rating} />
          <span className="rating-value">{doctor.rating}</span>
          <span className="review-count">({doctor.reviews})</span>
        </div>

        <div className="doctor-meta-row">
          <span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="14"
              height="14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {doctor.city}
          </span>
          <span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="14"
              height="14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 01-.75-.75V14.15M20.25 14.15a.75.75 0 00-.75-.75H4.5a.75.75 0 00-.75.75m16.5 0a.75.75 0 01-.75-.75V8.25m-15 5.15a.75.75 0 01-.75-.75V8.25m15 0H3.75M12 3v3.75m0 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 103 0"
              />
            </svg>
            {doctor.experience} yrs exp
          </span>
        </div>
      </div>

      <div className="doctor-card-footer">
        <div>
          <p className="price-label">Visit from</p>
          <p className="price-value">${doctor.price}</p>
        </div>
        <div className="doctor-card-footer-right">
          {doctor.available ? (
            <span className="badge badge-success">Available today</span>
          ) : (
            <span className="badge badge-secondary">Unavailable</span>
          )}
          <Link to={`/doctors/${doctor.id}`} className="btn btn-default btn-sm">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DoctorCard;
