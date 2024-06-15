import clsx from "clsx";

export default function BadgeExamples() {
  const badge = "badge";

  const colorArray = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  return (
    <div className="badges-pill grid grid-cols-8 gap-2 ">
      {colorArray.map((color) => (
        <div key={color} className={clsx("badge rounded-lg", color)}>
          {badge}
        </div>
      ))}

      {colorArray.map((color) => (
        <div key={color} className={clsx("badge badge-square", color)}>
          {badge}
        </div>
      ))}
    </div>
  );
}
