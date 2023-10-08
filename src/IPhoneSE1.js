import { useCallback } from "react";
import "./IPhoneSE1.css";

const IPhoneSE1 = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "iPhone SE - 2" to the project
  }, []);

  const onStartTextClick = useCallback(() => {
    // Please sync "iPhone SE - 2" to the project
  }, []);

  return (
    <div className="iphone-se-1">
      <div className="with2out">witH2Out</div>
      <div className="rectangle-parent">
        <div className="group-child" onClick={onRectangleClick} />
        <button className="group-item" autoFocus={true} />
        <div className="start" onClick={onStartTextClick}>
          start
        </div>
      </div>
    </div>
  );
};

export default IPhoneSE1;
