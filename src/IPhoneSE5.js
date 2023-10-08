import { useCallback } from "react";
import "./IPhoneSE5.css";

const IPhoneSE5 = () => {
  const onRectangle1Click = useCallback(() => {
    // Please sync "iPhone SE - 13" to the project
  }, []);

  return (
    <div className="iphone-se-5">
      <img
        className="vuesaxlineartextalign-justif-icon"
        alt=""
        src="/vuesaxlineartextalignjustifycenter.svg"
      />
      <div className="iphone-se-5-child" />
      <div className="iphone-se-5-item" onClick={onRectangle1Click} />
      <img
        className="magnifying-glass-1-icon"
        alt=""
        src="/magnifyingglass-1.svg"
      />
      <img className="circle-plus-1-icon" alt="" src="/circleplus-1.svg" />
      <div className="iphone-se-5-inner" />
    </div>
  );
};

export default IPhoneSE5;
