import React, { PropsWithChildren } from "react";
import style from "./Botao.module.scss";

interface BotaoProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
}

function Botao({onClick, type, children} : BotaoProps) {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {children}
    </button>
  );
}

export default Botao;
