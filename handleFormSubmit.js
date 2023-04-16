function handleFormSubmit() {
  const numerator = document.getElementById('numerator').value;
  const denominator = document.getElementById('denominator').value;
  try {
    const result = divideNumbers(Number(numerator), Number(denominator));

    const resultMessage = document.getElementById('result');
    resultMessage.style.display = 'block';
    resultMessage.innerText = result;
    setTimeout(() => {
      resultMessage.style.display = 'none';
    }, 4000);
  } catch (err) {
    const errorMessage = handleError(err.message);
    const errorMessageText = document.getElementById('error-message');
    errorMessageText.style.display = 'block';
    errorMessageText.innerText = errorMessage;
    setTimeout(() => {
      errorMessageText.style.display = 'none';
    }, 4000);
  }
}
