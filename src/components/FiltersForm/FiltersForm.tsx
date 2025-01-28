import { Controller } from "react-hook-form";

import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { FiltersFormProps, FiltersFormValues } from "./FiltersForm.types";

export const FiltersForm = ({
  formMethods,
  continents,
  currencies,
  onClear,
  refetch,
}: FiltersFormProps) => {
  const { control, handleSubmit } = formMethods;

  const onSubmit = (data: FiltersFormValues) => {
    console.log("Form data submitted:", data);

    refetch({
      filter: {
        name: data.name ? { regex: data.name } : undefined,
        continent: data.continent ? { eq: data.continent } : undefined,
        currency: data.currency ? { eq: data.currency } : undefined,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={2} marginY={2}>
        <Typography variant="subtitle1">Special Filters</Typography>
        <Box display="flex" gap={2}>
          <Controller
            name="continent"
            control={control}
            render={({ field }) => (
              <Select {...field} fullWidth displayEmpty>
                <MenuItem value="">All Continents</MenuItem>
                {continents.map((continent) => (
                  <MenuItem key={continent.code} value={continent.code}>
                    {continent.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />

          <Controller
            name="currency"
            control={control}
            render={({ field }) => (
              <Select {...field} fullWidth displayEmpty>
                <MenuItem value="">All Currencies</MenuItem>
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Box>
        {/* Field for country name */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Country Name" fullWidth />
          )}
        />
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" color="primary" onClick={onClear}>
            Clear
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </Box>
    </form>
  );
};
