// src/data/users.js

// Define the levels and their requirements
const levels = [
    {
      level: 1,
      requirements: [
        { id: 1, name: "SA Associate", completed: false },
        { id: 2, name: "Associate Speaker", completed: false },
        // Add more requirements for level 1
      ],
    },
    {
      level: 2,
      requirements: [
        { id: 1, name: "SA Pro", completed: false },
        { id: 2, name: "SA Associate", completed: false },
        { id: 3, name: "Specialty Cert", completed: false },
        { id: 4, name: "Specialty Cert", completed: false },
        { id: 5, name: "Service TFC", completed: false },
        // Add more requirements for level 2
      ],
    },
    {
        level: 3,
        requirements: [
            { id: 1, name: "SA Pro", completed: false },
            { id: 2, name: "Service TFC", completed: false },
            { id: 3, name: "SA Associate", completed: false },
            { id: 4, name: "Specialty Cert", completed: false },
            { id: 5, name: "Specialty Cert", completed: false },
            { id: 6, name: "Specialty Cert", completed: false },
            { id: 7, name: "Specialty Cert", completed: false },
        ],
      },
        {
          level: 4,
          requirements: [
            { id: 1, name: "SA Pro", completed: false },
            { id: 2, name: "SA Pro", completed: false },
            { id: 3, name: "Service TFC", completed: false },
            { id: 4, name: "Service TFC", completed: false },
            { id: 5, name: "Specialty Cert", completed: false },
            { id: 6, name: "Specialty Cert", completed: false },
            { id: 7, name: "Specialty Cert", completed: false },
            { id: 8, name: "Specialty Cert", completed: false },
            { id: 9, name: "Specialty Cert", completed: false },
            { id: 10, name: "Specialty Cert", completed: false },
          ],
    }

   
    // Define more levels as needed
  ];
  
  // Define users and apply levels to them
  const users = [
    {
      id: 1,
      name: "User 1",
      assignments: levels.map((levelData) => ({
        level: levelData.level,
        requirements: levelData.requirements.map((requirementData) => ({
          ...requirementData,
        })),
      })),
    },
    {
      id: 2,
      name: "User 2",
      assignments: levels.map((levelData) => ({
        level: levelData.level,
        requirements: levelData.requirements.map((requirementData) => ({
          ...requirementData,
        })),
      })),
    },
    {
      id: 3,
      name: "User 3",
      assignments: levels.map((levelData) => ({
        level: levelData.level,
        requirements: levelData.requirements.map((requirementData) => ({
          ...requirementData,
        })),
      })),
    },
    {
      id: 4,
      name: "User 4",
      assignments: levels.map((levelData) => ({
        level: levelData.level,
        requirements: levelData.requirements.map((requirementData) => ({
          ...requirementData,
        })),
      })),
    },
    // Define more users as needed
  ];
  
  export default users;
  