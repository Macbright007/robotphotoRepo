import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "../card/Card";
import Search from "../Search";
import { PhotoList, ButtonContainer } from "./photolistStyles";

export const URL = "https://picture-searches.herokuapp.com/api/pictures/";


const PhotoLists = () => {
  const [photos, setPhotos] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  //   api call to fetch images
  useEffect(() => {
    setLoading(true);
    Axios.get(URL)
      .then((res) => {
        setPhotos(res.data.results);
        setNextPageUrl(res.data.next);
      })
      .catch(console.log("failed to fetch data"))
      .finally(() => setLoading(false));
  }, []);

  //   function to make search
  const handleSearchSubmit = (searchKey) => {
    setLoading(true);
    Axios.get(`${URL}?search=${searchKey}`)
      .then((res) => setPhotos(res.data.results))
      .catch(console.log("failed to fetch data"))
      .finally(() => setLoading(false));
  };

  // function to make api call to get pagenated images
  const fetchNextPage = () => {
    if (!nextPageUrl) {
      return;
    }
    setLoading(true);
    Axios.get(nextPageUrl)
      .then((res) => {
        setPhotos([...photos, ...res.data.results]);
        setNextPageUrl(res.data.next);
      })
      .catch(console.log("failed to fetch data"))
      .finally(() => setLoading(false));
  };

  const isLoadingFirstPage = loading && photos.length < 1;
  const isLoadingNextPage = loading && !isLoadingFirstPage;

  //   function to delete picture
  const handleDelete = async ({ id }) => {
    await Axios.delete(URL + id);
    setPhotos(photos.filter((pic) => pic.id !== id)); 
  };

  return (
    <>
      <Search photos={photos} onSubmit={handleSearchSubmit} />
      {isLoadingFirstPage ? (
        "Loading ..."
      ) : (
        <PhotoList>
          {photos.map((pic) => {
            return <Card pic={pic} key={pic.id} handleDelete={handleDelete} />;
          })}
        </PhotoList>
      )}
      <ButtonContainer>
        {nextPageUrl && (
          <button href="#" disabled={isLoadingNextPage} onClick={fetchNextPage}>
            &raquo; {isLoadingNextPage ? "Loading..." : "Load more"}
          </button>
        )}
      </ButtonContainer>
    </>
  );
};

export default PhotoLists;
