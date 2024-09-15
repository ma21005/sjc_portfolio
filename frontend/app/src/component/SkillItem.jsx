import "../style/SkillItem.css";

const SkillItem = ({ skill }) => {
  const skillExperience = Math.floor(skill.experience * 10) / 10;
  const fullStars = Math.floor(skillExperience);
  const partialStar = skillExperience - fullStars;
  const imagePath = `/img/skill_icons/${skill.skill_type}.png`;

  return (
    <div className="skill_container nes-container is-rounded is-dark">
      <div className="skill_icon_and_name_container">
        <div className="skill_icon_container nes-container is-rounded is-dark">
          <img className="skill_icon" src={imagePath} alt={skill.skill_type} />
        </div>
        <div className="skill_name_container">
          <p className="skill_name">{skill.skill_type}</p>
        </div>
      </div>
      <div className="skill_star_and_level_container">
        <div className="skill_star_container">
          {Array.from({ length: fullStars }).map((_, index) => (
            <img key={index} className="skill_star" src="/img/skill_star.jpg" alt="Skill Star" />
          ))}
          <img className="skill_star" src="/img/skill_star.jpg" alt="Skill Star" style={{
            clipPath: `inset(0 ${100 - partialStar * 100}% 0 0)`
          }} />
        </div>
        <div className="skill_level_container">
          <span>{skillExperience}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
