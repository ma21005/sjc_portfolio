import React, { useState } from "react";
import "../style/ReturnTitle.css";

const ReturnTitle = ({ selectedOption, onSelectOption, style }) => {
    // ラジオボタンの変更を処理
    const handleChange = (event) => {
      onSelectOption(event.target.value); // 親コンポーネントに変更を通知
    };

    return (
      <div className="return-title-container" style={style}>
        <h1>hogehoge</h1>
        <label>
          <input
            type="radio"
            className="nes-radio is-dark"
            name="answer"
            value="yes"
            checked={selectedOption === "yes"}
            onChange={handleChange}
          />
          <span>Yes</span>
        </label>
        <label>
          <input
            type="radio"
            className="nes-radio is-dark"
            name="answer"
            value="no"
            checked={selectedOption === "no"}
            onChange={handleChange}
          />
          <span>No</span>
        </label>
      </div>
    );
  };
  
export default ReturnTitle;
