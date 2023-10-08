import { useState, useCallback } from "react";
import IPhoneSE12 from "./IPhoneSE12";
import PortalPopup from "./PortalPopup";
import "./IPhoneSE17.css";

const IPhoneSE17 = () => {
  const [isIPhoneSE12Open, setIPhoneSE12Open] = useState(false);

  const openIPhoneSE12 = useCallback(() => {
    setIPhoneSE12Open(true);
  }, []);

  const closeIPhoneSE12 = useCallback(() => {
    setIPhoneSE12Open(false);
  }, []);

  return (
    <>
      <div className="iphone-se-17">
        <img
          className="vuesaxlineartextalign-justif-icon"
          alt=""
          src="/vuesaxlineartextalignjustifycenter.svg"
          onClick={openIPhoneSE12}
        />
        <div className="iphone-se-17-child" />
        <div className="iphone-se-17-item" />
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
        <div className="iphone-se-17-inner" />
        <img className="location-dot-1-icon" alt="" src="/locationdot-1.svg" />
        <div className="rectangle-div" />
        <div className="water-conditions-swipe-container">
          <p className="water-conditions">Water Conditions:</p>
          <p className="water-conditions">&nbsp;</p>
          <p className="water-conditions">
            Swipe to see detailed water conditions
          </p>
        </div>
        <div className="text">
          <p className="water-conditions">&nbsp;</p>
        </div>
        <div className="text1">
          <p className="water-conditions">&nbsp;</p>
        </div>
        <img className="sort-down-2-icon" alt="" src="/sortdown-2.svg" />
        <img className="fishy-1-icon" alt="" src="/fishy-1@2x.png" />
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

export default IPhoneSE17;
