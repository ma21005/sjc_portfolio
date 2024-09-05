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
        <ul>
        {skills.map(skill => {
          // 熟練度(skill.experience)の整数部分の数だけ全ての星を表示し
          // 小数部分に応じて星を部分的に表示させるためにそれぞれ分ける
          const fullStars = Math.floor(skill.experience);  // 整数部分
          const partialStar = skill.experience - fullStars;  // 小数部分

          return (
            <React.Fragment key={skill.id}>
              <div>
                <h2>{skill.skill_type}</h2>
                <p>{skill.experience}</p>
                <div>
                  {/* 整数部分に応じて星を表示 */}
                  {Array.from({ length: fullStars }).map((_, index) => (
                    <img className="skill_star" src="/img/skill_star.jpg" alt="Skill Star" />
                  ))}
                  {/* 小数部分に応じて星を部分的に表示 */}
                  <img className="skill_star" src="/img/skill_star.jpg" alt="Skill Star" style={{  
                        clipPath: `inset(0 ${100 - partialStar * 100}% 0 0)`
                      }} />
                </div>
              </div>
            </React.Fragment>
          );
        })}
        </ul>
      </div>
    );
  };
  
export default Skill;
