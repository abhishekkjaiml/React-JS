import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import electronics from "../assets/shopByCategories/electronics.png";
import beauty from "../assets/shopByCategories/beauty.png";
import accessories from "../assets/shopByCategories/accessories.png";
import fashions from "../assets/shopByCategories/fashions.png";
import home_living from "../assets/shopByCategories/home_living.png";
import sports from "../assets/shopByCategories/sports.png";
import bg1 from '../assets/bg1.png'

const HomePage = () => {

  const websiteOpen = () => {
    alert('Home page are under development you can visit on shop page')
  }

  websiteOpen()
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-wrap px-10 py-5">
        <div  className="w-full">
          {/* start */}
          <div className="bg-indigo-50 shadow-2xl/10 border-border w-full h-[70vh] rounded-lg px-10 py-10 ">
          <div className="flex flex-col h-50 w-[35%]  gap-2 relative">
            <p className="bg-indigo-50 text-indigo-500 flex flex-wrap text-[14px] font-semibold border w-50 py-0.5 rounded-full justify-center">
              Best Quality . Best Price
            </p>
            <h1 className="text-4xl font-bold text-text-primary">
              Amazing Products,
            </h1>
            <h2 className="text-4xl font-bold text-text-primary">
              Amazing Price
            </h2>
            <h3 className="text-4xl font-bold text-info">Everyday</h3>
          </div>
          <div className="w-[30%]">
            <p className="text-text-muted">
              Shop the latest trends and best deals on electronics fashion, home
              & more
            </p>
          </div>
          <div className="flex  h-20 gap-10 items-center">
            <button className=" px-3.5 bg-primary text-white py-3 rounded-md font-bold flex items-center  justify-center ">
              Shop Now
            </button>
            <button className=" px-3.5 bg-background text-text-primary border shadow-2xl/5 py-3 rounded-md font-bold flex gap-3 ">
              Explore Deals
              <ArrowForwardOutlinedIcon className="text-primary" />
            </button>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3 text-text-secondary">
              <div>
                <LocalShippingOutlinedIcon />
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-text-primary">
                  Free Shipping
                </h4>
                <p className="text-[13.5px] text-text-muted">
                  On orders over $50
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-text-secondary">
              <div>
                <AssignmentReturnOutlinedIcon />
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-text-primary">
                  Easy Returns
                </h4>
                <p className="text-[13.5px] text-text-muted">
                  30-day return policy
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-text-secondary">
              <div>
                <AccountBalanceWalletOutlinedIcon />
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-text-primary">
                  Secure Payment
                </h4>
                <p className="text-[13.5px] text-text-muted">
                  100% secure payment
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* end */}

          <div>
            <img  src={bg1} className="w-100  absolute top-45  right-30 rounded-lg"/>
          </div>
        </div>

        {/* Shop by Category */}

        <div className="  w-full mt-10">
          <div className="flex flex-wrap justify-between">
            <h1 className="font-bold">Shop by Categories</h1>
            <h1 className="font-bold">
              View all{" "}
              <ArrowForwardOutlinedIcon className="text-primary" />{" "}
            </h1>
          </div>
          <div className="flex flex-wrap justify-between border pb-10 my-5 rounded-lg shadow-2xs/10 border-border">
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={electronics} className="size-22 rounded-full" />
                Electronics
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={fashions} className="size-22 rounded-full" />
                Fashions
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={home_living} className="size-22 rounded-full" />
                Home & Living
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={beauty} className="size-22 rounded-full" />
                Beauty
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={sports} className="size-22 rounded-full" />
                Sports
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={accessories} className="size-22 rounded-full" />
                Accessories
              </p>
            </div>
          </div>
        </div>
        
        {/* Featured Products */}

        <div className="  w-full mt-10">
          <div className="flex flex-wrap justify-between">
            <h1 className="font-bold">Featured Products</h1>
            <h1 className="font-bold">
              View all{" "}
              <ArrowForwardOutlinedIcon className="text-primary" />{" "}
            </h1>
          </div>
          <div className="flex flex-wrap justify-between border pb-10 my-5 rounded-lg shadow-2xs/10 border-border">
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={electronics} className="size-22 rounded-full" />
                Electronics
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={fashions} className="size-22 rounded-full" />
                Fashions
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={home_living} className="size-22 rounded-full" />
                Home & Living
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={beauty} className="size-22 rounded-full" />
                Beauty
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={sports} className="size-22 rounded-full" />
                Sports
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={accessories} className="size-22 rounded-full" />
                Accessories
              </p>
            </div>
          </div>
        </div>

        {/* Shop by Category */}

        <div className="  w-full mt-10">
          <div className="flex flex-wrap justify-between">
            <h1 className="font-bold">Shop by Categories</h1>
            <h1 className="font-bold">
              View all{" "}
              <ArrowForwardOutlinedIcon className="text-primary" />{" "}
            </h1>
          </div>
          <div className="flex flex-wrap justify-between border pb-10 my-5 rounded-lg shadow-2xs/10 border-border">
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={electronics} className="size-22 rounded-full" />
                Electronics
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={fashions} className="size-22 rounded-full" />
                Fashions
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={home_living} className="size-22 rounded-full" />
                Home & Living
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={beauty} className="size-22 rounded-full" />
                Beauty
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={sports} className="size-22 rounded-full" />
                Sports
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={accessories} className="size-22 rounded-full" />
                Accessories
              </p>
            </div>
          </div>
        </div>

        {/* Shop by Category */}

        <div className="  w-full mt-10">
          <div className="flex flex-wrap justify-between">
            <h1 className="font-bold">Shop by Categories</h1>
            <h1 className="font-bold">
              View all{" "}
              <ArrowForwardOutlinedIcon className="text-primary" />{" "}
            </h1>
          </div>
          <div className="flex flex-wrap justify-between border pb-10 my-5 rounded-lg shadow-2xs/10 border-border">
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={electronics} className="size-22 rounded-full" />
                Electronics
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={fashions} className="size-22 rounded-full" />
                Fashions
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={home_living} className="size-22 rounded-full" />
                Home & Living
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={beauty} className="size-22 rounded-full" />
                Beauty
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={sports} className="size-22 rounded-full" />
                Sports
              </p>
            </div>
            <div className="mt-10">
              <p className="flex flex-col text-[15px] gap-3  size-30 items-center justify-center">
                <img src={accessories} className="size-22 rounded-full" />
                Accessories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
