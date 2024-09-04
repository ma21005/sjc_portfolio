import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

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
        {skills.map(skill => (
          <React.Fragment key={skill.id}>
            <li>{skill.skill_type}</li>
            <li>Experience: {skill.experience}</li>
          </React.Fragment>
        ))}
        </ul>
      </div>
    );
  };
  
export default Skill;