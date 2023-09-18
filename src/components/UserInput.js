// src/components/UserInput.js
import React from "react";

const UserInput = ({ user, onUpdateUser }) => {
  const handleChange = (level, requirementId) => {
    onUpdateUser(user.id, level, requirementId);
  };

  return (
    <div>
      <h3>{user.name}</h3>
      {user.assignments.map((assignment) => (
        <div key={assignment.level}>
          <h4>Level {assignment.level}</h4>
          {assignment.requirements.map((requirement) => (
            <label key={requirement.id}>
              {requirement.name}:
              <input
                type="checkbox"
                checked={requirement.completed}
                onChange={() => handleChange(assignment.level, requirement.id)}
              />
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserInput;
