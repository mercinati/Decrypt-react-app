import { createContext, useEffect, useState } from 'react';

export const CoinContext = createContext();

const CoinContextProvider =(props)=> {

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$'
    });
    const fetchAllCoins = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-RZt1SFiirqTDTiYWpa8tUVK6'}
            };

            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoins();
    }, [currency]);

    const contextValue = {
        allCoin,
        setAllCoin,
        currency,
        setCurrency
    }


    return (
        <CoinContext.Provider value={contextValue}>
        {props.children}
        </CoinContext.Provider>
    );
}

export default CoinContextProvider;