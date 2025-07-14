import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {

    const [data, setData] = useState([['Date', 'Prices']])

    useEffect(() => {
        let dataCopy = [['Date', 'Prices']];
        if(historicalData.prices) {
            historicalData.prices.map((item) => {
                const date = new Date(item[0]);
                const price = item[1];
                dataCopy.push([date.toLocaleDateString().slice(0,-5), price]);
            })
            setData(dataCopy);
        }
    },[historicalData])

  return (
    <Chart 
        chartType="LineChart"
        data={data}
        width="100%"
        height="400px"
        legendToggle
        options={{
            title: 'Price History',
            hAxis: {
                title: 'Date',
                format: 'MMM dd, yyyy',
            },
            vAxis: {
                title: 'Price',
                format: 'currency',
            },
            backgroundColor: '#f1f1f1',
            chartArea: { width: '80%', height: '70%' },
            colors: ['#1a73e8'],
        }}
    />
  )
}

export default LineChart