import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

export default function AppRoutes() {
  return(
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </HashRouter>
  </>)
}
