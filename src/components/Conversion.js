import React, {useState, useEffect} from "react";
import { fetchExchangeRate } from "../api";

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [exchangeRates, setExchangeRates] = useState({});
    const [convertedAmount, setConvertedAmount] = useState(0);  
    useEffect(() => {
        const getRates = async () => {
            try {
                const rates = await fetchExchangeRate(fromCurrency);
                setExchangeRates(rates);
                convertCurrency(amount, fromCurrency, toCurrency, rates);
            } catch (error) {
                console.error('Error fetching exchange rates', error);
            }
        }
        getRates();
    }, [fromCurrency]);
    const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
        const rate = rates[toCurrency];
        if (rate) {
            setConvertedAmount((amount * rate).toFixed(2));
        }
    }
    
    const handleConvert = () => {
        convertCurrency(amount, fromCurrency, toCurrency, exchangeRates);   
    };
    
    const swapCurrency = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    return (
        <div className="converter">
            <div className="input-group">
                <select 
                    value={fromCurrency} 
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="currency-dropdown"
                >
                    {Object.keys(exchangeRates).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter Amount">
                </input>
            </div>
            <div className="input-group">
                <select 
                    value={toCurrency} 
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="currency-dropdown"
                >
                    {Object.keys(exchangeRates).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <input 
                    type="number" 
                    value={convertedAmount} 
                    readOnly
                    placeholder="Converted Amount"
                    >
                </input>
            </div>
            {/* <button onClick={handleConvert}>Convert</button>
            <button className="swap-btn" onClick={swapCurrency}>⇄</button> */}
            <div className="button-container">
            <button onClick={swapCurrency} className="swap-button">
                ⇄ Swap
            </button>
            <button onClick={handleConvert} className="convert-button">
                Convert
            </button>
            </div>
        </div>
    )
}

export default CurrencyConverter;