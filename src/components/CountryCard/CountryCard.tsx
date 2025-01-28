import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { CountryCardProps } from "./CountryCard.types";

export const CountryCard = ({ country }: CountryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/${country.code}`)}
      variant="outlined"
      sx={{
        cursor: 'pointer',
        marginBottom: 2,
        padding: 2,
        transition: "transform 0.3s, box-shadow 0.3s", // Transición para el hover
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", // Agregar sombra
        },
      }}
    >
      <CardContent>
        <Typography color="primary" fontWeight={600} variant="h6">
          {country.name} ({country.code})
        </Typography>
        <Typography>Capital: {country.capital || "N/A"}</Typography>
        <Typography>Moneda: {country.currency || "N/A"}</Typography>
        <Typography>Continente: {country.continent?.name || "N/A"}</Typography>
        <Typography>
          Idiomas:{" "}
          {country.languages.map((lang) => lang.name).join(", ") || "N/A"}
        </Typography>
      </CardContent>
    </Card>
  );
};
