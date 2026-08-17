# 💱 Currency Converter

A responsive currency converter built using HTML, CSS, and vanilla JavaScript.

The application allows users to convert amounts between different currencies using real-time exchange rates fetched from the Frankfurter API.

## 🚀 Live Demo

Add your GitHub Pages link here.

## 📌 Features

- Convert between multiple currencies
- Real-time exchange rates using an API
- Dynamic currency dropdowns
- Dynamic currency flags
- Swap From and To currencies
- Input validation
- Same-currency handling
- Loading message while fetching data
- Error handling using try/catch
- Responsive user interface

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- Frankfurter API
- Font Awesome
- FlagsAPI

## 🧠 JavaScript Concepts Practiced

- DOM Manipulation
- querySelector()
- addEventListener()
- Form submit events
- Change events
- Click events
- Loops
- Object.keys()
- Objects
- Conditional statements
- Template literals
- createElement()
- appendChild()
- Fetch API
- Promises
- async/await
- try/catch
- JSON handling
- Dynamic DOM updates

## ⚙️ How It Works

1. User enters an amount.
2. User selects the source currency.
3. User selects the target currency.
4. JavaScript creates an API request using the selected currencies.
5. The application fetches the latest exchange rate.
6. The API response is converted into JSON.
7. JavaScript extracts the exchange rate.
8. The amount is multiplied by the exchange rate.
9. The converted amount is displayed to the user.

## 🔄 Currency Swap

The application includes a swap button that exchanges:

- From currency
- To currency
- From flag
- To flag

For example:

USD → INR

becomes:

INR → USD

## 🛡️ Input Validation

The application checks whether:

- The input is a valid number
- The amount is greater than zero
- The selected currencies are different when necessary

## 🌐 API

This project uses the Frankfurter API to retrieve exchange rates.


## 📚 What I Learned

This project helped me understand how JavaScript interacts with external APIs and how asynchronous operations work using fetch(), Promises, and async/await.

I also practiced DOM manipulation by dynamically creating currency options and updating flags based on the selected currency.

## 🔮 Future Improvements

- Add currency search
- Add historical exchange rates
- Add conversion history
- Add dark mode
- Improve accessibility

## 👨‍💻 Author

Vicky Thakur
