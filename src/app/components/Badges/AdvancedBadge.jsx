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
  const {
    color,
    backgroundColor,
    fontWeight,
    fontSize,
    paddingInline,
    paddingBlock,
    borderRadius,
  } = advancedBadgeStyles;

  const styleObject = {
    color: color,
    backgroundColor: backgroundColor,
    fontWeight: fontWeight,
    fontSize: fontSize,
    padding: `${paddingInline} ${paddingBlock}`,
    borderRadius: borderRadius,
  };

  return (
    <div className="m-auto text-center w-20" style={styleObject}>
      Badge
    </div>
  );
}
