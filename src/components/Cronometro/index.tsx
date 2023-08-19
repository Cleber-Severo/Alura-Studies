import style from "./Cronometro.module.scss";
import Botao from "../Botao";
import Relogio from "./Relogio";

const Cronometro = () => {
  return (
    <div>
      <p>Escolha um card e inicie o cronômetro</p>
      <div>
        <Relogio />
      </div>
      <Botao>Começar!</Botao>
    </div>
  );
};

export default Cronometro;
