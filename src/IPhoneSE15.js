import { useState, useCallback } from "react";
import IPhoneSE12 from "./IPhoneSE12";
import PortalPopup from "./PortalPopup";
import "./IPhoneSE15.css";

const IPhoneSE15 = () => {
  const [isIPhoneSE12Open, setIPhoneSE12Open] = useState(false);

  const openIPhoneSE12 = useCallback(() => {
    setIPhoneSE12Open(true);
  }, []);

  const closeIPhoneSE12 = useCallback(() => {
    setIPhoneSE12Open(false);
  }, []);

  return (
    <>
      <div className="iphone-se-15">
        <img
          className="vuesaxlineartextalign-justif-icon"
          alt=""
          src="/vuesaxlineartextalignjustifycenter.svg"
          onClick={openIPhoneSE12}
        />
        <div className="iphone-se-15-child" />
        <div className="iphone-se-15-item" />
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
        <div className="iphone-se-15-inner" />
        <img className="location-dot-1-icon" alt="" src="/locationdot-1.svg" />
        <div className="rectangle-div" />
        <div className="endangered-species-3-container">
          <span>{`Endangered Species: `}</span>
          <span className="span1">3+</span>
        </div>
        <div className="there-are-multiple">
          There are multiple endangered species in the San Francisco Bay area.
          For more info, scroll down.
        </div>
        <img className="red-1-icon" alt="" src="/red-1@2x.png" />
        <img className="sort-down-1-icon" alt="" src="/sortdown-1.svg" />
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

export default IPhoneSE15;
