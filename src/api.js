import axios from 'axios';
const API_KEY = '6a2e51c3dcab5ecf202e3aad'
const BASE_URL = 'https://v6.exchangerate-api.com/v6'

export const fetchExchangeRate = async (baseCurrency) => {
    try {
        const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
        return response.data.conversion_rates;
    } catch (error) {
        console.error('Error fetching exchange rate', error);
        throw error
    }
};