import { Link, useParams } from "react-router-dom";
import classes from "./ListFilm.module.css";

const ListFilm = (props) => {
  const { title, year, id, type, poster } = props.item;
  const params = useParams();
  params.detailId = id;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
      </header>
      <img src={poster} alt={type} />
      <button>
        <Link to={`/detail/${params.detailId}`}>Detail</Link>
      </button>
    </li>
  );
};

export default ListFilm;
