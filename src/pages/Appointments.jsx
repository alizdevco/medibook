import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppointments } from "../context/AppointmentsContext ";

const TABS = ["upcoming", "past", "cancelled"];

export default function Appointments() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { appointments, setAppointments } = useAppointments();

  const counts = {
    upcoming: appointments.filter((a) => a.status === "upcoming").length,
    past: appointments.filter((a) => a.status === "past").length,
    cancelled: appointments.filter((a) => a.status === "cancelled").length,
  };

  const visible = appointments.filter((a) => a.status === activeTab);

  function handleCancel(id) {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "cancelled" } : a)),
    );
  }

  return (
    <div className="appointments-page">
      <div className="appointments-head">
        <div>
          <h1 className="appointments-title">My Appointments</h1>
          <p className="appointments-sub">
            Manage your upcoming and past visits.
          </p>
        </div>
        <Link to="/doctors" className="btn btn-default btn-lg">
          Book new appointment
        </Link>
      </div>

      <div className="tabs-bar">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            <span className="tab-count">{counts[tab]}</span>
          </button>
        ))}
      </div>

      <div className="appointments-list">
        {visible.length === 0 ? (
          <EmptyState tab={activeTab} />
        ) : (
          visible.map((appt) => (
            <AppointmentCard
              key={appt.id}
              appt={appt}
              onCancel={handleCancel}
            />
          ))
        )}
      </div>
    </div>
  );
}

function AppointmentCard({ appt, onCancel }) {
  return (
    <div className="appointment-card card">
      <div className="appt-avatar">
        <img src={appt.avatar} alt={appt.doctorName} />
      </div>

      <div className="appt-info">
        <div className="appt-name-row">
          <span className="appt-name">{appt.doctorName}</span>
          {appt.status === "upcoming" && (
            <span
              className={`badge ${appt.confirmed ? "badge-success" : "badge-warning"}`}
            >
              {appt.confirmed ? (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Confirmed
                </>
              ) : (
                <>⏳ Pending</>
              )}
            </span>
          )}
          {appt.status === "cancelled" && (
            <span className="badge badge-destructive">Cancelled</span>
          )}
        </div>

        <div className="appt-specialty">
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
          {appt.specialty}
        </div>

        <div className="appt-meta-row">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {appt.date}
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
                d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
              />
            </svg>
            {appt.time}
          </span>
          <span>
            {appt.type === "video" ? (
              <>
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
                    d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                  />
                </svg>
                Video visit
              </>
            ) : (
              <>
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
                {appt.location}
              </>
            )}
          </span>
        </div>
      </div>

      {appt.status === "upcoming" && (
        <div className="appt-actions">
          <button className="btn btn-outline btn-sm">
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
              />
            </svg>
            Edit
          </button>
          <button
            className="btn btn-destructive btn-sm"
            onClick={() => onCancel(appt.id)}
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

function EmptyState({ tab }) {
  const messages = {
    upcoming: "You have no upcoming appointments.",
    past: "No past appointments found.",
    cancelled: "No cancelled appointments.",
  };
  return (
    <div className="empty-state">
      <svg
        className="empty-state-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <h3 className="empty-state-title">{messages[tab]}</h3>
      <p className="empty-state-desc">
        {tab === "upcoming" && "Book an appointment to get started."}
        {tab === "past" && "Your completed visits will appear here."}
        {tab === "cancelled" && "Cancelled appointments will appear here."}
      </p>
      {tab === "upcoming" && (
        <div className="empty-state-action">
          <Link to="/doctors" className="btn btn-default">
            Find a Doctor
          </Link>
        </div>
      )}
    </div>
  );
}
