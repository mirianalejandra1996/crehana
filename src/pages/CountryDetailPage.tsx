import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { Country } from "../common/interfaces";

import { GET_COUNTRY } from "../graphql/queries";

type MAIN_COUNTRY_TYPES = {
  country: Country;
};

export const CountryDetailPage = () => {
  // const { id } = useParams<{ id: string }>();

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { data, loading, error } = useQuery<MAIN_COUNTRY_TYPES>(GET_COUNTRY, {
    variables: { code: id },
  });

  const handleGoBack = () => {
    navigate("/"); // Vuelve a la ruta anterior
  };

  if (!id) {
    return (
      <Typography variant="h6" textAlign="center" color="error">
        ID de país no proporcionado en la URL.
      </Typography>
    );
  }

  if (loading) {
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

  if (error) {
    return (
      <Typography variant="h6" textAlign="center" color="error">
        No se pudo obtener el país. {error.message}
      </Typography>
    );
  }

  if (!data?.country) {
    return (
      <Box padding={4}>
        <Box mt={2} paddingBottom={4}>
          <Button variant="contained" color="primary" onClick={handleGoBack}>
            Go back
          </Button>
          <Typography variant="h6" textAlign="center" color="error">
            País no encontrado
          </Typography>
        </Box>
      </Box>
    );
  }

  const country = data.country;

  return (
    <Box padding={4}>
      <Box mt={2} paddingBottom={4}>
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          Go back
        </Button>
      </Box>
      <Card variant="outlined" sx={{ padding: 2 }}>
        <CardContent>
          <Typography color="primary" variant="h4" gutterBottom>
            {country.name} ({country.code})
          </Typography>
          <Typography variant="h6">Capital: {country.capital}</Typography>
          <Typography>Moneda: {country.currency}</Typography>
          <Typography>Continente: {country.continent.name}</Typography>
          <Typography>
            Idiomas:{" "}
            {country.languages
              .map((lang: { name: string }) => lang.name)
              .join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
