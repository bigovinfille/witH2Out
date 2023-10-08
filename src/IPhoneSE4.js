import { useCallback } from "react";
import "./IPhoneSE4.css";

const IPhoneSE4 = () => {
  const onRectangle2Click = useCallback(() => {
    // Please sync "iPhone SE - 5" to the project
  }, []);

  const onContinueTextClick = useCallback(() => {
    // Please sync "iPhone SE - 5" to the project
  }, []);

  return (
    <div className="iphone-se-4">
      <div className="my-age-is">My age is...</div>
      <div className="iphone-se-4-child" />
      <div className="div">12</div>
      <div className="iphone-se-4-item" />
      <div className="iphone-se-4-inner" onClick={onRectangle2Click} />
      <div className="continue" onClick={onContinueTextClick}>
        continue
      </div>
    </div>
  );
};

export default IPhoneSE4;
