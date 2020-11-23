const finnhub = require('finnhub');
const express = require('express');
const ForexPrices = require('./models/forex_prices');

const database = require('./database');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "butnn7748v6qj1de2pr0" // Replace this
const finnhubClient = new finnhub.DefaultApi()
 
    
// Forex candles


    const type = 'OANDA:EUR_USD';

    console.log('Buscamos el maximo timestamp');
    // const maxTimeStamp = ForexPrices.findById({type: 'OANDA:EUR_USD'}).sort({date:-1});

    // console.log(maxTimeStamp);

    finnhubClient.forexCandles("OANDA:EUR_USD", "60", 1577836800, 1606176000, (error, data, response) => {
        const prices = data;
    const entTimes = Object.entries(prices.t);
    const entOpen = Object.entries(prices.o);
    const entHigh = Object.entries(prices.h);
    const entLow = Object.entries(prices.l);
    const entClosed = Object.entries(prices.c);
    const entVolumen = Object.entries(prices.v);
    for(var entry of entTimes){
        const fecha = new Date(entry[1] * 1000);
        const open = entOpen[1][1];
        const high = entHigh[1][1];
        const low = entLow[1][1];
        const closed = entClosed[1][1];
        const volumen = entVolumen[1][1];
        
        const newForexPrices = new ForexPrices({date: fecha, 
                                                type:type, 
                                                openPrice:open, 
                                                highPrice:high, 
                                                lowPrice:low, 
                                                closedPrice: closed, 
                                                volumen:volumen});
        newForexPrices.save();
    }
    
});