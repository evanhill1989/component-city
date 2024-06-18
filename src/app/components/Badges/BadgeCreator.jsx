// dynamic example algo
// color = radial
// square = radial
// need a singular badge component
// badgeExample imports this and demonstrates the generated code
// tooltip

"use client";

import { useState } from "react";
import Badge from "./Badge";
import AdvancedBadge from "./AdvancedBadge";
import clsx from "clsx";
export default function BadgeCreator() {
  const [badgeStyles, setBadgeStyles] = useState({
    color: "gray",
    isPillShape: false,
  });
  const [advancedTabIsOpen, setAdvancedTabIsOpen] = useState(false);
  const [advancedBadgeStyles, setAdvancedBadgeStyles] = useState({
    color: "",
    backgroundColor: "bg-slate-100",
    fontWeight: "",
    fontSizeBoy: "",
    paddingInline: "",
    paddingBlock: "",
    borderStyle: "",
    borderRadius: "",
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

  function handleAdvancedChange(event) {
    const name = event.target.id;
    const value = event.target.value;
    console.log("styles inside handleAdvancedChange", advancedBadgeStyles);

    setAdvancedBadgeStyles((prevStyles) => ({
      ...prevStyles,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="flex gap-2">
        <h4
          className="subsection--title bg-slate-100 ml-0 px-2 pt-1 cursor-pointer "
          onClick={() => toggleAdvancedOptions("basic")}
        >
          Basic
        </h4>
        <h4
          className="subsection--title bg-emerald-200 px-2 pt-1 cursor-pointer font-semibold"
          onClick={() => toggleAdvancedOptions("advanced")}
        >
          Advanced
        </h4>
      </div>
      {advancedTabIsOpen ? (
        <div className="badge-creator--advanced  bg-emerald-200">
          <div className="badge-creator-inputs p-6 grid grid-flow-row grid-cols-2 gap-4 text-sm">
            <label className="flex gap-3 font-medium" htmlFor="">
              Border Radius
              <input
                type="text"
                className="px-2 font-normal"
                onChange={handleAdvancedChange}
                name="borderRadius"
                id="borderRadius"
                placeholder="rounded-none"
              />
            </label>

            <label className="flex gap-3 font-medium" htmlFor="">
              Padding Inline
              <input
                type="text"
                className="px-2 font-normal"
                onChange={handleAdvancedChange}
                name="paddingInline"
                id="paddingInline"
                placeholder="py-1"
              />
            </label>
            <label className="flex gap-3 font-medium" htmlFor="">
              Padding Block
              <input
                type="text"
                className="px-2 font-normal"
                onChange={handleAdvancedChange}
                name="paddingBlock"
                id="paddingBlock"
                placeholder="px-4"
              />
            </label>

            <label className="flex gap-3 font-medium" htmlFor="">
              Text Color
              <input
                type="text"
                className="px-2 font-normal"
                onChange={handleAdvancedChange}
                name="backgroundColor"
                id="backgroundColor"
                placeholder="text-black"
              />
            </label>

            <label className="flex gap-3 font-medium" htmlFor="">
              Background Color
              <input
                type="text"
                className="px-2 font-normal"
                onChange={handleAdvancedChange}
                name="backgroundColor"
                id="backgroundColor"
                placeholder="bg-slate-100"
              />
            </label>

            <label className="flex gap-3 font-medium" htmlFor="">
              Font Weight
              <input
                type="text"
                className="px-2 font-normal"
                onChange={handleAdvancedChange}
                name="fontWeight"
                id="fontWeight"
                placeholder="font-medium"
              />
            </label>

            <label className="flex gap-3 font-medium" htmlFor="">
              Font Size
              <input
                type="text"
                className="px-2 font-normal"
                onChange={handleAdvancedChange}
                name="fontSizeBoy"
                id="fontSizeBoy"
                placeholder="text-base"
              />
            </label>

            <label className="flex gap-3 font-medium" htmlFor="">
              Border Style
              <input
                type="text"
                className="px-2 font-normal"
                onChange={handleAdvancedChange}
                name="borderStyle"
                id="borderStyle"
                placeholder="none"
              />
            </label>
          </div>
          <div className="m-auto w-full bg-emerald-200 p-10">
            {/* advancedBadgeStyles.fontWeight,
                advancedBadgeStyles.fontSizeBoy,
                advancedBadgeStyles.paddingInline,
                advancedBadgeStyles.paddingBlock,
                advancedBadgeStyles.borderStyle,
                advancedBadgeStyles.borderRadius, */}
            <div
              className={`
             ${advancedBadgeStyles.backgroundColor}
             
                `}
            >
              Badge
            </div>
            {/* <AdvancedBadge advancedBadgeStyles={advancedBadgeStyles} /> */}
          </div>
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
