/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRates
// ====================================================

export interface GetRates_rates {
  __typename: "ExchangeRate";
  currency: string | null;
}

export interface GetRates {
  rates: (GetRates_rates | null)[] | null;
}
