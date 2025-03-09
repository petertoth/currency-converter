import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const CENTRAL_BANK_EXCHANGE_RATE_URL =
    "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

  fetch(CENTRAL_BANK_EXCHANGE_RATE_URL)
    .then((response) => response.text())
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
}
