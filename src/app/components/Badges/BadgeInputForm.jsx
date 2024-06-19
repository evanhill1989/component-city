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
        <label className="flex gap-3 font-medium" htmlFor="borderRadius">
          Border Radius
          <input
            type="text"
            className="px-2 font-normal"
            onChange={(event) => handleAdvancedChange(event)}
            name="borderRadius"
            id="borderRadius"
            placeholder="rounded-none"
          />
        </label>

        <label className="flex gap-3 font-medium" htmlFor="paddingInline">
          Padding Inline
          <input
            type="text"
            className="px-2 font-normal"
            onChange={(event) => handleAdvancedChange(event)}
            name="paddingInline"
            id="paddingInline"
            placeholder="py-2"
          />
        </label>
        <label className="flex gap-3 font-medium" htmlFor="paddingBlock">
          Padding Block
          <input
            type="text"
            className="px-2 font-normal"
            onChange={(event) => handleAdvancedChange(event)}
            name="paddingBlock"
            id="paddingBlock"
            placeholder="px-4"
          />
        </label>

        <label className="flex gap-3 font-medium" htmlFor="color">
          Text Color
          <input
            type="text"
            className="px-2 font-normal"
            onChange={(event) => handleAdvancedChange(event)}
            name="color"
            id="color"
            placeholder="text-sky-700"
          />
        </label>

        <label className="flex gap-3 font-medium" htmlFor="backgroundColor">
          Background Color
          <input
            type="text"
            className="px-2 font-normal"
            onChange={(event) => handleAdvancedChange(event)}
            name="backgroundColor"
            id="backgroundColor"
            placeholder="bg-slate-100"
          />
        </label>

        <label className="flex gap-3 font-medium" htmlFor="fontWeight">
          Font Weight
          <input
            type="text"
            className="px-2 font-normal"
            onChange={(event) => handleAdvancedChange(event)}
            name="fontWeight"
            id="fontWeight"
            placeholder="font-medium"
          />
        </label>

        <label className="flex gap-3 font-medium" htmlFor="fontSize">
          Font Size
          <input
            type="text"
            className="px-2 font-normal"
            onChange={(event) => handleAdvancedChange(event)}
            name="fontSize"
            id="fontSize"
            placeholder="text-base"
          />
        </label>

        <button>Advanced badge Submit</button>
      </form>
    </>
  );
}
