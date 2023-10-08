import { useCallback } from "react";
import "./IPhoneSE9.css";

const IPhoneSE9 = () => {
  const onRectangle4Click = useCallback(() => {
    // Please sync "iPhone SE - 4" to the project
  }, []);

  const onContinueTextClick = useCallback(() => {
    // Please sync "iPhone SE - 4" to the project
  }, []);

  return (
    <div className="iphone-se-9">
      <div className="i-am-a">I am a...</div>
      <div className="iphone-se-9-child" />
      <div className="student">student</div>
      <div className="iphone-se-9-item" />
      <div className="iphone-se-9-inner" />
      <div className="parent">parent</div>
      <div className="rectangle-div" />
      <div className="iphone-se-9-child1" onClick={onRectangle4Click} />
      <div className="continue" onClick={onContinueTextClick}>
        continue
      </div>
      <div className="iphone-se-9-child2" />
      <div className="iphone-se-9-child3" />
      <div className="teacher">teacher</div>
    </div>
  );
};

export default IPhoneSE9;
