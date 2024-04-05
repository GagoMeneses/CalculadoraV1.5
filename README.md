
# Multi-Currency Payment and Change Calculator

## Overview

This application is designed to facilitate transactions involving multiple currencies. It allows users to calculate the amount due in various currencies and provides options for receiving change. It's particularly useful in environments where transactions involve different currencies simultaneously.

## Features

- **Multiple Currencies Support**: Calculate transactions in USD, EUR, BsBCV, and BsP.
- **Dynamic Exchange Rates**: Utilize updated exchange rates for accurate calculations.
- **Payment Flexibility**: Pay with one or more currencies for a single transaction.
- **Change Calculation**: Offers options for receiving change in a preferred currency.
- **Dual Currency Change**: Split change between two different currencies.

## How It Works

1. **Entering the Total Amount**: Users start by entering the total amount to be paid and selecting the currency of this amount.
2. **Selecting Payment Currencies**: Users can choose one or more currencies to pay with and enter the amounts for each selected currency.
3. **Change Currency Selection**: Users can select the preferred currency to receive any change due.
4. **Calculation**: The application calculates the total paid amount, determines if any change is due, and displays the result.
5. **Multi-Currency Change**: Optionally, users can choose to receive change in two different currencies, specifying the amount in the first currency, with the application calculating the remaining change in the second currency.

## Technical Implementation

- The application is implemented with HTML, CSS, and JavaScript.
- Exchange rates are defined in `script.js`, which can be dynamically updated as needed.
- The `currencySplitter.js` script handles the logic for splitting change into two different currencies.

## Usage

Simply open the `index.html` in a web browser to start using the application. Ensure that `script.js` and `currencySplitter.js` are located in the same directory as `index.html` for the application to function correctly.

## Customization

To update exchange rates or add new currencies, modify the `exchangeRates` object in `script.js`. This object follows a specific structure where each currency is a key, and its value is another object mapping other currencies to their exchange rates.

## Contributing

Contributions to enhance the application, such as adding new features, improving the UI, or extending currency support, are welcome. Please submit pull requests for review.

## License

MIT.

