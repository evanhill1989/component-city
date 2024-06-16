// dynamic example algo
// color = radial
// square = radial
// need a singular badge component
// badgeExample imports this and demonstrates the generated code
// tooltip

"use client";

import { useState } from "react";
import Badge from "./Badge";
export default function BadgeCreator() {
  const [badgeStyles, setBadgeStyles] = useState({
    color: "gray",
    isPillShape: false,
  });
  const [advancedTabIsOpen, setAdvancedTabIsOpen] = useState(false);
  const [advancedStyles, setAdvancedStyles] = useState({
    color: "gray",
    backgroundColor: "black",
    fontWeight: "medium",
    fontSize: "1rem",
    padding: "2px 12px",
    borderStyle: "none",
    borderRadius: "0 0 0 0",
  });

  function handleColorChange(event) {
    setBadgeStyles((prevStyles) => ({
      ...prevStyles,
      color: event.target.value,
    }));
  }

  function handleShapeChange() {
    setBadgeStyles((prevStyles) => ({
      ...prevStyles,
      isPillShape: !prevStyles.isPillShape,
    }));
  }

  function toggleAdvancedOptions(tabClicked) {
    if (tabClicked === "basic") {
      setAdvancedTabIsOpen(false);
    } else {
      setAdvancedTabIsOpen(true);
    }
  }

  function handleAdvancedChange(event) {}
  console.log(badgeStyles, "<--- badgeStyles in BadgeCreator!");
  return (
    <div>
      <div className="flex gap-2">
        <h4
          className="subsection--title bg-slate-100 ml-0 px-2 pt-1 cursor-pointer"
          onClick={() => toggleAdvancedOptions("basic")}
        >
          Basic
        </h4>
        <h4
          className="subsection--title bg-emerald-200 px-2 pt-1 cursor-pointer"
          onClick={() => toggleAdvancedOptions("advanced")}
        >
          Advanced
        </h4>
      </div>
      {advancedTabIsOpen ? (
        <div className="badge-creator--advanced bg-emerald-200 p-2 grid grid-flow-row gap-2">
          <label htmlFor="">Border Radius</label>
          <input
            type="text"
            onChange={handleAdvancedChange}
            name="borderRadius"
            id="borderRadius"
            placeholder="0 0 0 0"
          />
          <label htmlFor="">Padding</label>
          <input
            type="text"
            onChange={handleAdvancedChange}
            name="padding"
            id="padding"
            placeholder="2px 12px"
          />
          <label htmlFor="">Text Color</label>
          <input
            type="text"
            onChange={handleAdvancedChange}
            name="backgroundColor"
            id="backgroundColor"
            placeholder="gray"
          />
          <Badge badgeStyles={badgeStyles} />
        </div>
      ) : (
        <div className="badge-creator--basic bg-slate-100 p-2 flex flex-col justify-start items-start gap-1">
          <select onChange={handleColorChange} name="colors" id="color-select">
            <option value="gray">Gray</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">blue</option>
            <option value="indigo">Indigo</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
          </select>
          <select onChange={handleShapeChange} name="shapes" id="shape-select">
            <option value="false">Square</option>
            <option value="true">Pill</option>
          </select>
          <Badge badgeStyles={badgeStyles} />
        </div>
      )}
    </div>
  );
}
