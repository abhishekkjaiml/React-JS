import { createContext, useContext, useState } from "react";

const ShopFilterContext = createContext();

const ShopFilterProvider = ({ children }) => {

    const [selectedCategory, setSelectedCategory] = useState('All')

    const onCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    const clearFilter = () => {
        setSelectedCategory('All')
    }
    return(
        <ShopFilterContext.Provider value={{ selectedCategory, onCategoryClick, clearFilter}}>
            { children }
        </ShopFilterContext.Provider>
    )
}

const useShopFilter = () => useContext(ShopFilterContext)

export { ShopFilterProvider, useShopFilter}