import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/api/currency-exchange-rates", async (_, res) => {
  const CENTRAL_BANK_EXCHANGE_RATE_URL =
    "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

  try {
    const response = await fetch(CENTRAL_BANK_EXCHANGE_RATE_URL);
    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

ViteExpress.listen(app, process.env.PORT || 3000, () =>
  console.log("Server is listening...")
);
