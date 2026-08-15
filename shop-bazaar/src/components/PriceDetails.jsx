import { useCart } from "../context/cart-context";
import getTotalCartAmmount from "../utility/getTotalCartAmmount";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const PriceDetails = () => {
  const { cart } = useCart();

  const totalCartAmmount = getTotalCartAmmount(cart);

  const deliveryCharge = totalCartAmmount >= 50 ? 0 : 49;

  const totalAmount = totalCartAmmount + deliveryCharge;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-border bg-background shadow-md">

      {/* Header */}

      <div className="border-b border-border px-5 py-4">
        <h2 className="text-lg font-bold text-text-primary">
          Price Details
        </h2>

        <p className="mt-1 text-xs text-text-muted">
          {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
        </p>
      </div>


      {/* Details */}

      <div className="p-5">

        <div className="flex flex-col gap-5">

          {/* Price */}

          <div className="flex items-center justify-between">

            <p className="text-sm text-text-secondary">
              Price ({cart.length} items)
            </p>

            <p className="font-medium text-text-primary">
              ${totalCartAmmount.toFixed(2)}
            </p>

          </div>


          {/* Delivery */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <LocalShippingOutlinedIcon
                fontSize="small"
                className="text-text-muted"
              />

              <p className="text-sm text-text-secondary">
                Delivery Charge
              </p>

            </div>

            {deliveryCharge === 0 ? (
              <span className="font-semibold text-success">
                FREE
              </span>
            ) : (
              <span className="font-medium text-text-primary">
                ${deliveryCharge.toFixed(2)}
              </span>
            )}

          </div>


          {/* Divider */}

          <div className="border-t border-dashed border-border" />


          {/* Total */}

          <div className="flex items-center justify-between">

            <p className="text-base font-bold text-text-primary">
              Total Amount
            </p>

            <p className="text-xl font-bold text-primary">
              ${totalAmount.toFixed(2)}
            </p>

          </div>


          {/* Place Order */}

          <button
            disabled={cart.length === 0}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ShoppingBagOutlinedIcon fontSize="small" />

            PLACE ORDER
          </button>

        </div>

      </div>

    </div>
  );
};

export default PriceDetails;