export const getCurrencyEmoji = (currencyCode: string) => {
  switch (currencyCode) {
    case "USD":
      return "🇺🇸";
    case "EUR":
      return "🇪🇺";
    case "GBP":
      return "🇬🇧";
    case "AUD":
      return "🇦🇺";
    case "BRL":
      return "🇧🇷";
    case "BGN":
      return "🇧🇬";
    case "CAD":
      return "🇨🇦";
    case "CZK":
      return "🇨🇿";
    case "CNY":
      return "🇨🇳";
    case "DKK":
      return "🇩🇰";
    case "HKD":
      return "🇭🇰";
    case "HUF":
      return "🇭🇺";
    case "ISK":
      return "🇮🇸";
    case "XDR":
      return "🌐";
    case "INR":
      return "🇮🇳";
    case "IDR":
      return "🇮🇩";
    case "ILS":
      return "🇮🇱";
    case "JPY":
      return "🇯🇵";
    case "MYR":
      return "🇲🇾";
    case "MXN":
      return "🇲🇽";
    case "NZD":
      return "🇳🇿";
    case "NOK":
      return "🇳🇴";
    case "PHP":
      return "🇵🇭";
    case "PLN":
      return "🇵🇱";
    case "RON":
      return "🇷🇴";
    case "SGD":
      return "🇸🇬";
    case "ZAR":
      return "🇿🇦";
    case "KRW":
      return "🇰🇷";
    case "SEK":
      return "🇸🇪";
    case "CHF":
      return "🇨🇭";
    case "THB":
      return "🇹🇭";
    case "TRY":
      return "🇹🇷";

  }
};
