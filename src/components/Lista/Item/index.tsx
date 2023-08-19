import style from './Item.module.scss'

interface ItemProps {
    index: number
    tarefa: string
    tempo: string
}

const Item = ( {index, tarefa, tempo}:ItemProps ) => {
  return (
    <li key={index} className={style.item}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  );
};

export default Item;
