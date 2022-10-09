import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectObjByCreateSelectorWithParam } from "./testSlice";

export default function Test6() {
  const valueInfo = useAppSelector(selectObjByCreateSelectorWithParam({}));
  console.log('Test6: selectObjByCreateSelectorWithParam 会触发几次呢？');
  return <h1>Test6: {valueInfo.value}</h1>;
}
