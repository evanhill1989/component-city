import clsx from "clsx";
import {
  FaCircleCheck,
  FaCircleInfo,
  FaCircleXmark,
  FaCircleExclamation,
} from "react-icons/fa6";

export default function Banner({
  bannerTypes = { status: "success", isCondensed: false },
}) {
  const { status, isCondensed } = bannerTypes;

  let bannerStyles = {
    color: "green",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    icon: <FaCircleCheck />,
    title: "Congratulations",
  };

  switch (status) {
    case "success":
      bannerStyles = {
        color: "green",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
        icon: <FaCircleCheck />,
        title: "Congratulations!",
      };
      break;
    case "warning":
      bannerStyles = {
        color: "yellow",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
        icon: <FaCircleExclamation />,
        title: "Attention",
      };
      break;
    case "error":
      bannerStyles = {
        color: "red",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
        icon: <FaCircleXmark />,
        title: "There is a problem with your application",
      };
      break;
    case "neutral":
      bannerStyles = {
        color: "blue",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
        icon: <FaCircleInfo />,
        title: "Update available",
      };
      break;
  }

  const { color, message, icon, title } = bannerStyles;

  return (
    <div
      className={clsx(
        "banner rounded-md flex gap-2 p-4 items-baseline ",
        color
      )}
    >
      <p>{icon}</p>
      <div>
        <h5 className="font-semibold">{title}</h5>
        {isCondensed ? null : <p>{message}</p>}
      </div>
    </div>
  );
}
