import { atom } from "jotai";

export const gridStyleAtom = atom({
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  columnGap: "30px",
  rowGap: "10px",
  justifyItems: "start",
  alignItems: "start",
  gridAutoFlow: "row",
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
    backgroundColor: "green",
  },
]);
