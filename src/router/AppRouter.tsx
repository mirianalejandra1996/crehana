// import { lazy } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
// import { Loadable } from "../components";

// const CountriesPage = Loadable(lazy(() => import("../pages/CountriesPage")))
// const CountryDetailPage = Loadable(lazy(() => import("../pages/CountryDetailPage")))

import { CountryDetailPage, CountriesPage} from "../pages";


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
