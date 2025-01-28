import { lazy } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import { Loadable } from "../components";
// import { CountriesPage } from "../pages/CountriesPage";

import { CountryDetailPage, CountriesPage} from "../pages";

// const CountriesPage = Loadable(lazy(() => import("../pages/CountriesPage")))
// const CountryDetailPage = Loadable(lazy(() => import("../pages/CountryDetailPage")))

// const CountriesPage = lazy(() => import("../pages/CountriesPage"));
// const CountryDetailPage = lazy(() => import("../pages/CountryDetailPage"));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CountriesPage />} />
        <Route path="/:id" element={<CountryDetailPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
