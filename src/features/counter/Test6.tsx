import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectObjByBadCreateSelector } from "./testSlice";

export default function Test6() {
  const valueInfo = useAppSelector(selectObjByBadCreateSelector);
  console.log('Test6: createSelector 的 badcase');
  return <h1>Test6: {valueInfo.value}</h1>;
}
