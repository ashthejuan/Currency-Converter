import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export const fetchExchangeRate = async (baseCurrency) => {
    try {
        const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
        console.log('API Response:', response.data);
        return response.data.conversion_rates;
    } catch (error) {
        console.error('Error fetching exchange rate', error);
        throw error
    }
};