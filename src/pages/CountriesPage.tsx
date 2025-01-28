import { useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";

import { Box, CircularProgress, Typography } from "@mui/material";
import { CountryGrid, FiltersForm } from "../components";


import { GET_COUNTRIES, GET_CONTINENTS } from "../graphql/queries";

import { Country } from "../common/interfaces";



export const CountriesPage = () => {
  const { data: continentsData, loading: continentsLoading } =
    useQuery(GET_CONTINENTS);

  const {
    data: countriesData,
    loading: countriesLoading,
    refetch,
    networkStatus,
  } = useQuery(GET_COUNTRIES, {
    notifyOnNetworkStatusChange: true,
    variables: { filter: {} },
  });

   const isLoadingCountries = countriesLoading || networkStatus === 4; // 4 es el código de refetch

  console.log({ isLoadingCountries });
  const { data: currenciesData, loading: currenciesLoading } = useQuery(
    GET_COUNTRIES,
    { variables: { filter: {} } }
  );

  const formMethods = useForm({
    defaultValues: { continent: "", currency: "", name: "" },
  });

  const handleClear = () => {
    formMethods.reset();
    refetch({ filter: {} });
  };

  if (continentsLoading || currenciesLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  const continents = continentsData?.continents || [];
  const countries = countriesData?.countries || [];
  const currencies = currenciesData?.countries || [];

  const currenciesFormatted = Array.from(
    new Set(currencies.map((country: Country) => country.currency))
  ).filter((currency): currency is string => Boolean(currency));
  return (
    <Box padding={4}>
      {/* #181b32 */}
      <Typography fontWeight={600} color='primary' variant="h4" textAlign="center" gutterBottom>
        Countries app
      </Typography>
      <FiltersForm
        formMethods={formMethods}
        continents={continents}
        currencies={currenciesFormatted}
        onClear={handleClear}
        refetch={refetch}
      />
      <Typography></Typography>
      <Typography variant="h4" gutterBottom></Typography>
      <CountryGrid countries={countries} isLoading={isLoadingCountries} />
    </Box>
  );
};
