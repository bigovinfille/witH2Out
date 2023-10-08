import { useCallback } from "react";
import "./IPhoneSE12.css";

const IPhoneSE12 = () => {
  const onRectangle1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWaterTemperatureTextClick = useCallback(() => {
    // Please sync "iPhone SE - 14" to the project
  }, []);

  const onWaterConditionsTextClick = useCallback(() => {
    // Please sync "iPhone SE - 17" to the project
  }, []);

  const onEndangeredSpeciesTextClick = useCallback(() => {
    // Please sync "iPhone SE - 15" to the project
  }, []);

  const onEcoTipsTextClick = useCallback(() => {
    // Please sync "iPhone SE - 16" to the project
  }, []);

  return (
    <div className="iphone-se-12">
      <div className="iphone-se-12-child" data-scroll-to="rectangle" />
      <img
        className="iphone-se-12-item"
        alt=""
        src="/rectangle-17.svg"
        onClick={onRectangle1Click}
      />
      <img
        className="vuesaxlineartextalign-justif-icon"
        alt=""
        src="/vuesaxlineartextalignjustifycenter.svg"
      />
      <div className="water-temperature" onClick={onWaterTemperatureTextClick}>
        Water Temperature
      </div>
      <div className="water-conditions" onClick={onWaterConditionsTextClick}>
        Water Conditions
      </div>
      <div
        className="endangered-species"
        onClick={onEndangeredSpeciesTextClick}
      >
        Endangered Species
      </div>
      <div className="eco-tips" onClick={onEcoTipsTextClick}>
        Eco-Tips
      </div>
      <div className="iphone-se-12-inner" />
      <div className="line-div" />
      <div className="iphone-se-12-child1" />
    </div>
  );
};

export default IPhoneSE12;
