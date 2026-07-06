import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section className="section">
      <div className="cta-card card">
        <div className="cta-title">
          <span> Your health can't wait. Book your visit today.</span>
        </div>
        <div className="cta-desc">
          <span>
            Join thousands of patients who found the right care with MediBook.
          </span>
        </div>
        <div>
          <Link to="/doctors">
            <button className="btn btn-outline btn-lg">Find your doctor</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
