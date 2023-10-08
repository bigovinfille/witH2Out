import { useCallback } from "react";
import "./IPhoneSE13.css";

const IPhoneSE13 = () => {
  const onRectangle2Click = useCallback(() => {
    // Please sync "iPhone SE - 14" to the project
  }, []);

  const onSanFranciscoBay1Click = useCallback(() => {
    // Please sync "iPhone SE - 14" to the project
  }, []);

  return (
    <div className="iphone-se-13">
      <img
        className="vuesaxlineartextalign-justif-icon"
        alt=""
        src="/vuesaxlineartextalignjustifycenter.svg"
      />
      <div className="iphone-se-13-child" />
      <div className="iphone-se-13-item" />
      <div className="san-francisco-bay-container">
        <span>San Francisco Bay</span>
        <span className="span">{` `}</span>
      </div>
      <img
        className="magnifying-glass-1-icon"
        alt=""
        src="/magnifyingglass-1.svg"
      />
      <img className="circle-plus-1-icon" alt="" src="/circleplus-1.svg" />
      <div className="iphone-se-13-inner" />
      <div className="rectangle-div" onClick={onRectangle2Click} />
      <div
        className="san-francisco-bay-container1"
        onClick={onSanFranciscoBay1Click}
      >
        <span>San Francisco Bay</span>
        <span className="span">{` `}</span>
      </div>
      <div className="san-pablo-bay-container">
        <span>San Pablo Bay</span>
        <span className="span">{` `}</span>
      </div>
      <div className="san-leandro-bay-container">
        <span>San Leandro Bay</span>
        <span className="span">{` `}</span>
      </div>
      <div className="san-rafael-bay-container">
        <span>San Rafael Bay</span>
        <span className="span">{` `}</span>
      </div>
      <div className="suisun-bay">
        <span>Suisun Bay</span>
        <span className="span">{` `}</span>
      </div>
    </div>
  );
};

export default IPhoneSE13;
