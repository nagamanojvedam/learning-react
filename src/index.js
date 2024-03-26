import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const person = {
  fullName: "Jonas Schmedtmann",
  photoSrc: "/images/profile.jpg",
  bio: `Hi, I'm working as a manual tester with 2.5 years of experience. I looking for a role in front-end development. I like to play PC games, cook and drive my motor cycle.`,
  skills: [
    "Java 👌",
    "Python 😊",
    "HTML 😊",
    "CSS 😊",
    "JavaScript 😊",
    "React 😒",
  ],
};

function App() {
  return (
    <div className="profile-card">
      <ProfilePhoto src={person.photoSrc} fullName={person.fullName} />
      <ProfileName fullName={person.fullName} bio={person.bio} />
      <ProfileSkills skills={person.skills} />
    </div>
  );
}

function ProfilePhoto(props) {
  return <img src={props.src} alt={props.fullName}></img>;
}
function ProfileName(props) {
  return (
    <div className="data">
      <h3>{props.fullName}</h3>
      <p>{props.bio}</p>
    </div>
  );
}

function ProfileSkills(props) {
  return (
    <div className="skill-list">
      <Skill skill={props.skills[0]} bgColor="rgb(254, 47, 47)" />
      <Skill skill={props.skills[1]} bgColor="rgb(59, 255, 59)" />
      <Skill skill={props.skills[2]} bgColor="rgb(50, 50, 255)" />
      <Skill skill={props.skills[3]} bgColor="rgb(255, 24, 243)" />
      <Skill skill={props.skills[4]} bgColor="rgb(255, 255, 62)" />
      <Skill skill={props.skills[5]} bgColor="rgb(48, 255, 255)" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill-item" style={{ backgroundColor: props.bgColor }}>
      {props.skill}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
