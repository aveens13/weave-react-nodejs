import React from "react";
import "./Heatmap.css";

const Heatmap = ({ data }) => {
  const getColor = (value) => {
    switch (value) {
      case 0: return "#f2a7e5"; // Least activity (lightest shade)
      case 1: return "#e56fd0"; // Slight activity (lighter shade)
      case 2: return "#e147d7"; // Medium activity (base color)
      case 3: return "#bb3fae"; // High activity (darker shade)
      case 4: return "#9b2e8f"; // Most activity (darkest shade)
      default: return "#f2a7e5"; // Default (lightest)
    }
  };

  const startDate = new Date(2024, 0, 1); // January 1, 2024
  const daysInYear = [...Array(366)].map((_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return date;
  });

  // Group days into weeks (7 days per row)
  const weeks = [];
  const months = [];
  let lastMonth = null;

  for (let i = 0; i < daysInYear.length; i += 7) {
    const week = daysInYear.slice(i, i + 7);
    weeks.push(week);

    const currentMonth = week[0].toLocaleString("default", { month: "short" });
    if (currentMonth !== lastMonth) {
      months.push(currentMonth);
      lastMonth = currentMonth;
    } else {
      months.push(""); // Empty string to maintain spacing
    }
  }

  return (
    <div className="heatmap-container">
      <div className="month-labels">
        {months.map((month, index) => (
          <div key={index} className="month-label">
            {month}
          </div>
        ))}
      </div>

      <div className="weeks">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="week">
            {week.map((date) => {
              const dateString = date.toISOString().split("T")[0];
              return (
                <div
                  key={dateString}
                  className="day"
                  style={{ backgroundColor: getColor(data[dateString] || 0) }}
                  title={`Date: ${dateString}, Contributions: ${data[dateString] || 0}`}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Activity Gradient Legend */}
      <div className="legend">
        <div className="legend-text"> Less activity </div>
        <div className="color-blocks">
          <div className="color-block color-block-1"></div>
          <div className="color-block color-block-2"></div>
          <div className="color-block color-block-3"></div>
          <div className="color-block color-block-4"></div>
          <div className="color-block color-block-5"></div>
        </div>
        <div className="legend-text">More activity</div>
      </div>

    </div>
  );
};

export default Heatmap;
