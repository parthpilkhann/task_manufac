import React from 'react'
import ReactEcharts from "echarts-for-react"
import wineData from '../../wineData.json';

let newArr = []
wineData.forEach((item) => newArr.push([item["Color intensity"], item.Hue]))
const option = {
    grid: {
        top: 30, right: 110, bottom: 20, left: 50
    },
    xAxis: {
        name: 'Color Intensity',
    },
    yAxis: {
        name: 'hue'
    },
    series: [
        {
            symbolSize: 5,
            data: newArr,
            type: 'scatter'
        }
    ]
};

const Scatter = () => {
    return (
        <div className='Scatter' style={{marginTop: "5vh"}}  >
            <ReactEcharts
                option={option}
                style={{ width: "100%", height: "300px" }}
            ></ReactEcharts>
        </div>
    )
}
export default Scatter
