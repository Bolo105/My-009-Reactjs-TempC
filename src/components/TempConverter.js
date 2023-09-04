import React, { useState } from 'react'
import styled from 'styled-components';

const Wr = styled.div`
    padding-top: 50px;
    padding-bottom: 200px;
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
`;

const Head = styled.h1`
    color: #3498db;
`;

const Container = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 300px;
    margin: 0 auto;
    margin-top: 30px;
`;



export const TempConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

  const convertToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
  }

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  }

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);

    if (celsiusValue === '') {
      setFahrenheit('');
      return;
    }

    const fahrenheitValue = convertToFahrenheit(parseFloat(celsiusValue));
    setFahrenheit(fahrenheitValue.toFixed(2));
  }

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);

    if (fahrenheitValue === '') {
      setCelsius('');
      return;
    }

    const celsiusValue = convertToCelsius(parseFloat(fahrenheitValue));
    setCelsius(celsiusValue.toFixed(2));
  }
  return (
    <Wr>
      <Container>
       <Head>Temperature Converter</Head>
       <p>Enter a temperature in Celsius</p>
       <input type="number" placeholder="Celsius" step="0.01" value={celsius} onChange={handleCelsiusChange} />

       <p>Enter a temperature in Fahrenheit</p>
       <input type="number" placeholder="Fahrenheit" step="0.01" value={fahrenheit} onChange={handleFahrenheitChange} />
       </Container>
    </Wr>
  )
}