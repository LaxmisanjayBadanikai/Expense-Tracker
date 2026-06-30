# Expense Tracker

A simple, lightweight expense tracking application built with vanilla HTML, CSS, and JavaScript. Track your daily expenses with persistent local storage.

## Features

- **Add Expenses**: Quickly add expenses with description and amount
- **Delete Expenses**: Remove individual expenses with a single click
- **Real-time Total**: Automatically calculates and displays total expenses
- **Persistent Storage**: All expenses are saved locally in your browser
- **Responsive Dark Theme**: Clean, modern dark interface optimized for all devices
- **Zero Dependencies**: Pure vanilla JavaScript - no frameworks or libraries

## How It Works

1. Enter an expense **Description** (e.g., "Coffee", "Groceries")
2. Enter the **Amount** in dollars
3. Click **Add Expense** - it appears instantly in the list
4. The **Total** updates automatically with each addition or deletion
5. Click **delete** on any expense to remove it
6. All data is automatically saved in your browser's local storage

## Project Structure

```

expense-tracker/
├── index.html          # Main HTML structure
├── styles.css          # Styling and dark theme
├── script.js           # Application logic
└── README.md           # Project documentation

```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with dark theme
- **JavaScript (ES6)** - DOM manipulation, event handling, and local storage

## Installation & Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No server, build process, or installation required
4. Start tracking your expenses immediately!

## Customization

### Styling

- The dark theme uses `#1e1e1e` as background and `#6200ea` (purple) as primary accent
- Modify these colors in `styles.css` to match your brand
- The container width is set to `400px` - adjust as needed for larger displays

### Data Persistence

Expenses are stored in `localStorage` under the key `"expenses"`. The data persists even after closing the browser.

### Add Categories or Dates

You can extend the application by modifying the expense object in `script.js`:

```javascript
const newExpense = {
  id: Date.now(),
  name: expenseName,
  amount: expenseAmount,
  category: "Food",        // Add category
  date: new Date().toISOString().split('T')[0]  // Add date
};
```

## API Reference

### Core Functions

| Function | Description |
|---|---|
| `renderExpenses()` | Renders all expenses to the DOM |
| `updateTotal()` | Calculates and displays total amount |
| `saveExpensesToLocal()` | Saves expenses array to localStorage |
| `addExpense(name, amount)` | Creates and adds new expense |

### Event Listeners

| Element | Event | Handler |
|---|---|---|
| `#expense-form` | `submit` | Adds new expense |
| `#expense-list` | `click` | Deletes expense when delete button clicked |

## Browser Support

Works on all modern browsers:

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 14+
- ✅ Edge 79+
- ✅ Opera 47+

## Future Improvements

- Add expense categories with filtering
- Edit existing expenses
- Date tracking with sorting
- Export/import data as JSON
- Charts and spending analytics
- Monthly budgets and limits
- Search and filter functionality
- Multiple user profiles

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
1. Create a new branch (`git checkout -b feature/improvement`)
1. Make your changes
1. Commit your changes (`git commit -m 'Add feature'`)
1. Push to the branch (`git push origin feature/improvement`)
1. Open a Pull Request

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- Built with ❤️ using vanilla JavaScript
- Inspired by the need for simple, privacy-first expense tracking
- Icons and UI designed for clarity and ease of use

**Start tracking your expenses today!** No sign-up, no cloud sync, just pure local data management.

