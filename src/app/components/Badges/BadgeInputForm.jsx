import InputBox from "../InputBox";

const badgeInputs = [
  {
    id: "borderRadius",
    labelText: "Border Radius",
    className: "px-2 font-normal",
    name: "borderRadius",
    placeholder: "0",
  },
  {
    id: "paddingInline",
    labelText: "Padding Inline",
    className: "px-2 font-normal",
    name: "paddingInline",
    placeholder: "2px",
  },
  {
    id: "paddingBlock",
    labelText: "Padding Block",
    className: "px-2 font-normal",
    name: "paddingBlock",
    placeholder: "12px",
  },
  {
    id: "color",
    labelText: "Text Color",
    className: "px-2 font-normal",
    name: "color",
    placeholder: "#e2d212",
  },
  {
    id: "backgroundColor",
    labelText: "Background Color",
    className: "px-2 font-normal",
    name: "backgroundColor",
    placeholder: "white",
  },
  {
    id: "fontWeight",
    labelText: "Font Weight",
    className: "px-2 font-normal",
    name: "fontWeight",
    placeholder: "",
  },
  {
    id: "fontSize",
    labelText: "Font Size",
    className: "px-2 font-normal",
    name: "fontSize",
    placeholder: "1rem",
  },
];

export default function BadgeInputForm({
  handleAdvancedChange,
  handleAdvancedBadgeSubmit,
}) {
  return (
    <>
      <form
        onSubmit={(event) => handleAdvancedBadgeSubmit(event)}
        className="badge-creator-inputs p-6 grid grid-flow-row grid-cols-2 gap-4 text-sm"
      >
        {badgeInputs.map((item) => (
          <InputBox
            key={item.id}
            labelText={item.labelText}
            name={item.name}
            id={item.id}
            onChangeFn={handleAdvancedChange}
            placeholder={item.placeholder}
          />
        ))}

        <button>Advanced badge Submit</button>
      </form>
    </>
  );
}
