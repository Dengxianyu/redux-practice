import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectObjGenByValueObj } from "./testSlice";

const ttt = { p: '123'}

export default function Test3() {
  const valueInfo = useAppSelector(selectObjGenByValueObj({ p: '123'}));
  console.log('Test3: 衍生产生的复杂对象，则会受到其他 redux state 的改变而重新计算，进而触发 UI 再次渲染');
  return <h1>Test3: {valueInfo.value}</h1>;
}
