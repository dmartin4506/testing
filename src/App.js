// src/App.js
import React, { useState } from "react";
import usersData from "./data/users";
import UserInput from "./components/UserInput";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [users, setUsers] = useState(usersData);

  const handleUpdateUser = (userId, level, requirementId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              assignments: user.assignments.map((assignment) =>
                assignment.level === level
                  ? {
                      ...assignment,
                      requirements: assignment.requirements.map((requirement) =>
                        requirement.id === requirementId
                          ? { ...requirement, completed: !requirement.completed }
                          : requirement
                      ),
                    }
                  : assignment
              ),
            }
          : user
      )
    );
  };

  // Update the completion status of level one based on requirements
  users.forEach((user) => {
    const levelOneAssignment = user.assignments.find(
      (assignment) => assignment.level === 1
    );
    if (levelOneAssignment) {
      const areAllRequirementsCompleted = levelOneAssignment.requirements.every(
        (requirement) => requirement.completed
      );
      levelOneAssignment.completed = areAllRequirementsCompleted;
    }
  });

  // Update the completion status of level two based on the updated requirements
  users.forEach((user) => {
    const levelTwoAssignment = user.assignments.find(
      (assignment) => assignment.level === 2
    );
    if (levelTwoAssignment) {
      const saProCompleted = levelTwoAssignment.requirements.some(
        (requirement) => requirement.name === "SA Pro" && requirement.completed
      );
      const saAssociateCompleted = levelTwoAssignment.requirements.some(
        (requirement) => requirement.name === "SA Associate" && requirement.completed
      );
      const specialtyCertCompleted = levelTwoAssignment.requirements.filter(
        (requirement) => requirement.name === "Specialty Cert" && requirement.completed
      ).length;
      const serviceTFCCompleted = levelTwoAssignment.requirements.some(
        (requirement) => requirement.name === "Service TFC" && requirement.completed
      );

      // Level 2 is completed if any of the specified combinations are met
      levelTwoAssignment.completed =
        saProCompleted ||
        (saAssociateCompleted && specialtyCertCompleted >= 2) ||
        serviceTFCCompleted;
    }
  });

    // Update the completion status of level three based on the updated requirements
    users.forEach((user) => {
      const levelThreeAssignment = user.assignments.find(
        (assignment) => assignment.level === 3
      );
      if (levelThreeAssignment) {
        const saProCompleted = levelThreeAssignment.requirements.some(
          (requirement) => requirement.name === "SA Pro" && requirement.completed
        );
        const serviceTFCCompleted = levelThreeAssignment.requirements.some(
          (requirement) => requirement.name === "Service TFC" && requirement.completed
        );
        const saAssociateCompleted = levelThreeAssignment.requirements.some(
          (requirement) => requirement.name === "SA Associate" && requirement.completed
        );
        const specialtyCertCompleted = levelThreeAssignment.requirements.filter(
          (requirement) => requirement.name === "Specialty Cert" && requirement.completed
        ).length;
  
        // Level 3 is completed if either (SA Pro and Service TFC) or (SA Associate and 4 Specialty Cert) are completed
        levelThreeAssignment.completed =
          (saProCompleted && serviceTFCCompleted) ||
          (saAssociateCompleted && specialtyCertCompleted >= 4);
      }
    });

      // Update the completion status of level 4
  users.forEach((user) => {
    const levelFourAssignment = user.assignments.find(
      (assignment) => assignment.level === 4
    );
    if (levelFourAssignment) {
      const saProCompleted = levelFourAssignment.requirements.filter(
        (requirement) => requirement.name === "SA Pro" && requirement.completed
      ).length;
      const serviceTFCCompleted = levelFourAssignment.requirements.filter(
        (requirement) => requirement.name === "Service TFC" && requirement.completed
      ).length;
      const specialtyCertCompleted = levelFourAssignment.requirements.filter(
        (requirement) => requirement.name === "Specialty Cert" && requirement.completed
      ).length;

      // Level 4 is complete if either (SA Pro and 2 Service TFC) or (2 SA Pro and 6 Specialty Cert) are completed
      levelFourAssignment.completed =
        (saProCompleted >= 1 && serviceTFCCompleted >= 2) ||
        (saProCompleted >= 2 && specialtyCertCompleted >= 6);
    }
  });

  return (
    <div className="App">
      <h1>Assignment Tracker</h1>
      <div className="user-input">
        {users.map((user) => (
          <UserInput
            key={user.id}
            user={user}
            onUpdateUser={handleUpdateUser}
          />
        ))}
      </div>
      <Leaderboard users={users} />
    </div>
  );
}

export default App;