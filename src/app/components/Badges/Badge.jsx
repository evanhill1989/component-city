import clsx from "clsx";

export default function Badge({ badgeStyles }) {
  const { color, isPillShape } = badgeStyles;

  return (
    <div className={clsx("badge m-auto", color, { "rounded-lg": isPillShape })}>
      Badge
    </div>
  );
}
