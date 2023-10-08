import { useCallback } from "react";
import "./IPhoneSE3.css";

const IPhoneSE3 = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "iPhone SE - 9" to the project
  }, []);

  return (
    <div className="iphone-se-3">
      <div className="i-am-a">I am a...</div>
      <div className="iphone-se-3-child" onClick={onRectangleClick} />
      <div className="student">student</div>
      <div className="iphone-se-3-item" />
      <div className="iphone-se-3-inner" />
      <div className="parent">parent</div>
      <div className="rectangle-div" />
      <div className="iphone-se-3-child1" />
      <div className="continue">continue</div>
      <div className="iphone-se-3-child2" />
      <div className="iphone-se-3-child3" />
      <div className="teacher">teacher</div>
    </div>
  );
};

export default IPhoneSE3;
