import React from "react";
import { store } from "../../app/store";

export default function Test1() {
  const value = store.getState().counter.value;
  console.log('Test1: 从 store 的 getState 方法取值，值变化时不会重新渲染');
  return <h1>Test1: {value}</h1>;
}
