import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const TestPage = lazy(() => import("./testPage"));
const MainPage = lazy(() => import("./mainPage"));
const ProductPage = lazy(() => import("./productPage"));
const NotFoundPage = lazy(() => import("./404"));


export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};