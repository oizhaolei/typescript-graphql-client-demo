/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExchangeRates
// ====================================================

export interface GetExchangeRates_rates {
  __typename: "ExchangeRate";
  currency: string | null;
  rate: string | null;
}

export interface GetExchangeRates {
  rates: (GetExchangeRates_rates | null)[] | null;
}
