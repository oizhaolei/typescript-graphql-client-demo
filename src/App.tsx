import { useQuery, gql } from "@apollo/client";

import logo from "./logo.svg";
import "./App.css";
import * as GetExchangeRates from "./__generated__/GetExchangeRates";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function App() {
  const { loading, error, data } =
    useQuery<GetExchangeRates.GetExchangeRates>(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>My first Apollo app 🚀</h2>
        {data &&
          data.rates &&
          data.rates.map(
            (rate) =>
              rate && (
                <div key={rate.currency}>
                  <p>
                    {rate.currency}: {rate.rate}
                  </p>
                </div>
              )
          )}
      </header>
    </div>
  );
}

export default App;
