import React, { useState, useEffect } from "react";
import "./iconBoxes.css";
import IconBox from "./IconBox/index";
import BoxContent from "../../Data/BoxContent";

const IconBoxes = () => {
  const [boxContent, setBoxContent] = useState([]);
  useEffect(() => {
    const unsubscribe = () => {
      setBoxContent(BoxContent);
    };
    // console.log(BoxContent);
    // console.log(BoxContent[0]);
    return unsubscribe();
  }, []);
  return (
    <div className="iconBoxes">
      {boxContent?.map((box, i) => (
        <div key={box.id}>
          <IconBox Icon={box.icon} Skill={box.skill} />
        </div>
      ))}
    </div>
  );
};

export default IconBoxes;
