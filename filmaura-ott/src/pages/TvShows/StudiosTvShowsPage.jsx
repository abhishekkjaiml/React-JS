import AllStudiosCard from "../../components/AllStudiosCard";
import { useMovies } from "../../context/movie-context";

const StudiosPage = () => {
  const { getAllStudios } = useMovies();

  return (
    <section className="flex flex-row flex-wrap gap-5 mt-5">
      {getAllStudios?.length > 0 ? (
        getAllStudios.map((stidios) => (
          <div
            key={stidios._id}
            className="flex-[0_0_calc(25%-15px)]"
          >
            <AllStudiosCard stidios={stidios} />
          </div>
        ))
      ) : (
        <div>No Studios</div>
      )}
    </section>
  );
};

export default StudiosPage;