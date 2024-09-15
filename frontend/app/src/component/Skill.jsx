import { useState, useEffect } from 'react';
import axios from 'axios';

import SkillItem from './SkillItem';

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/skills')
      .then(response => setSkills(response.data))
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  return (
    <div>
      {skills.map(skill => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default Skill;
