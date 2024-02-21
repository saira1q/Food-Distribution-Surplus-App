import Arilog from "./Sections/Arilog";
import Products from "./Sections/products";
import LandingPage from "./Sections/LandingPage";
import Login from "./Sections/Login";
import Team from "./Sections/Team";
import Weather from "./Sections/weather";
import { Routes, Route } from "react-router-dom";
import Nav from "./Sections/Nav";
import Map from "./Sections/Map";
import RestPage from "./Sections/RestPage";
const App = () => {
  return (
    <>
      <main className="relative">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          
          <Route path="/Arilog" element={<Arilog />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Weather" element={<Weather />} />
          
          <Route path="/Res" element={<RestPage />} />
          <Route
            path="*"
            element={
              <>
                <h1>404 | WRONG PAGE</h1>
              </>
            }
          />
        </Routes>
        {/* <LandingPage /> */}
        {/* <Products />  */}
        {/* <Login /> */}
        {/* <Arilog /> */}
        {/* <Team/> */}
        {/* <Weather></Weather> */}
      </main>
    </>
  );
};

export default App;
