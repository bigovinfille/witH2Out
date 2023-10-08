import { useState, useCallback } from "react";
import IPhoneSE12 from './IPhoneSE12'
import PortalPopup from './PortalPopup'
import "./IPhoneSE14.css";

const IPhoneSE14 = () => {
  const [isIPhoneSE12Open, setIPhoneSE12Open] = useState(false);

  const openIPhoneSE12 = useCallback(() => {
    setIPhoneSE12Open(true);
  }, []);

  const closeIPhoneSE12 = useCallback(() => {
    setIPhoneSE12Open(false);
  }, []);

  return (
    <>
      <div className="iphone-se-14">
        <img
          className="vuesaxlineartextalign-justif-icon"
          alt=""
          src="/vuesaxlineartextalignjustifycenter.svg"
          onClick={openIPhoneSE12}
        />
        <div className="iphone-se-14-child" />
        <div className="iphone-se-14-item" />
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
        <div className="iphone-se-14-inner" />
        <img className="location-dot-1-icon" alt="" src="/locationdot-1.svg" />
        <div className="rectangle-div" />
        <div className="data-pulled-at">Data pulled at</div>
        <div className="water-temperature">{`Water Temperature: `}</div>
        <div className="remember-to-bring">
          Remember to bring reef safe sunscreen and leave no belongings.
        </div>
      </div>
      {isIPhoneSE12Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeIPhoneSE12}
        >
          <IPhoneSE12 onClose={closeIPhoneSE12} />
        </PortalPopup>
      )}
    </>
  );
};

export default IPhoneSE14;
