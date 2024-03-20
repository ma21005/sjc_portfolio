import { useState } from 'react';
import "../style/WorkHistory.css";

const WorkHistory = (props) => {
    const {num, isHovered} = props;

    return (
      <div className={`work-history ${isHovered ? 'work-history-hovered' : ''}`}>
        {num}
      </div>
    );
  };
  
export default WorkHistory;