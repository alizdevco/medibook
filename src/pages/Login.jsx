import { useState } from "react";
import { signIn, signUp } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("signIn");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      setIsLoading(true);
      setError("");
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignUp() {
    try {
      setIsLoading(true);
      setError("");
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card card">
        <div className="brand-row">
          <div className="brand-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <span className="brand-name">
            Medi<span>Book</span>
          </span>
        </div>

        <div className="login-tabs">
          <button
            className={`login-tab-btn ${activeTab === "signIn" ? "active" : ""}`}
            onClick={() => setActiveTab("signIn")}
            disabled={isLoading}
          >
            Sign in
          </button>
          <button
            className={`login-tab-btn ${activeTab === "createAccount" ? "active" : ""}`}
            onClick={() => setActiveTab("createAccount")}
            disabled={isLoading}
          >
            Create account
          </button>
        </div>

        <div className="login-fields">
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <div className="login-error">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="16"
              height="16"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {error}
          </div>
        )}

        <button
          className="btn btn-default btn-lg btn-full"
          onClick={activeTab === "signIn" ? handleLogin : handleSignUp}
          disabled={isLoading}
        >
          {isLoading
            ? "Please wait..."
            : activeTab === "signIn"
              ? "Sign in"
              : "Create account"}
        </button>

        <p className="login-helper">
          {activeTab === "signIn"
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            className="login-helper-btn"
            onClick={() =>
              setActiveTab(activeTab === "signIn" ? "createAccount" : "signIn")
            }
          >
            {activeTab === "signIn" ? "Create one" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
