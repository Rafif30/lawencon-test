import { uiSliceAction } from "./ui-slice";
import { filmSliceActions } from "./list-slice";

export const fetchFilmData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=715289b&s=batman&page=1"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();

      return data;
    };

    try {
      const filmData = await fetchData();
      dispatch(
        filmSliceActions.replaceFilm({
          totalResults: filmData.totalResults,
          film: filmData.Search || [],
        })
      );
    } catch (error) {
      dispatch(
        uiSliceAction.showNotification({
          status: "error",
          title: "error!!",
          message: "Sent cart data failed!",
        })
      );
    }
  };
};
