import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { useNotes } from "../context/notesContext";
import NotesCard from "../components/NotesCard";

const HomePage = () => {
  const { notesDispatch, title, text, notes, id } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  console.log(notes);

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddBtnClick = () => {
    notesDispatch({
      type: "ADD_NOTES",
    });

    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

  return (
    <div className="flex flex-wrap justify-center mt-5">

      <div className="w-[70vw]">
        <h1 className="font-bold text-gray-800 text-2xl">
          Good morning, Abhishek 👋
        </h1>
        <p  className="text-gray-500 text-[14px] my-2">What's on your mind today?</p>
      </div>

      <section className="flex flex-wrap w-[70vw] h-auto rounded-lg  bg-white border border-slate-200 p-5 mt-5 shadow-xl">
        <div className="flex flex-col">
          <input
            value={title}
            onChange={onTitleChange}
            placeholder="Enter title"
            className="w-[67vw] text-[18px] p-2 outline-none font-bold placeholder-gray-500 text-gray-700"
          />
          <textarea
            value={text}
            onChange={onTextChange}
            placeholder="Write your note here..."
            className="w-[67vw]  bg-white  text-[18px] p-2 mt-2 min-h-[20vh] outline-none placeholder-gray-500  text-gray-700"
          />

          <div className="flex flex-wrap justify-between mt-5 p-2 relative">
            <div className="flex flex-wrap gap-3 ">
              <ColorLensOutlinedIcon className="cursor-pointer  hovertext-violet-600" />
              <ImageOutlinedIcon className="cursor-pointer  hovertext-violet-600" />
              <AttachFileOutlinedIcon className="cursor-pointer hovertext-violet-600" />
            </div>
            <div className="flex flex-wrap mr-12">
              <SellOutlinedIcon className="cursor-pointer hovertext-violet-600" />

              <button onClick={onAddBtnClick} className="border p-1.5 bg-violet-600 rounded text-white  absolute bottom-0.5 right-1 top-0.5 cursor-pointer hover:bg-violet-500 hover:text-violet-100">
                <AddOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Notes Home Logic */}

      {/* Recent Notes */}

      <div className="w-[70vw] mt-10">
        <h1 className="font-bold text-gray-800">Recent Notes</h1>
      </div>

      <section className="flex flex-wrap w-[70vw] h-auto  mt-5">
        <div className="flex flex-wrap grid-4 gap-6">
          {
          notes?.length > 0 ? notes.map((note) => (
              <NotesCard
                key={note.id}
                id={note.id}
                title={note.title}
                text={note.text}
              />
            )) : <p className="flex flex-wrap justify-center items-center text-gray-500  w-[70vw] " >Empty notes</p>
          }
        </div>
      </section>
    </div>
  );
};

export default HomePage;
