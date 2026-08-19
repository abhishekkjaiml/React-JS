import Sidebar from "./Sidebar"

const ShopLayout = ({ children }) => {
  return (
    <div    className="flex w-full flex-1">
        <Sidebar    className="flex-1 min-w-0" />
        <main>
            {children}
        </main>
    </div>
  )
}

export default ShopLayout