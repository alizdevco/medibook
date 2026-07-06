export default function StarRating({ rating = 4.5, maxStars = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.8;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="rating-stars" title={`Rating: ${rating}`}>
      {/* ۱. رندر ستاره‌های کامل */}
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className="star-on star-filled"
          viewBox="0 0 24 24"
          width="14"
          height="14"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}

      {hasHalfStar && (
        <svg className="star-half" viewBox="0 0 24 24" width="14" height="14">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#fff" />{" "}
              {/* رنگ خاکستری برای بخش خالی */}
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      )}

      {/* ۳. رندر ستاره‌های خالی */}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className="star-off"
          viewBox="0 0 24 24"
          width="14"
          height="14"
          style={{ color: "#e4e4e7" }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}
