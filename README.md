# Currency Converter

A simple and intuitive currency converter application that allows users to convert Czech Koruna (CZK) to various foreign currencies based on current exchange rates.

Live demo: [https://currency-converter-aef2.onrender.com/](https://currency-converter-aef2.onrender.com/)

## Features

- Convert between CZK and multiple foreign currencies
- Real-time currency conversion
- Display of current exchange rates in a table format
- Bidirectional conversion (CZK to foreign currency and vice versa)

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Styled Components
- **State Management**: React Query for data fetching
- **Server**: Express.js for proxying requests to the Czech National Bank API
- **Development**: Vite for fast development experience
- **Testing**: Playwright for end-to-end testing

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/petertoth/currency-converter.git
   cd currency-converter
   ```

2. Install dependencies
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

### Running Tests

To run the end-to-end tests with Playwright:

```bash
npm run test
```

### Lighthouse Score

![Screenshot 2025-03-10 at 10 27 45](https://github.com/user-attachments/assets/9fe047de-2d5f-4810-a53c-90f23fd1d12b)
