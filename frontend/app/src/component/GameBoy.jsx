import WorkHistory from './WorkHistory';
import "../style/GameBoy.css";

const GameBoy = () => {
  return (
    <div className="gba">
      <div className="gba-upper">
        <div className="gba-screen">
          <WorkHistory num="1"/>
          <WorkHistory num="2"/>
          <WorkHistory num="3"/>
          <WorkHistory num="4"/>
        </div>
      </div>
      <div className="gba-joint"></div>
      <div className="gba-lower">
        <button className="setting-button"></button>
        <div className="setting-circle"></div>
        <div className="power-lamp-1"></div>
        <div className="power-lamp-2"></div>
        <div className="gba-dpad">
          <div className="cross-layout">
            <div className="position-top">▲</div>
            <div className="position-left"><span className="left-mark">▲</span></div>
            <div className="position-right"><span className="right-mark">▲</span></div>
            <div className="position-bottom"><span className="bottom-mark">▲</span></div>
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
