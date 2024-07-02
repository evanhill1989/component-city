import clsx from "clsx";

export default function Badge({
  badgeStyles = { color: "gray", isPillShape: false },
}) {
  const { color, isPillShape } = badgeStyles;

  return (
    <div className={clsx("badge m-auto", color, { "rounded-lg": isPillShape })}>
      Badge
    </div>
  );
}
