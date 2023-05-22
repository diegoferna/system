import { Routes, Route } from "react-router-dom";
import Login from "../page/login";
import { Home } from "../page/home/Home";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}