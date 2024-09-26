import SkillItem from './SkillItem';
import "../style/Skill.css";

const Skill = (props) => {
  const {skills, pageTop, pageBottom} = props;

  return (
    <div>
      {!pageTop && (
        <div className='up-arrow-container_2'>
          <p className="up-arrow_2">▲</p>
        </div>
      )}
      {!pageBottom && (
        <div className='down-arrow-container_2'>
          <p className="down-arrow_2">▲</p>
        </div>
      )}
      {skills.map(skill => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default Skill;
