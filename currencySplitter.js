document.addEventListener('DOMContentLoaded', function() {
  const multiCurrencyButton = document.getElementById('calculateMultiCurrencyChange');
  if (multiCurrencyButton) {
      multiCurrencyButton.addEventListener('click', function() {
          handleMultiCurrencyChange();
      });
  }
});

function handleMultiCurrencyChange() {
  // Obtener el cambio debido almacenado desde localStorage
  const changeDue = parseFloat(localStorage.getItem('changeDue'));
  const currency = localStorage.getItem('changeCurrency');

  // Continúa solo si changeDue es un número válido
  if (!isNaN(changeDue)) {
      let firstCurrencyAmount = parseFloat(document.getElementById('firstCurrencyAmount').value);
      let firstCurrency = document.getElementById('firstCurrency').value;
      let secondCurrency = document.getElementById('secondCurrency').value;

      // Asume que ya tienes implementada la función convertCurrency()
      let remainingChange = changeDue - firstCurrencyAmount;
      let secondCurrencyAmount = convertCurrency(remainingChange, firstCurrency, secondCurrency);

      // Asume que ya tienes implementada la función showMultiCurrencyChange()
      showMultiCurrencyChange(firstCurrencyAmount, firstCurrency, secondCurrencyAmount, secondCurrency);
  } else {
      console.error("No hay cambio debido almacenado para ser dividido en dos monedas.");
  }
}





function convertCurrency(amount, fromCurrency, toCurrency) {
  const rate = exchangeRates[fromCurrency][toCurrency];
  return amount * rate;
}

function showMultiCurrencyChange(firstAmount, firstCurrency, secondAmount, secondCurrency) {
  const resultDiv = document.getElementById('result2');
  resultDiv.innerHTML = `Cambio en ${firstCurrency}: ${firstAmount.toFixed(2)}<br>Cambio en ${secondCurrency}: ${secondAmount.toFixed(2)}`;
}
