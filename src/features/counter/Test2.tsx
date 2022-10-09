import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCount } from "./counterSlice";
import { selectValueObj } from "./testSlice";

export default function Test2() {
  const valueObj = useAppSelector(selectValueObj);
  // const count = useAppSelector(selectCount);
  console.log('Test2：直接取store内复杂对象时，也不会收到其他 redux state 的改变而改变');
  return <h1>Test2: {valueObj.value}</h1>;
}
