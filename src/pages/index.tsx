import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("./mainPage"));
const ProductPage = lazy(() => import("./productPage"));
const NotFoundPage = lazy(() => import("./404"));


export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/items/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};