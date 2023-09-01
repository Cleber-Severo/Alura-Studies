import style from "./Cronometro.module.scss";
import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface CronometroProps {
  selecionado: Itarefa | undefined
}

const Cronometro = ({selecionado}:CronometroProps) => {
  const [tempo, setTempo] = useState<number>();
  
  useEffect(() => {
     if (selecionado?.tempo) {
       setTempo(tempoParaSegundos(selecionado.tempo));
     }
  }, [selecionado])
  
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: { tempo }
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar!</Botao>
    </div>
  );
};

export default Cronometro;
