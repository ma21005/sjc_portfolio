// import { useState } from 'react';
import "../style/WorkHistory.css";

const WorkHistory = (props) => {
    const {item, isHovered} = props;

    return (
      <div className={`work-history ${isHovered ? 'work-history-hovered' : ''}`}>
        {item}
      </div>
    );
  };
  
export default WorkHistory;
