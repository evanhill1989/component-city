import React from "react";

export default function InputBox({
  name,
  id,
  onChangeFn,
  labelText,
  placeholder,
}) {
  return (
    <>
      <label className="flex gap-3 font-medium" htmlFor="borderRadius">
        {labelText}
        <input
          type="text"
          className="px-2 font-normal"
          onChange={(event) => onChangeFn(event)}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}
