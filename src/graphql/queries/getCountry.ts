
import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
query GetCountry($code: ID!) {
  country(code: $code) {
    code
    name
    currency
    continent {
      name
      code
      countries {
        code
      }
    }
    languages {
      name
    }
    capital
  }
}
`;
