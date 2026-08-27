import { useLocation } from "react-router-dom";
import TVSerirsPageCard from "../../components/TVSerirsPageCard";
import { useMovies } from "../../context/movie-context";
import { useEffect } from "react";

const AllTvShowsPage = () => {
  const { getAllSeries } = useMovies();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <section className="flex flex-wrap gap-5 mt-5">

      {getAllSeries?.length > 0 &&
        getAllSeries.map((allTVSeries) => (

          <div
            key={allTVSeries._id}
            className="w-[calc(25%-15px)]"
          >
            <TVSerirsPageCard
              allTVSeries={allTVSeries}
            />
          </div>

        ))}

    </section>
  );
};

export default AllTvShowsPage;