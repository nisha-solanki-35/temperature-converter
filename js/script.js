const convertTemperature = (temp, from, to) => {
  temp = parseFloat(temp)
  let celsiusTemp
  if (from === 'Fahrenheit') {
    celsiusTemp = (temp - 32) * (5 / 9)
  } else if (from === 'Kelvin') {
    celsiusTemp = temp - 273.15
  } else {
    celsiusTemp = temp
  }

  if (to === 'Fahrenheit') {
    return (celsiusTemp * 9) / 5 + 32
  } else if (to === 'Kelvin') {
    return celsiusTemp + 273.15
  } else {
    return celsiusTemp
  }
}

const handleSubmit = () => {
  const temperature = document.getElementById('temperature').value
  const fromUnit = document.getElementById('fromUnit').value
  const toUnit = document.getElementById('toUnit').value
  const resultDiv = document.getElementById('result')
  if (!temperature || !fromUnit || !toUnit || fromUnit === toUnit) {
    resultDiv.textContent = "Please enter valid inputs."
    return
  }
  const convertedTemp = convertTemperature(temperature, fromUnit, toUnit)
  resultDiv.textContent = `${temperature} ${fromUnit} is ${convertedTemp.toFixed(2)} ${toUnit}`
}