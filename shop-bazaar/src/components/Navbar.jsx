import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()
  return (
    <>
      <header className="flex flex-wrap justify-between w-full h-16 items-center bg-background text-text-primary-secondary">
        <div className="flex flex-wrap ml-10" onClick={() => navigate('/')}>
          <img  src={logo} className="w-35 cursor-pointer"/>
        </div>
        <div className="flex flex-wrap w-[45vw] h-10 relative text-text-light">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="w-screen outline-none border px-10 py-2 rounded-md"
          />
          <SearchOutlinedIcon className="top-2.5 left-3.5 flex absolute" />
          <div  className="cursor-pointer h-10.5 w-14  absolute right-0 rounded-md flex flex-wrap bg-indigo-600">
            <SearchOutlinedIcon className="top-2.5 right-3.5 flex absolute text-white outline-none" />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mr-10">
          <FavoriteBorderOutlinedIcon onClick={() => navigate('/wishlist')} className="cursor-pointer" />
          <ShoppingCartOutlinedIcon   onClick={() => navigate('/cart')}    className="cursor-pointer" />
          <AccountCircleOutlinedIcon  onClick={() => navigate('/auth/login')} className="cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
