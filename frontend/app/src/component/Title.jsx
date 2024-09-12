// import { useState, useEffect } from 'react';
// import React from 'react';
// import axios from 'axios';

import "../style/Title.css";

const Title = ({ style }) => {
    return (
      <div className="title-container" style={style}>
        <img className="title-image" src="/img/cat_icons/title_image.png" alt="Title Image" />
        <div className="title-message-container">
          <p>Please Button Click</p>
        </div>
      </div>
    );
  };
  
export default Title;
