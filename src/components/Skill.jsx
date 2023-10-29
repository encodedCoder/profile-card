import "./Skill.css";

export default function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skillName}</span>
      <span>{skill.level}</span>
    </div>
  );
}
