import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import logo from "../../src/assets/noteItLogo.png";

const Sidebar = () => {

  const getStyle = ({isActive}) => {
    const styles = 'flex align-center gap-1 px-2 py-1 rounded ';
    return isActive ? `bg-violet-600 text-white shadow-md ${styles}` : `text-slate-700 hover:bg-violet-100 hover:text-violet-600 ${styles}`
  }
  return (
    <aside className="flex flex-col gap-3 border-r border-slate-200 bg-white w-[19%] min-h-screen p-3 mt-[-58px]">
      <div  className="">
        <img  src={logo} className="flex w-35 " />
      </div>
      <div  className="flex flex-col gap-3 mt-2">
        <NavLink className={getStyle} to={"/"}>
        <HomeOutlinedIcon/>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyle} to={"/archive"}>
        <ArchiveOutlinedIcon/>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyle} to={"/important"}>
        <LabelImportantOutlinedIcon/>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyle} to={"/bin"}>
        <DeleteOutlinedIcon/>
        <span>Bin</span>
      </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar