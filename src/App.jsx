import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import CariMobil from "./page/CariMobil";
import HasilPencarian from "./page/HasilPencarian";
import DetailPaketSewa from "./page/DetailPaketSewa";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="CariMobil/*" element={<CariMobil />} />
                <Route path="HasilPencarian" element={<HasilPencarian />} />
                <Route path="DetailPaket/:id" element={<DetailPaketSewa />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
