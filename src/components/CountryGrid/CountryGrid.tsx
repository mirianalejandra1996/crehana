import { Box, CircularProgress, Typography, Grid2 } from "@mui/material";

import { CountryCard } from "../CountryCard/CountryCard";

import { Country } from "../../common/interfaces";
import { CountryGridProps } from "./CountryGrid.types";

export const CountryGrid = ({ countries, isLoading }: CountryGridProps) => {
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="25vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (countries.length === 0) {
    return (
      <Typography variant="h6" align="center" color="textSecondary">
        There are no countries available.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="subtitle1">
        Results: {countries.length || 0}
      </Typography>
      <Grid2 container spacing={2} marginTop={2}>
        {countries.map((country: Country) => (
          <Grid2 key={country.code} size={{ xs: 12, md: 6, lg: 3 }}>
            <CountryCard country={country} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
