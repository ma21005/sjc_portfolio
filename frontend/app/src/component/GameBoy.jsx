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

  // ========== 表示されている画面の判定、状態の保存を行うState ========== //

  // タイトル画面
  const [titleScreen, setTitleScreen] = useState(true);
  // メニュー画面
  const [menuScreen, setMenuScreen] = useState(false);
  // メニュー画面に表示されている各項目の詳細画面
  const [detailScreen, setDetailScreen] = useState(false);
  // タイトル画面に戻るかどうかを選べる画面（以降：リターン画面）
  const [showReturnTitle, setShowReturnTitle] = useState(false);

  // 電源がオンかオフかを保存する
  const [screenPower, setScreenPower] = useState(false);
  // 電源オン時にタイトル画面をフェードインさせるため
  const [screenStyle, setScreenStyle] = useState({});
  // メニュー画面で現在どの項目を選択しているかを保存する
  const [hoveredNum, setHoveredNum] = useState(1);
  // ReturnTitle から前画面に戻る際に前画面が menuScreen か detailScreen かを保存する
  const [wasMenuScreen, setWasMenuScreen] = useState(false);
  // ReturnTitle のラジオボタンの状態を保存する（デフォルトは yes にチェック）
  const [selectedOption, setSelectedOption] = useState("yes");

  // メニュー画面の項目
  const columns = ['PROFILE', 'CAREER', 'SKILL', 'DELIVERABLE'];
  // 定義したメニュー画面の項目と各コンポーネントをマッピングさせる
  const columnsMap = {
    PROFILE: Profile,
    CAREER: Career,
    SKILL: Skill,
    DELIVERABLE: Deliverable
  };
  const ColumnComponent = columnsMap[columns[hoveredNum - 1]];
  // 詳細画面で 十字キー によるスクロールを実現する
  const menuScreenRef = useRef(null);


  // ===================== ボタンクリック音・BGM ===================== //

  // タイトル画面での A・Bボタン クリック
  const titleScreenButton = new Audio(titleScreenButtonAudio);
  // メニュー画面での Aボタン クリック
  const menuScreenButton = new Audio(menuScreenButtonAudio);
  // 詳細画面での Bボタン クリック
  const detailScreenBButton = new Audio(detailScreenBButtonAudio);
  // 電源ボタン クリック（オン）
  const powerOn = new Audio(powerOnAudio);
  // 電源ボタン クリック（オフ）
  const powerOff = new Audio(powerOffAudio);
  // 十字キー クリック
  const cursor = new Audio(cursorAudio);
  // 基本BGM
  const backgroundRef = useRef(new Audio(backgroundAudio));
  backgroundRef.current.loop = true;


  // ================== ボタンクリック時の挙動 ================== //

  // 電源ボタン
  const powerButtonClick = () => {
    if (screenPower) { // 電源オンの場合
      backgroundRef.current.pause();
      backgroundRef.current.currentTime = 0;
      powerOff.play();
      setTitleScreen(true); // 各Stateをリセット
      setMenuScreen(false);
      setDetailScreen(false);
      setHoveredNum(1);
      setShowReturnTitle(false);
      setSelectedOption("yes")
    } else { // 電源オフの場合
      powerOn.play();
      backgroundRef.current.play();
    }
    setScreenPower(prevScreenPower => !prevScreenPower);
  };
  // 電源ボタン クリック時にタイトル画面をフェードイン
  useEffect(() => {
    if (screenPower) {
      setScreenStyle({
        // 2秒かけてTitleコンポーネントのopacityを1に
        transition: 'opacity 2s ease'
      });
      requestAnimationFrame(() => {
        setScreenStyle(prevStyle => ({
          ...prevStyle,
          opacity: 1,
        }));
      });
    } else {
      setScreenStyle({ // 電源オフ時にopacityを再度0に設定
        opacity: 0,
      });
    }
  }, [screenPower]);
  // Aボタン
  const buttonAClick = () => {
    if (!screenPower) return; // 電源オフの場合

    if (titleScreen) { // タイトル画面の場合
        titleScreenButton.play();
        setMenuScreen(true);
        setTitleScreen(false);
    } else if (menuScreen) { // メニュー画面の場合
        menuScreenButton.play();
        setDetailScreen(true);
        setMenuScreen(false);
        setShowReturnTitle(false);
    } else if (showReturnTitle) { // リターン画面の場合
      if (selectedOption === "yes") {
        menuScreenButton.play();
        setTitleScreen(true);
        setShowReturnTitle(false);
        setHoveredNum(1);
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
  // Bボタン
  const buttonBClick = () => {
    if (!screenPower) return; // 電源オフの場合

    if (titleScreen) { // タイトル画面の場合
        titleScreenButton.play();
        setMenuScreen(true);
        setTitleScreen(false);
    } else if (showReturnTitle) { // リターン画面の場合
      detailScreenBButton.play();
      setShowReturnTitle(false);
      setSelectedOption("yes");
      if (wasMenuScreen) {
        setMenuScreen(true);
      } else {
        setDetailScreen(true)
      }
      setWasMenuScreen(false);
    } else if (detailScreen) { // 詳細画面の場合
      detailScreenBButton.play();
      setDetailScreen(false);
      setMenuScreen(true);
      setShowReturnTitle(false);
    }
  };
  // セレクトボタン
  const selectButtonClick = () => {
    if (!screenPower) return; // 電源オフの場合

    if (showReturnTitle) { // 既に リターン画面 の場合は前の画面に戻る
      menuScreenButton.play();
      setShowReturnTitle(false);
      setSelectedOption("yes");
      if (wasMenuScreen) {
        setMenuScreen(true);
      } else {
        setDetailScreen(true)
      }
    } else if (!titleScreen) { // タイトル画面 以外の場合は リターン画面 を表示させて前の画面情報を保存
      menuScreenButton.play();
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
  // 詳細画面で 十字キー 連打時にクリック音を連続して出せるようにする
  const playCursorSound = () => {
    cursor.pause();
    cursor.currentTime = 0;
    cursor.play();
  };
  // 十字キー（上）
  const topBottomClick = () => {
    if (!screenPower) return; // 電源オフの場合

    if (menuScreen) { // メニュー画面の場合
      setHoveredNum(prevNum => (prevNum > 1 ? prevNum - 1 : columns.length));
      cursor.play();
    } else if (detailScreen && ColumnComponent !== Profile) { // プロフィール以外の詳細画面の場合
      playCursorSound();
      if (menuScreenRef.current) { // 十字キー（上）で画面をスクロール
          menuScreenRef.current.scrollBy({ top: -80, behavior: 'smooth' });
        }
    }
  };
  // 十字キー（下）
  const bottomBottomClick = () => {
    if (!screenPower) return; // 電源オフの場合

    if (menuScreen) { // メニュー画面の場合
      setHoveredNum(prevNum => (prevNum < columns.length ? prevNum + 1 : 1));
      cursor.play();
    } else if (detailScreen && ColumnComponent !== Profile) { // プロフィール以外の詳細画面の場合
      playCursorSound();
      if (menuScreenRef.current) { // 十字キー（下）で画面をスクロール
        menuScreenRef.current.scrollBy({ top: 80, behavior: 'smooth' });
      }
    }
  };
  // 十字キー（左）
  const leftBottomClick = () => {
    if (showReturnTitle) { // リターン画面の場合
      cursor.play();
      if (selectedOption === "yes") {
        setSelectedOption("no");
      } else if (selectedOption === "no") {
        setSelectedOption("yes");
      }
    }
  }
  // 十字キー（右）
  const rightBottomClick = () => {
    if (showReturnTitle) { // リターン画面の場合
      cursor.play();
      if (selectedOption === "yes") {
        setSelectedOption("no");
      } else if (selectedOption === "no") {
        setSelectedOption("yes");
      }
    }
  }

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
                selectedOption={selectedOption}
                onSelectOption={setSelectedOption}
              />
            ) : detailScreen ? (
              // メニュー画面にある各項目のコンポーネントを呼び出す
              <ColumnComponent />
            ) : (
              <></>
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
