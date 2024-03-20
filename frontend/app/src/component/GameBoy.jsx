import { useState } from 'react';
import WorkHistory from './WorkHistory';
import cursorAudio from '../audio/cursor.mp3'
import "../style/GameBoy.css";

const GameBoy = () => {
  const [hoveredNum, setHoveredNum] = useState(1);

  const cursor = new Audio(cursorAudio);

  const topBottomClick = () => {
    setHoveredNum(prevNum => (prevNum > 1 ? prevNum - 1 : 5));
    cursor.play();
  };

  const bottomBottomClick = () => {
    setHoveredNum(prevNum => (prevNum < 5 ? prevNum + 1 : 1));
    cursor.play();
  };

  return (
    <div className="gba">
      <div className="gba-upper">
        <div className="gba-screen">
          {[1, 2, 3, 4, 5].map(num => (
            <WorkHistory key={num} num={String(num)} isHovered={hoveredNum === num} />
          ))}
        </div>
      </div>
      <div className="gba-joint">
        <div className="gba-joint-line-1"></div>
        <div className="gba-joint-line-2"></div>
      </div>
      <div className="gba-lower">
        <button className="setting-button"></button>
        <div className="setting-circle"></div>
        <div className="power-lamp-1"></div>
        <div className="power-lamp-2"></div>
        <div className="gba-dpad">
          <div className="cross-layout">
            <div className="position-top" onClick={topBottomClick}>▲</div>
            <div className="position-left"><span className="left-mark">▲</span></div>
            <div className="position-right"><span className="right-mark">▲</span></div>
            <div className="position-bottom" onClick={bottomBottomClick}><span className="bottom-mark">▲</span></div>
            <div className="position-center"></div>
          </div>
          <div className="cross-circle"></div>
          <button className="button button-a">A</button>
          <button className="button button-b">B</button>
          <div className="a-b-circle"></div>
        </div>
        <div className="gba-start-select">
          <button className="select-button"></button>
          <button className="start-button"></button>
          <div className="select-circle"></div>
          <div className="start-circle"></div>
          <div className="select">SELECT</div>
          <div className="start">START</div>
        </div>
      </div>
    </div>
  );
};

export default GameBoy;
