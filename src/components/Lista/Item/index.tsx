import { Itarefa } from '../../../types/tarefa';
import style from './Item.module.scss'

interface ItemProps extends Itarefa {
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

const Item = ( 
  { 
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionaTarefa
  }: ItemProps ) => {
  
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() =>
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  );
};

export default Item;
