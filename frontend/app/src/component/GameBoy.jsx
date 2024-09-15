import { useState, useEffect, useRef} from 'react';

import WorkHistory from './WorkHistory';

import Title from './Title'
import Profile from './Profile';
import Career from './Career';
import Skill from './Skill';
import Deliverable from './Deliverable';
import ReturnTitle from './ReturnTitle';

import backgroundAudio from '../audio/backgrond.mp3';
import titleScreenButtonAudio from '../audio/titleScreenButton.mp3';
import menuScreenButtonAudio from '../audio/menuScreenButton.mp3';
import detailScreenBButtonAudio from '../audio/detailScreenBButton.mp3'
import cursorAudio from '../audio/cursor.mp3';
import powerOnAudio from '../audio/screenPowerOn.mp3';
import powerOffAudio from '../audio/screenPowerOff.mp3';

import "nes.css/css/nes.min.css";
import "../style/GameBoy.css";

const GameBoy = () => {
  const [hoveredNum, setHoveredNum] = useState(1);
  const [screenPower, setScreenPower] = useState(false);
  const [screenStyle, setScreenStyle] = useState({});

  // 画面を判定するためのState
  const [titleScreen, setTitleScreen] = useState(true);
  const [menuScreen, setMenuScreen] = useState(false);
  const [detailScreen, setDetailScreen] = useState(false);
  const [showReturnTitle, setShowReturnTitle] = useState(false);
  const [wasMenuScreen, setWasMenuScreen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("yes");

  // useRef を使ってオーディオインスタンスを管理することでBGMの再生・停止を同一インスタンスで行う
  const backgroundRef = useRef(new Audio(backgroundAudio));
  backgroundRef.current.loop = true;

  const titleScreenButton = new Audio(titleScreenButtonAudio);
  const menuScreenButton = new Audio(menuScreenButtonAudio);
  const detailScreenBButton = new Audio(detailScreenBButtonAudio);
  const powerOn = new Audio(powerOnAudio);
  const powerOff = new Audio(powerOffAudio);
  const cursor = new Audio(cursorAudio);

  // メニュー画面の項目を定義し、各コンポーネントとマッピング
  const columns = ['PROFILE', 'CAREER', 'SKILL', 'DELIVERABLE'];
  const columnsMap = {
    PROFILE: Profile,
    CAREER: Career,
    SKILL: Skill,
    DELIVERABLE: Deliverable
  };
  const ColumnComponent = columnsMap[columns[hoveredNum - 1]];

  // 各項目のコンポーネント内でボタンによるスクロールを実現するためのref
  const menuScreenRef = useRef(null);

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
      setShowReturnTitle(false);
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
        setShowReturnTitle(false);
    } else if (showReturnTitle) {
      if (selectedOption === "yes") {
        menuScreenButton.play();
        setTitleScreen(true);
        setShowReturnTitle(false);
      } else if (selectedOption === "no") {
        menuScreenButton.play();
        setShowReturnTitle(false)
        setSelectedOption("yes")
        if (wasMenuScreen) {
          setMenuScreen(true);
        } else {
          setDetailScreen(true)
        }
      }
    }
  };

  const buttonBClick = () => {
    if (!screenPower) return;

    if (titleScreen) {
        titleScreenButton.play();
        setMenuScreen(true);
        setTitleScreen(false);
    } else if (showReturnTitle) {
      detailScreenBButton.play();
      setShowReturnTitle(false);
      setSelectedOption("yes");
      if (wasMenuScreen) {
        setMenuScreen(true);
      } else {
        setDetailScreen(true)
      }
      setWasMenuScreen(false);
    } else if (!menuScreen) {
      detailScreenBButton.play();
      setDetailScreen(false);
      setMenuScreen(true);
      setShowReturnTitle(false);
    }
  };

  const selectButtonClick = () => {
    if (!screenPower) return;

    if (!titleScreen) {
      setShowReturnTitle(true);
      if (menuScreen) {
        setMenuScreen(false);
        setWasMenuScreen(true);
      } else {
        setDetailScreen(false);
        setWasMenuScreen(false);
      }
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
      setHoveredNum(prevNum => (prevNum > 1 ? prevNum - 1 : columns.length));
      cursor.play();
    }

    // ボタンによるスクロール処理
    if (menuScreenRef.current) {
      menuScreenRef.current.scrollBy({ top: -80, behavior: 'smooth' });
    }
  };

  const leftBottomClick = () => {
    if (showReturnTitle) {
      cursor.play();
      if (selectedOption === "yes") {
        setSelectedOption("no");
      } else if (selectedOption === "no") {
        setSelectedOption("yes");
      }
    }
  }

  const rightBottomClick = () => {
    if (showReturnTitle) {
      cursor.play();
      if (selectedOption === "yes") {
        setSelectedOption("no");
      } else if (selectedOption === "no") {
        setSelectedOption("yes");
      }
    }
  }

  const bottomBottomClick = () => {
    if (screenPower && menuScreen) {
      setHoveredNum(prevNum => (prevNum < columns.length ? prevNum + 1 : 1));
      cursor.play();
    }

    // ボタンによるスクロール処理
    if (menuScreenRef.current) {
      menuScreenRef.current.scrollBy({ top: 80, behavior: 'smooth' });
    }
  };

  // タイトル画面のフェードイン処理
  useEffect(() => {
    if (screenPower) {
      setScreenStyle({
        // 2秒かけてTitleコンポーネントのopacityを1に変化させる
        transition: 'opacity 2s ease'
      });

      requestAnimationFrame(() => {
        setScreenStyle(prevStyle => ({
          ...prevStyle,
          opacity: 1,
        }));
      });
    } else {
      // 電源オフ時にopacityを再度0に設定
      setScreenStyle({
        opacity: 0,
      });
    }
  }, [screenPower]);

  return (
    <div className="gba">
      {/* ↓↓ ============== 上画面 ============== ↓↓ */}
      <div className="gba-upper">
        {screenPower ? (
          <div className={titleScreen ? "gba-screen-top" : "gba-screen-menu"} ref={!titleScreen && !menuScreen ? menuScreenRef : null}>
            {titleScreen ? (
              <Title style={screenStyle} />
            ) : menuScreen ? (
              Array.from({ length: columns.length }, (_, index) => index + 1).map(num => (
                <WorkHistory key={num} item={columns[num - 1]} isHovered={hoveredNum === num} />
              ))
            ) : showReturnTitle ? (
              <ReturnTitle
                selectedOption={selectedOption} // 状態を渡す
                onSelectOption={setSelectedOption} // 状態を変更する関数を渡す
              />
            ) : (
              // メニュー画面にある各項目のコンポーネントを呼び出す
              <ColumnComponent />
            )}
          </div>
        ) : (
          <div className="gba-screen-off"></div>
        )}
      </div>
      {/* ↑↑ ============== 上画面 ============== ↑↑ */}
      <div className="gba-joint">
        <div className="gba-joint-line-1"></div>
        <div className="gba-joint-line-2"></div>
      </div>
      {/* ↓↓ ============== 下画面 ============== ↓↓ */}
      <div className="gba-lower">
        <div className="power">POWER</div>
        <button className="power-button" onClick={powerButtonClick}></button>
        <div className="power-circle"></div>
        {/* ↓↓ ============ 電源ランプ ============ ↓↓ */}
        <div className={screenPower ? "power-lamp-1-on" : "power-lamp-1-off"}></div>
        <div className="power-lamp-2"></div>
        {/* ↑↑ ============ 電源ランプ ============ ↑↑ */}
        <div className="gba-dpad">
          {/* ↓↓ ============ 十字キー ============== ↓↓ */}
          <div className="cross-layout">
            <div className="position-top" onClick={topBottomClick}  onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>▲</div>
            <div className="position-left" onClick={leftBottomClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
              <span className="left-mark">▲</span>
            </div>
            <div className="position-right" onClick={rightBottomClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
              <span className="right-mark">▲</span>
            </div>
            <div className="position-bottom" onClick={bottomBottomClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
              <span className="bottom-mark">▲</span>
            </div>
            <div className="position-center"></div>
          </div>
          <div className="cross-circle"></div>
          {/* ↑↑ ============ 十字キー ============== ↑↑ */}
          {/* ↓↓ ============ ABボタン ============== ↓↓ */}
          <button className="button button-a" onClick={buttonAClick}>A</button>
          <button className="button button-b" onClick={buttonBClick}>B</button>
          <div className="a-b-circle"></div>
          {/* ↑↑ ============ ABボタン ============== ↑↑ */}
        </div>
        <div className="gba-start-select">
          <button className="select-button" onClick={selectButtonClick}></button>
          <button className="start-button"></button>
          <div className="select-circle"></div>
          <div className="start-circle"></div>
          <div className="select">SELECT</div>
          <div className="start">START</div>
        </div>
      </div>
      {/* ↑↑ ============== 下画面 ============== ↑↑ */}
    </div>
  );
};

export default GameBoy;
