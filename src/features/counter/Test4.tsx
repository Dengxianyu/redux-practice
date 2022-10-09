import React from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { selectObjGenByValueObj } from "./testSlice";

export default function Test4() {
  const valueInfo = useAppSelector(selectObjGenByValueObj({ p: '123'}), shallowEqual);
  console.log('Test4: 利用 react-redux 提供的简单 shallowEqual 或自定义的 equal 比较函数来避免 UI 的再次渲染');
  return <h1>Test4: {valueInfo.value}</h1>;
}
