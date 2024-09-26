import React, { useEffect, useState } from 'react';
import SkillItem from './SkillItem';
import "../style/Skill.css";

const Skill = (props) => {
  const {skills, pageTop, pageBottom} = props;

  const [upAnimationClass, setUpAnimationClass] = useState('up-animation');
  const [downAnimationClass, setDownAnimationClass] = useState('down-animation');

  // スクロールによって pageTop か pageBottom が変化した場合にアニメーションをリセット
  // 上下矢印のアニメーションのズレを防ぐ
  useEffect(() => {
    setUpAnimationClass('');
    setDownAnimationClass('');
    setTimeout(() => {
      setUpAnimationClass('up-animation');
      setDownAnimationClass('down-animation');
    }, 0);
  }, [pageTop, pageBottom]);

  return (
    <div>
      {!pageTop && (
        <div className='up-arrow-container_2'>
          <p className={`up-arrow_2 ${upAnimationClass}`}>▲</p>
        </div>
      )}
      {!pageBottom && (
        <div className='down-arrow-container_2'>
          <p className={`down-arrow_2 ${downAnimationClass}`}>▲</p>
        </div>
      )}
      {skills.map(skill => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default Skill;
