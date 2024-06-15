import clsx from "clsx";

export default function Badge({ badgeStyles }) {
  const { color, isPillShape } = badgeStyles;
  console.log("color:", color, "isPillShape:", isPillShape);
  return (
    <div className={clsx("badge", color, { "rounded-lg": isPillShape })}>
      Badge
    </div>
  );
}
