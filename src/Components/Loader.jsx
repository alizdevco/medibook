// Components/Skeletons.jsx

export function SkeletonBlock({
  width = "100%",
  height = "1rem",
  borderRadius = "4px",
  className = "",
}) {
  return (
    <div
      className={`skeleton-block ${className}`}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: "#e2e8f0",
        animate: "pulse",
      }}
    />
  );
}


export function ProfileHeaderSkeleton() {
  return (
    <div className="profile-header-card card">
      <div className="profile-header-top">
        <SkeletonBlock width="4rem" height="4rem" borderRadius="50%" />
        <div style={{ flex: 1, marginLeft: "1rem" }}>
          <SkeletonBlock width="40%" height="1.5rem" />
          <SkeletonBlock
            width="25%"
            height="1rem"
            style={{ marginTop: "0.5rem" }}
          />
        </div>
      </div>
    </div>
  );
}
export function AboutSkeleton() {
  return (
    <div className="section-card card">
      <SkeletonBlock width="30%" height="1.5rem" />
      <SkeletonBlock width="100%" height="1rem" style={{ marginTop: "1rem" }} />
      <SkeletonBlock
        width="90%"
        height="1rem"
        style={{ marginTop: "0.5rem" }}
      />
    </div>
  );
}
export function DoctorCardSkeleton() {
  return (
    <div className="doctor-card card">
      <div className="doctor-card-top">
        <SkeletonBlock width="4rem" height="4rem" borderRadius="50%" />
        <div style={{ flex: 1, marginLeft: "1rem" }}>
          <SkeletonBlock width="60%" height="1.2rem" />
          <SkeletonBlock
            width="40%"
            height="0.8rem"
            style={{ marginTop: "0.5rem" }}
          />
        </div>
      </div>

      <div className="doctor-card-body" style={{ marginTop: "1rem" }}>
        <SkeletonBlock width="80%" height="0.8rem" />
        <SkeletonBlock
          width="95%"
          height="0.8rem"
          style={{ marginTop: "0.5rem" }}
        />
      </div>

      <div
        className="doctor-card-footer"
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SkeletonBlock width="30%" height="1.8rem" borderRadius="6px" />
        <SkeletonBlock width="30%" height="1.8rem" borderRadius="6px" />
      </div>
    </div>
  );
}
