import { SPECIALTIES } from "../data/constansts";
import { specialtyIcons } from "./specialtyIcons";
import { useNavigate } from "react-router-dom";

export default function SpecialtySection() {
  const navigate = useNavigate();
  function handleSpecialtyClick(specialty) {
    navigate(`/doctors?specialty=${specialty}`);
  }
  return (
    <section className="section">
      <div className="section-header-center">
        <h2 className="section-title">Browse by specialty</h2>
        <p className="section-desc">
          Connect with experienced specialists across a wide range of medical
          fields.
        </p>
      </div>

      <div className="specialty-grid">
        {SPECIALTIES.map((item) => (
          <div
            className="specialty-card card"
            key={item}
            onClick={() => handleSpecialtyClick(item)}
          >
            <div className="specialty-icon-wrap">{specialtyIcons[item]}</div>
            <h3 className="specialty-name">{item}</h3>
            <span className="specialty-link">view doctors</span>
          </div>
        ))}
      </div>
    </section>
  );
}
