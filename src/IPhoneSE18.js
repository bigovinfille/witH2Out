import { useCallback } from "react";
import "./IPhoneSE18.css";

const IPhoneSE18 = () => {
  const onLogo1Click = useCallback(() => {
    window.open(
      "https://www.fws.gov/office/san-francisco-bay-delta-fish-and-wildlife/species"
    );
  }, []);

  return (
    <div className="iphone-se-18">
      <img className="sort-down-1-icon" alt="" src="/sortdown-1.svg" />
      <div className="endangered-species-in">
        Endangered Species in San Francisco Bay
      </div>
      <img className="iphone-se-18-child" alt="" src="/rectangle-21@2x.png" />
      <img className="iphone-se-18-child" alt="" src="/rectangle-24@2x.png" />
      <img className="iphone-se-18-inner" alt="" src="/rectangle-22@2x.png" />
      <img className="rectangle-icon" alt="" src="/rectangle-23@2x.png" />
      <div className="shadow" />
      <div className="black-abalone">Black Abalone</div>
      <div className="shadow1" />
      <div className="shadow2" />
      <div className="coho-salmon">Coho Salmon</div>
      <div className="california-red-legged-frog">
        California Red-Legged Frog
      </div>
      <img
        className="logo-1-icon"
        alt=""
        src="/logo-1.svg"
        onClick={onLogo1Click}
      />
      <div className="more-info-here">More info here:</div>
    </div>
  );
};

export default IPhoneSE18;
