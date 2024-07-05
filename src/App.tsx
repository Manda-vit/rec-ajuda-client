import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { FormLogin } from "./pages/login";
import { Map } from "./pages/map";
import { Shelter } from "./pages/shelter";
import { Contact } from "./pages/contact";


export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path="/map" element={<Map />} />
      <Route path="/shelter" element={<Shelter />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
