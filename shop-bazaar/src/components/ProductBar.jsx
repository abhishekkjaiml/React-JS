import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useNavigate } from "react-router-dom";

const ProductBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex flex-wrap w-scren h-12 bg-background-soft font-semibold">
        <ul className="flex flex-wrap w-screen items-center ">
          <div className="flex flex-wrap mx-10 border-r border-border h-full w-35 items-center">
            <li className="flex flex-wrap gap-2 items-center text-text-primary">
              <DensityMediumOutlinedIcon />
              Category
              <KeyboardArrowDownOutlinedIcon />
            </li>
          </div>
          <div className="flex flex-wrap gap-7 text-text-primary">
            <li 
              onClick={() => navigate("/")} 
              className="cursor-pointer">
              Home
            </li>
            <li 
              onClick={() => navigate("/shop")} 
              className="cursor-pointer">
              Shop
            </li>
            <li 
              onClick={() => navigate("/deals")} 
              className="cursor-pointer">
              Deals
            </li>
            <li
              onClick={() => navigate("/new_arrivels")}
              className="cursor-pointer"
            >
              New Arrivels
            </li>
            <li
              onClick={() => navigate("/best_sellers")}
              className="cursor-pointer"
            >
              Best Sellers
            </li>
            <li 
              onClick={() => navigate("/brands")} 
              className="cursor-pointer">
              Brands
            </li>
          </div>
        </ul>
      </header>
    </>
  );
};

export default ProductBar;
