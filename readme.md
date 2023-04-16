# Error Handling 

### This is a simple web page with a form that takes two input values: numerator and denominator. Upon submission, the form calls a function that attempts to divide the numerator by the denominator, while performing error handling.

## Prerequisites
This project requires a web browser and a text editor.

## Getting Started
To get started with this project, follow these steps:

## Clone this repository onto your local machine using the following command:

```bash
git clone <repository_url>
```

Open the index.html file in your preferred web browser.

You can test the functionality of the form by inputting values into the numerator and denominator fields and clicking the submit button.

## Functionality
The divideNumbers() function takes two arguments: numerator and denominator. It performs the division operation and returns the result. However, before performing the operation, it performs some error handling checks:

- It checks that both numerator and denominator are numbers. If not, it throws a TypeError with the message "Numerator and denominator must be numbers".
- It checks that the denominator is not zero. If it is, it throws a RangeError with the message "Denominator cannot be zero".
- It checks that both the numerator and denominator are whole numbers (i.e., integers). If not, it throws an Error with the message "You must use a whole number".
- The handleError() function takes one argument: an error object. It checks the type of the error object and logs an appropriate error message to the console. It returns the error object.

- The handleFormSubmit() function is called when the form is submitted. It gets the values of the numerator and denominator fields, converts them to numbers, and then calls the divideNumbers() function with those values. If divideNumbers() throws an error, handleFormSubmit() calls handleError() with the error message and displays the error message on the web page for 4 seconds. If divideNumbers() is successful, handleFormSubmit() displays the result on the web page for 4 seconds.

## Styling
The form and error messages are styled using CSS. The form is centered on the page and the input fields have borders and padding. The submit button has a green background color and a hover effect. The error and result messages have a red and green background color, respectively, and a border. They are centered on the page and have a 4-second timeout before disappearing.

