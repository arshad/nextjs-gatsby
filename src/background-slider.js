import * as React from "react";
import { Div } from "@reflexjs/components";

export const BackgroundSlider = ({ duration, children }) => {
  const isF = typeof children === "function";
  const child = (num) => (isF ? children(num) : children);
  return (
    <Div overflow="hidden" whiteSpace="nowrap">
      <Div
        d="inline-block"
        whiteSpace="nowrap"
        overflow="hidden"
        animation={`slide ${duration * 2 || 10}s linear infinite`}
      >
        <Div d="inline-block">{child(1)}</Div>
        <Div d="inline-block">{child(2)}</Div>
      </Div>
    </Div>
  );
};
