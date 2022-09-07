import React from "react";
import { Description } from "./model2";

interface Prop {
  itemDescription: Description;
  descriptions: Description[];
  setDescriptions: React.Dispatch<React.SetStateAction<Description[]>>;
}

const SingleDescription = ({
  itemDescription,
  descriptions,
  setDescriptions,
}: Prop) => {
  return <div>{itemDescription.itemDescription}</div>;
};

export default SingleDescription;
