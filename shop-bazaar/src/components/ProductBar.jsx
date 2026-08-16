import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { NavLink } from "react-router-dom";

const ProductBar = () => {
  const getStyle = ({ isActive }) => {
    const styles =
      "relative cursor-pointer transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200";

    return isActive
      ? `text-primary after:w-full ${styles}`
      : `text-text-primary hover:text-primary hover:after:w-full after:w-0 ${styles}`;
  };

  return (
    <header className="flex h-12 w-screen flex-wrap bg-background-soft font-semibold">
      <ul className="flex w-screen flex-wrap items-center">
        {/* ================= CATEGORY ================= */}

        <div className="mx-10 flex h-full w-35 flex-wrap items-center border-r border-border">
          <li className="flex items-center gap-2 text-text-primary">
            <DensityMediumOutlinedIcon />
            Category
            <KeyboardArrowDownOutlinedIcon />
          </li>
        </div>

        {/* ================= NAVIGATION ================= */}

        <div className="flex flex-wrap gap-7">
          <NavLink to="/" className={getStyle}>
            Home
          </NavLink>

          <NavLink to="/shop" className={getStyle}>
            Shop
          </NavLink>

          <NavLink to="/deals" className={getStyle}>
            Deals
          </NavLink>

          <NavLink to="/new_arrivels" className={getStyle}>
            New Arrivals
          </NavLink>

          <NavLink to="/best_sellers" className={getStyle}>
            Best Sellers
          </NavLink>

          <NavLink to="/brands" className={getStyle}>
            Brands
          </NavLink>
        </div>
      </ul>
    </header>
  );
};

export default ProductBar;
