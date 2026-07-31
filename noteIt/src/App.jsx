import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import ImportantPage from "./pages/ImportantPage";
import BinPage from "./pages/BinPage";

const App = () => {
  return(
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
          <div className="flex flex-1">
            <Sidebar />
              <main className="flex-1 p-6">
                <Routes>
                  <Route  path="/"  element={<HomePage />} />
                  <Route  path="/archive"  element={<ArchivePage />} />
                  <Route  path="/important"  element={<ImportantPage />} />
                  <Route  path="/bin"  element={<BinPage />} />
                </Routes>
              </main>
          </div>
      </div>
    </>
  )
}

export default App;