import { createContext, useContext, useReducer } from "react";
import wishReducer from "../reducres/wishReducer";

const WishContext = createContext();

const WishProvider = ({ children }) => {

    const initialState = {
        wishlist: []
    }

    const [{wishlist}, wishDispatch] = useReducer(wishReducer, initialState)
    return(
        <WishContext.Provider   value={{wishlist, wishDispatch}}>
            { children }
        </WishContext.Provider>
    )
}

const useWishlist = () => useContext(WishContext)

export {WishProvider, useWishlist}