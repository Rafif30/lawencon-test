import { uiSliceAction } from "./ui-slice";
import { detailSliceActions } from "./detail-slice";

export const fetchDetailData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const id = window.location.href.slice(29, 38);
      console.log(id);
      const response = await fetch(
        `https://omdbapi.com/?apikey=715289b&i=${id}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };

    try {
      const detailData = await fetchData();
      dispatch(
        detailSliceActions.replaceDetail({
          title: detailData.Title,
          year: detailData.Year,
          rated: detailData.Rated,
          relased: detailData.Released,
          genre: detailData.Genre,
          director: detailData.Director,
          writer: detailData.Writer,
          actor: detailData.Actors,
          poster: detailData.Poster,
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
