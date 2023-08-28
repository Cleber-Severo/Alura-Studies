import { Itarefa } from '../../../types/tarefa';
import style from './Item.module.scss'


const Item = ( { tarefa, tempo, selecionado, completado, id}: Itarefa ) => {
  console.log({ tarefa, tempo, selecionado, completado, id });
  
  return (
    <li className={style.item}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  );
};

export default Item;
