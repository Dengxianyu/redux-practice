import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectObjByCreateSelector } from "./testSlice";

export default function Test5() {
  const valueInfo = useAppSelector(selectObjByCreateSelector);
  console.log('Test5: 利用 createSelector 缓存必要依赖，从而让衍生计算部分都只在必要的时候发生');
  return <h1>Test5: {valueInfo.otherProp}</h1>;
}
