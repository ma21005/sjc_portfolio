import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

import "../style/Profile.css";

const Profile = (props) => {
    // バックエンドのAPIからjsonデータを取得
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        // コンポーネントがマウントされたときにデータを取得
        axios.get('http://localhost:3000/profiles')
          .then(response => {
            setProfiles(response.data);
          })
          .catch(error => {
            console.error('Error fetching profiles:', error);  // エラーが発生した場合の処理
          });
    }, []);

    return (
      <div>
        {profiles.map(profile => (
          <li key={profile.id}>
            <p>名前: {profile.name}</p>
            <p>年齢: {profile.age}</p>
            <p>誕生日: {profile.birthday}</p>
            <p>血液型: {profile.blood_type}</p>
            <p>メールアドレス: {profile.mail_address}</p>
          </li>
        ))}
      </div>
    );
  };
  
export default Profile;
