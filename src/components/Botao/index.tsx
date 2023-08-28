import React, { PropsWithChildren } from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<{
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button className={style.botao} type={type}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
