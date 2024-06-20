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
import BadgeInputForm from "./BadgeInputForm";
export default function BadgeCreator({ children }) {
  const [badgeStyles, setBadgeStyles] = useState({
    color: "gray",
    isPillShape: false,
  });
  const [advancedTabIsOpen, setAdvancedTabIsOpen] = useState(false);
  const [advancedBadgeStyles, setAdvancedBadgeStyles] = useState({
    color: "#e2d212",
    backgroundColor: "white",
    fontWeight: "",
    fontSize: "1rem",
    paddingInline: "2px",
    paddingBlock: "12px",

    borderRadius: "5px",
  });
  /*   The default styles render correctly on load.
When I reset these badge styles with my form only borderRadius
and fontWeight seem to react predictably.
However when I type in the exact existing default values above and 
submit the form ALL correct values persist to the new render.
If I only change borderRadius to rounded-lg, but type in all the rest
exactly as default it rerenders with the correct new borderRadius, and
all the other values persist correctly.
If I then only change fontWeight, everything re-renders correctly again.
If I then change only text color, everything re-renders correctly again.
If I then change fontSize, nothing happens, but it doesn't break everything.
If I then change backgroundColor to bg-slate-800 , the backgroundColor goes away
entirely.
I can change paddingBlock to px-2 , reset it back to px-4, but anything else 
returns undefined i guess...


Fuck , so I guess the issue is tailwind?

Wow, so this is some wild shit -- the only things i can change it to are values
that i guess my browser has previously cached.And this is true across the whole app --
so if the tailwind value has been used anywhere at any level in any component then the 
browser has cached it and that value can be inputted into the form and dynamically render an
effect to the UI
ANd it's not the Browser cache!?!?! I emptied everything out of Firefox, and haven't been using
it for this at all anyway, and it's the exact same behavior, and it remember the exact same 
tailwind classes that had been used by the other browser. The only tailwind styles that worked
are styles that have, at SOME/ANY point been rendered previously from this project's code.



If I put a dynamic stylesheet directly in my component ...
 */

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
    // console.log(name, value, "name and value");
    // console.log("styles inside handleAdvancedChange", advancedBadgeStyles);

    // setAdvancedBadgeStyles((prevStyles) => ({
    //   ...prevStyles,
    //   [name]: value,
    // }));
  }

  function handleAdvancedBadgeSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const color = formData.get("color");
    const backgroundColor = formData.get("backgroundColor");
    const fontWeight = formData.get("fontWeight");
    const fontSize = formData.get("fontSize");
    const paddingInline = formData.get("paddingInline");
    const paddingBlock = formData.get("paddingBlock");

    const borderRadius = formData.get("borderRadius");
    console.log(
      color,
      backgroundColor,
      fontWeight,
      fontSize,
      paddingInline,
      paddingBlock,
      borderRadius
    );
    setAdvancedBadgeStyles({
      color,
      backgroundColor,
      fontWeight,
      fontSize,
      paddingInline,
      paddingBlock,
      borderRadius,
    });
  }

  return (
    <div>
      {children}
      <div className="flex gap-2">
        <h4
          className="subsection--title bg-slate-100 ml-0 px-2 pt-1 cursor-pointer "
          onClick={() => toggleAdvancedOptions("basic")}
        >
          Basic
        </h4>
        <h4
          className="subsection--title bg-emerald-200 px-28 pt-1 cursor-pointer font-semibold"
          onClick={() => toggleAdvancedOptions("advanced")}
        >
          Advanced
        </h4>
      </div>
      {advancedTabIsOpen ? (
        <div className="badge-creator--advanced  bg-emerald-200">
          <BadgeInputForm
            handleAdvancedChange={handleAdvancedChange}
            handleAdvancedBadgeSubmit={handleAdvancedBadgeSubmit}
          />
          <div className="m-auto w-full bg-emerald-200 p-10">
            <AdvancedBadge advancedBadgeStyles={advancedBadgeStyles} />
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
