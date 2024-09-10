import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

import "../style/Skill.css";

const Skill = (props) => {
    // バックエンドのAPIからjsonデータを取得
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // コンポーネントがマウントされたときにデータを取得
        axios.get('http://localhost:3000/skills')
          .then(response => {
            setSkills(response.data);
          })
          .catch(error => {
            console.error('Error fetching skills:', error);  // エラーが発生した場合の処理
          });
    }, []);

    return (
      <div>
        {skills.map(skill => {
          // 熟練度(skill.experience)の整数部分の数だけ全ての星を表示し
          // 小数部分に応じて星を部分的に表示させるためにそれぞれ分ける
          const skillExperience = Math.floor(skill.experience * 10) / 10;  // 小数点第二位以降を切り捨て
          const fullStars = Math.floor(skillExperience);  // 整数部分
          const partialStar = skillExperience - fullStars;  // 小数部分

          // スキル名(skill.skill_type)に基づく画像パス
          const imagePath = `/img/skill_icons/${skill.skill_type}.png`;

          return (
            <React.Fragment key={skill.id}>
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
                    {/* 整数部分に応じて星を表示 */}
                    {Array.from({ length: fullStars }).map((_, index) => (
                      <img key={index} className="skill_star" src="/img/skill_star.jpg" alt="Skill Star" />
                    ))}
                    {/* 小数部分に応じて星を部分的に表示 */}
                    <img className="skill_star" src="/img/skill_star.jpg" alt="Skill Star" style={{
                      clipPath: `inset(0 ${100 - partialStar * 100}% 0 0)`
                    }} />
                  </div>
                  <div className="skill_level_container">
                    <span>{skillExperience}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  };
  
export default Skill;
