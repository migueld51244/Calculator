# Calculator Web App

A fully functional calculator built with **HTML, CSS, and JavaScript** as part of **The Odin Project Foundations** curriculum. The application supports chained calculations, decimal numbers, keyboard input, backspace functionality, and robust error handling while maintaining a clean and responsive interface.

## 🚀 Live Demo

Check out the live version: [Calculator Demo](https://migueld51244.github.io/Calculator/)

## 📸 Screenshot

![Calculator Interface](https://i.ibb.co/sddFnJxw/calc.png)

## ✨ Features

* ➕ Addition, ➖ subtraction, ✖️ multiplication, and ➗ division
* Multi-digit number input
* Decimal number support
* Chained calculations (e.g. `12 + 7 - 1 = 18`)
* Keyboard support
* Backspace/Delete functionality
* Clear button to reset the calculator
* Prevents invalid consecutive operator evaluations
* Starts a new calculation automatically after displaying a result
* Graceful division-by-zero error handling
* Automatic rounding of long decimal results

## 🛠️ Technologies Used

- HTML5 - Structure
- CSS3 - Styling
- JavaScript (ES6) - Application logic

## ⌨️ Keyboard Shortcuts

| Key        | Action                |
| ---------- | --------------------- |
| 0–9        | Enter numbers         |
| +          | Addition              |
| -          | Subtraction           |
| *          | Multiplication        |
| /          | Division              |
| .          | Decimal point         |
| Enter or = | Calculate             |
| Backspace  | Delete last character |
| Escape     | Clear calculator      |

## 🎯 Project Goals

This project was built to practice:

* DOM manipulation
* Event handling
* State management
* JavaScript functions
* Application logic
* Keyboard event handling
* Debugging and edge-case handling

## 🎯 How It Works

The calculator follows a simple state management approach:

1. **Number Entry**: Click digits to build numbers (e.g., "1" + "2" = "12")
2. **Operations**: Click an operator (+, -, ×, ÷) to store the first number and prepare for the second
3. **Result**: Press Enter (=) to perform the calculation and display the result
4. **Clear**: Reset everything and start fresh

## 📁 Project Structure
* index.html -> Structure
* style.css -> Styling 
* index.js -> Logic/Functionality


## 🚦 Getting Started

To run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/migueld51244/Calculator.git
```
OR
Download the source code

2. Open index.html in your browser

No build tools or dependencies required!

## 🐛 Known Issues
* Decimal button currently non-functional
* No backspace/delete functionality
* Division by zero crashes the calculator
* Limited responsive design
* Single operation evaluation only (no operator precedence)

## 🤝 Contributing
Found a bug or want to suggest a feature? Please open an issue on the [Issues Tab](https://github.com/migueld51244/Calculator/issues).


## 💡 What I Learned

Building this project helped reinforce several important JavaScript concepts:

* Managing application state
* Separating logic into reusable functions
* Handling user input from both mouse and keyboard
* Working with edge cases (division by zero, invalid expressions, repeated operators)
* Refactoring code to reduce duplication and improve readability

## 🔮 Possible Future Improvements

* Responsive mobile layout
* Scientific calculator functions
* Calculation history
* Percentage and sign toggle buttons
* Themes (light/dark mode)

## 📚 Acknowledgements

This project was completed as part of **The Odin Project Foundations** curriculum.

https://www.theodinproject.com/

## 📚 Learning Journey
This project is part of my journey learning JavaScript through The Odin Project. Building this calculator helped me understand:

* DOM manipulation

* Event handling

* State management

* String vs number operations

* Function composition

## 💖 Support
If you find this project helpful or interesting, consider supporting my learning journey!

## 📄 License
This project is open source and available under the MIT License.









