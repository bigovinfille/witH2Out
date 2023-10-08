import { useCallback } from "react";
import "./IPhoneSE2.css";

const IPhoneSE2 = () => {
  const onActionTextClick = useCallback(() => {
    // Please sync "iPhone SE - 3" to the project
  }, []);

  return (
    <div className="iphone-se-2">
      <div className="iphone-se-2-child" />
      <div className="alert">
        <div className="content">
          <div className="title">Allow to use GPS?</div>
          <div className="desc">
            Here’s some alert text. It can span multiple lines if needed!
          </div>
        </div>
        <div className="alert-item">
          <div className="action" onClick={onActionTextClick}>
            Yes, when using app
          </div>
        </div>
        <div className="alert-item">
          <div className="action1">No, never</div>
        </div>
        <div className="alert-item2">
          <div className="action1">Action</div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneSE2;
