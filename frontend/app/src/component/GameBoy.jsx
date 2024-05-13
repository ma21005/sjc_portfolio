import { useState, useEffect, useRef} from 'react';

import WorkHistory from './WorkHistory';
import backgroundAudio from '../audio/backgrond.mp3'
import topMenuButtonAudio from '../audio/topMenuButton.mp3'
import cursorAudio from '../audio/cursor.mp3'
import powerOnAudio from '../audio/screenPowerOn.mp3'
import powerOffAudio from '../audio/screenPowerOff.mp3'

import "../style/GameBoy.css";

const GameBoy = () => {
  const [hoveredNum, setHoveredNum] = useState(1);
  const [screenPower, setScreenPower] = useState(false);
  const [screenStyle, setScreenStyle] = useState({});
  const [topMenu, setTopMenu] = useState(true);

  // useRef を使ってBGMの再生・停止を同一インスタンスで行う
  const backgroundRef = useRef(new Audio(backgroundAudio));

  const topMenuButton = new Audio(topMenuButtonAudio);
  const powerOn = new Audio(powerOnAudio);
  const powerOff = new Audio(powerOffAudio);
  const cursor = new Audio(cursorAudio);

  backgroundRef.loop = true;

  const powerButtonClick = () => {
    if (screenPower) {
      // BGMを停止する
      backgroundRef.current.pause();
      backgroundRef.current.currentTime = 0;

      powerOff.play();
      setTopMenu(true);
      setHoveredNum(1);
    } else {
      powerOn.play();
      // BGMを再生
      backgroundRef.current.play();
    }
    setScreenPower(prevScreenPower => !prevScreenPower);
  };

  const buttonAorBClick = () => {
    if (screenPower && topMenu) {
      topMenuButton.play();
      setTopMenu(false);
    }
  };

  const topBottomClick = () => {
    if (screenPower && !topMenu) {
      setHoveredNum(prevNum => (prevNum > 1 ? prevNum - 1 : 5));
      cursor.play();
    }
  };

  const bottomBottomClick = () => {
    if (screenPower && !topMenu) {
      setHoveredNum(prevNum => (prevNum < 5 ? prevNum + 1 : 1));
      cursor.play();
    }
  };

  useEffect(() => {
    if (screenPower) {
      setScreenStyle({
        // 1秒かけて背景色をwhiteに変化させる
        backgroundColor: 'white',
        transition: 'background-color 1s ease'
      });
    }
  }, [screenPower]); // screenPowerの変化時に再計算

  return (
    <div className="gba">
      <div className="gba-upper">
        { screenPower ? (
          topMenu ? (
            <div className="gba-screen-top" style={screenStyle}>
              <p>TOP MENU</p>
              <p>Please Button Click</p>
            </div>
          ) : (
            <div className="gba-screen-on">
              {[1, 2, 3, 4, 5].map(num => (
                <WorkHistory key={num} num={String(num)} isHovered={hoveredNum === num} />
              ))}
            </div>
          )
        ) : (
          <div className="gba-screen-off">
          </div>
        ) }
      </div>
      <div className="gba-joint">
        <div className="gba-joint-line-1"></div>
        <div className="gba-joint-line-2"></div>
      </div>
      <div className="gba-lower">
        <div className="power">POWER</div>
        <button className="power-button" onClick={powerButtonClick}></button>
        <div className="power-circle"></div>
        { screenPower ? (
          <div className="power-lamp-1-on"></div>
        ) : (
          <div className="power-lamp-1-off"></div>
        ) }
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
          <button className="button button-a" onClick={buttonAorBClick}>A</button>
          <button className="button button-b" onClick={buttonAorBClick}>B</button>
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
