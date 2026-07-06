import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-code">404</div>

      <h1 className="not-found-title">Page Not Found</h1>

      <p className="not-found-desc">
        Sorry, the page you are looking for doesn't exist or has been moved to
        another URL.
      </p>

      <div className="not-found-actions">
        <Link to="/" className="btn-home">
          Go Back Home
        </Link>
        <a href="/support" className="btn-support">
          Contact Support
        </a>
      </div>
    </div>
  );
}
