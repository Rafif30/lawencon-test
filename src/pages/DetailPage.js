import { useSelector } from "react-redux";
import Card from "../components/UI/Card";
import classes from "./DetailPage.module.css";

const DetailPage = () => {
  const {
    title,
    year,
    rated,
    relased,
    genre,
    director,
    writer,
    actor,
    poster,
  } = useSelector((state) => state.detail);

  return (
    <Card>
      <div className={classes.detailpage}>
        <div>
          <h1>{title}</h1>
          <img src={poster} alt={title} />
        </div>
        <div>
          <ul>
            <li>year: {year}</li>
            <li>rated: {rated}</li>
            <li>genre: {genre}</li>
            <li>relased: {relased}</li>
            <li>director: {director}</li>
            <li>writer: {writer}</li>
            <li>actor: {actor}</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default DetailPage;
