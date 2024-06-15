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

  console.log(badgeStyles, "<--- badgeStyles in BadgeCreator!");
  return (
    <div>
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
  );
}
