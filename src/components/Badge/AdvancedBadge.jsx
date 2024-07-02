import clsx from "clsx";

export default function AdvancedBadge({
  advancedBadgeStyles = {
    color: "#e2d212",
    backgroundColor: "white",
    fontWeight: "",
    fontSize: "1rem",
    paddingInline: "2px",
    paddingBlock: "12px",
    borderRadius: "5px",
  },
}) {
  // using inline style with regular css values and passing styleObject to style property because injecting
  // tailwind dynamically gets wacky AF

  const styleObject = {
    color: advancedBadgeStyles.color,
    backgroundColor: advancedBadgeStyles.backgroundColor,
    fontWeight: advancedBadgeStyles.fontWeight,
    fontSize: advancedBadgeStyles.fontSize,
    padding: `${advancedBadgeStyles.paddingInline} ${advancedBadgeStyles.paddingBlock}`,
    borderRadius: advancedBadgeStyles.borderRadius,
  };
  console.log(
    advancedBadgeStyles,
    "advancedBadgeStyles inside of AdvancedBadge"
  );
  console.log(styleObject, "styleObject inside AdvancedBadge");
  return (
    <div className="m-auto text-center w-20" style={styleObject}>
      Badge !!!
    </div>
  );
}
