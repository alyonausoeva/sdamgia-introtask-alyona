import React from "react";
import { cn } from "@bem-react/classname";

import "./Button.scss";

export interface ButtonInterface {
  disabled: boolean;
}

export const Button = ({ disabled }: ButtonInterface) => {
  const cnButton = cn("Button");

  return (
    <button className={cnButton({ disabled: disabled })} disabled={disabled}>
      Поиск
    </button>
  );
};
