import "./GameBoy.css";

const GameBoy = () => {
  return (
    <div className="gba">
      <div className="gba-upper">
        <div className="gba-screen"></div>
      </div>
      <div className="gba-joint"></div>
      <div className="gba-lower">
        <button className="setting-button"></button>
        <div className="gba-dpad">
          <div class="cross-layout">
            <div class="position-top"></div>
            <div class="position-left"></div>
            <div class="position-right"></div>
            <div class="position-bottom"></div>
            <div class="position-center"></div>
          </div>
          <button className="button button-a">A</button>
          <button className="button button-b">B</button>
        </div>
        <div className="gba-start-select">
          <button className="start-button"></button>
          <button className="select-button"></button>
        </div>
      </div>
    </div>
  );
};

export default GameBoy;
