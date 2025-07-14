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
    />
  )
}

export default LineChart