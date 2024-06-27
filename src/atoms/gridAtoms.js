import { atom } from "jotai";

export const gridStyleAtom = atom({
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "",
  gridGap: "",
  justifyItems: "start",
  alignItems: "start",
  backgroundColor: "",
});

export const gridItemNumberAtom = atom(3);

export const gridItemsAtom = atom([
  {
    id: 0,
    alignSelf: "default",
    justifySelf: "default",
    backgroundColor: "#eb4034",
  },
  {
    id: 1,
    alignSelf: "default",
    justifySelf: "default",
    backgroundColor: "#eb4034",
  },
  {
    id: 2,
    alignSelf: "default",
    justifySelf: "default",
    backgroundColor: "#eb4034",
  },
]);
