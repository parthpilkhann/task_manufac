import ReactEcharts from "echarts-for-react"
import wineData from '../../wineData.json';

// made categories for finding out average and displaying the data
let cat1Arr = []
let cat2Arr = []
let cat3Arr = []
wineData.forEach((item) => {
    if (item.Alcohol === 1) {
        cat1Arr.push(item["Malic Acid"])
    }
    else if (item.Alcohol === 2) {
        cat2Arr.push(item["Malic Acid"])
    }
    else if (item.Alcohol === 3) {
        cat3Arr.push(item["Malic Acid"])
    }
    else { }
}
)

// fn to cal avg.
const avg = (arr) => {
    let sum = 0
    for (let i of arr) {
        sum += i
    }
    console.log(sum);
    return sum / arr.length
}

let cat1 = avg(cat1Arr)
let cat2 = avg(cat2Arr)
let cat3 = avg(cat3Arr)


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
