// src/components/Leaderboard.js
import React from "react";

const Leaderboard = ({ users }) => {
  // Calculate the completion count for each user
  const userCompletionCounts = users.map((user) => ({
    id: user.id,
    name: user.name,
    completionCount: user.assignments.filter(
      (assignment) => assignment.completed
    ).length,
  }));

  // Sort users by completion count in descending order
  userCompletionCounts.sort((a, b) => b.completionCount - a.completionCount);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {userCompletionCounts.map((user, index) => (
          <li
            key={user.id}
            className={index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : ""}
            style={{
              backgroundColor:
                index === 0
                  ? "gold"
                  : index === 1
                  ? "silver"
                  : index === 2
                  ? "#cd7f32" /* Bronze */
                  : "transparent",
            }}
          >
            {user.name} - Completed {user.completionCount} Levels
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
