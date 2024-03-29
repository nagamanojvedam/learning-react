import React from "react";
import ReactDOM from "react-dom/client";
import "./profile.css";

const person = {
  fullName: "Jonas Schmedtmann",
  photoSrc: "/images/profile.jpg",
  bio: `Hi, I'm working as a manual tester with 2.5 years of experience. I looking for a role in front-end development. I like to play PC games, cook and drive my motor cycle.`,
};

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#FF00FF",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="profile-card">
      <ProfilePhoto person={person} />
      <ProfileName person={person} />
      <ProfileSkills skills={skills} />
    </div>
  );
}

function ProfilePhoto({ person }) {
  return <img src={person.src} alt={person.fullName}></img>;
}
function ProfileName({ person }) {
  return (
    <div className="data">
      <h3>{person.fullName}</h3>
      <p>{person.bio}</p>
    </div>
  );
}

function ProfileSkills({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill-item" style={{ backgroundColor: skill.color }}>
      {skill.skill}{" "}
      {skill.level === "beginner"
        ? "👶"
        : skill.level === "intermediate"
        ? "👍"
        : "💪"}
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
