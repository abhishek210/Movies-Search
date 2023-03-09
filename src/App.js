import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Details from "./Components/Pages/Details";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import Search from "./Components/Pages/Search";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:user" element={<Details />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
