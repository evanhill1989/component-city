import clsx from "clsx";

export default function AdvancedBadge({ advancedBadgeStyles }) {
  const {
    color,
    backgroundColor,
    fontWeight,
    fontSizeBoy,
    paddingInline,
    paddingBlock,
    borderStyle,
    borderRadius,
  } = advancedBadgeStyles;

  return (
    <div
      className={clsx(
        color,
        backgroundColor,
        fontWeight,
        fontSizeBoy,
        paddingInline,
        paddingBlock,
        borderStyle,
        borderRadius,
        "m-auto w-20 text-center"
      )}
    >
      Badge
    </div>
  );
}
