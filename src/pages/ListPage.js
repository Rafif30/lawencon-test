import { useSelector } from "react-redux";

import ListFilm from "../components/ListFilm";
import Card from "../components/UI/Card";
import classes from "./ListPage.module.css";

const ListPage = () => {
  const filmItems = useSelector((state) => state.film.film);

  return (
    <Card className={classes.listpage}>
      <ul>
        {filmItems.map((item) => (
          <ListFilm
            key={item.imdbID}
            item={{
              id: item.imdbID,
              title: item.Title,
              year: item.Year,
              type: item.Type,
              poster: item.Poster,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default ListPage;
