import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <header className="h-15 bg-transparent border-b border-slate-200  flex items-center justify-between p-1 px-8 w-[81%] ml-auto">

      {/* Right */}

      <div className="flex items-center gap-4 ml-auto">

        {/* Search */}

        <div className="flex items-center bg-white border border-slate-200  rounded-full px-3 py-2 w-80">

          <SearchOutlinedIcon
            className="text-slate-400"
            fontSize="small"
          />

          <input
            type="text"
            placeholder="Search notes..."
            className="ml-3 w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
          />

        </div>

        {/* Notification */}

        <button
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          <NotificationsNoneOutlinedIcon />
        </button>

        {/* Theme */}

        <button
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          <DarkModeOutlinedIcon />
        </button>

        {/* Profile */}

        <button
          className="w-10 h-10 rounded-full border border-slate-200 hover:bg-violet-600 hover:text-white flex items-center justify-center"
        >
          <AccountCircleOutlinedIcon />
        </button>

      </div>

    </header>
  );
};

export default Navbar;