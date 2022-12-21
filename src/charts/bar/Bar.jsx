import ReactEcharts from "echarts-for-react"
import wineData from '../../wineData.json';

// made categories for finding out average and displaying the data
let cat1 = 0; let cat2 = 0; let cat3 = 0; let cat1Count = 0; let cat2Count = 0; let cat3Count = 0
wineData.forEach((item) => {
    if (item.Alcohol === 1) {
        cat1 += item["Malic Acid"]
        cat1Count++
    }
    else if (item.Alcohol === 2) {
        cat2 += item["Malic Acid"]
        cat2Count++
    }
    else if (item.Alcohol === 3) {
        cat3 += item["Malic Acid"]
        cat3Count++
    }
    else { }
})
cat1 = cat1 / cat1Count
cat2 = cat2 / cat2Count
cat3 = cat3 / cat3Count


const options = {
    grid: { top: 30, right: 110, bottom: 20, left: 50 },
    xAxis: {
        data: [1, 2, 3],
        name: 'Alcohol'
    },
    yAxis: {
        type: "value",
        name: 'Malic Acid'
    },
    series: [
        {
            data: [cat1, cat2, cat3],
            type: "bar",
            smooth: true
        }
    ],
    tooltip: {
        trigger: "axis"
    }
}

function Bar() {
    return (
        <div className="Bar" >
            <ReactEcharts
                option={options}
                style={{ width: "100%", height: "300px" }}
            ></ReactEcharts>
        </div>
    )
}

export default Bar
