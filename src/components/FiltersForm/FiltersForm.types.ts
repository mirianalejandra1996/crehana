import { UseFormReturn } from "react-hook-form";
import { Continent } from "../../common/interfaces";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface FiltersFormValues {
  continent: string;
  currency: string;
  name: string;
}

export interface FiltersFormProps {
  formMethods: UseFormReturn<FiltersFormValues>;
  continents: Continent[];
  currencies: string[];
  onClear: () => void;
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>
}
