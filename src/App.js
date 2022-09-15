import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

import ListPage from "./pages/ListPage";

import { fetchFilmData } from "./store/list-actions";
import { fetchDetailData } from "./store/detail-actions";
import { Fragment } from "react";
import DetailPage from "./pages/DetailPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilmData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDetailData());
  }, [dispatch]);

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/list" />
          </Route>
          <Route path="/list">
            <ListPage />
          </Route>
          <Route path="/detail/:detailId">
            <DetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
