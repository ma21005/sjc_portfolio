import { useState, useEffect, useRef} from 'react';

import WorkHistory from './WorkHistory';
import backgroundAudio from '../audio/backgrond.mp3';
import titleScreenButtonAudio from '../audio/titleScreenButton.mp3';
import menuScreenButtonAudio from '../audio/menuScreenButton.mp3';
import detailScreenBButtonAudio from '../audio/detailScreenBButton.mp3'
import cursorAudio from '../audio/cursor.mp3';
import powerOnAudio from '../audio/screenPowerOn.mp3';
import powerOffAudio from '../audio/screenPowerOff.mp3';

import "../style/GameBoy.css";

const GameBoy = () => {
  const [hoveredNum, setHoveredNum] = useState(1);
  const [screenPower, setScreenPower] = useState(false);
  const [screenStyle, setScreenStyle] = useState({});

  // 画面を判定するためのState
  const [titleScreen, setTitleScreen] = useState(true);
  const [menuScreen, setMenuScreen] = useState(false);
  const [detailScreen, setDetailScreen] = useState(false);

  // useRef を使ってオーディオインスタンスを管理することでBGMの再生・停止を同一インスタンスで行う
  const backgroundRef = useRef(new Audio(backgroundAudio));
  backgroundRef.current.loop = true;

  const titleScreenButton = new Audio(titleScreenButtonAudio);
  const menuScreenButton = new Audio(menuScreenButtonAudio);
  const detailScreenBButton = new Audio(detailScreenBButtonAudio);
  const powerOn = new Audio(powerOnAudio);
  const powerOff = new Audio(powerOffAudio);
  const cursor = new Audio(cursorAudio);

  const items = ['PROFILE', 'CAREER', 'SKILL','DELIVERABLE']

  const powerButtonClick = () => {
    if (screenPower) {
      // 電源オフ
      backgroundRef.current.pause();
      backgroundRef.current.currentTime = 0;

      powerOff.play();

      // 画面判定のStateをリセット
      setTitleScreen(true);
      setMenuScreen(false);
      setDetailScreen(false);
      setHoveredNum(1);
    } else {
      // 電源オン
      powerOn.play();
      backgroundRef.current.play();
    }
    setScreenPower(prevScreenPower => !prevScreenPower);
  };

  const buttonAClick = () => {
    if (!screenPower) return;

    if (titleScreen) {
        titleScreenButton.play();
        setMenuScreen(true);
        setTitleScreen(false);
    } else if (menuScreen) {
        menuScreenButton.play();
        setDetailScreen(true);
        setMenuScreen(false);
    }
  };

  const buttonBClick = () => {
    if (!screenPower) return;

    if (titleScreen) {
        titleScreenButton.play();
        setMenuScreen(true);
        setTitleScreen(false);
    } else if (!menuScreen) {
        detailScreenBButton.play();
        setDetailScreen(false);
        setMenuScreen(true);
    }
  };

  // 十字キーを押している間だけ border の色を変化させる
  const handleMouseDown = (event) => {
    event.target.style.borderColor = 'black';
  };

  // 十字キーを離すと border の色を元に戻す
  const handleMouseUp = (event) => {
    event.target.style.borderColor = '#555555';
  };

  const topBottomClick = () => {
    if (screenPower && menuScreen) {
      setHoveredNum(prevNum => (prevNum > 1 ? prevNum - 1 : 5));
      cursor.play();
    }
  };

  const bottomBottomClick = () => {
    if (screenPower && menuScreen) {
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
            titleScreen ? (
              <div className="gba-screen-top" style={screenStyle}>
                <h2>TOP SCREEN</h2>
                <h2>Please Button Click</h2>
              </div>
            ) : (
              menuScreen ? (
                <div className="gba-screen-menu">
                  {[1, 2, 3, 4, 5].map(num => (
                    <WorkHistory key={num} item={items[num-1]} isHovered={hoveredNum === num} />
                  ))}
                </div>
              ) : (
                <div className="gba-screen-detail">
                  <h1>{items[hoveredNum-1]}</h1>
                </div>
              )
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
            <div className="position-top" onClick={topBottomClick}  onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>▲</div>
            <div className="position-left" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
              <span className="left-mark">▲</span>
            </div>
            <div className="position-right" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
              <span className="right-mark">▲</span>
            </div>
            <div className="position-bottom" onClick={bottomBottomClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
              <span className="bottom-mark">▲</span>
            </div>
            <div className="position-center"></div>
          </div>
          <div className="cross-circle"></div>
          <button className="button button-a" onClick={buttonAClick}>A</button>
          <button className="button button-b" onClick={buttonBClick}>B</button>
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
