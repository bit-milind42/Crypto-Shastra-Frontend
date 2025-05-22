
// import { Button } from "@/components/ui/button";
// import { fetchMarketChart } from "@/state/coin/Action";
// import React, { useEffect } from "react";
// import ReactApexChart from "react-apexcharts";
// import { useDispatch, useSelector } from "react-redux";

// const timeSeries = [
//     {
//         keyword: "DIGITAL CURRENCY_DAILY",
//         key: "Time Series (Daily)",
//         label: "1 Day",
//         value: 1,
//     },
//     {
//         keyword: "DIGITAL CURRENCY_WEEKLY",
//         key: "Weekly Time Series",
//         label: "1 Week",
//         value: 7,
//     },
//     {
//         keyword: "DIGITAL CURRENCY_MONTHLY",
//         key: "Monthly Time Series",
//         label: "1 Month",
//         value: 30,
//     },
//     {
//         keyword: "DIGITAL CURRENCY_YEARLY",
//         key: "Yearly Time Series",
//         label: "1 Year",
//         value: 365,
//     },
// ];

// const StockChart = ({coinId}) => {
//     const dispatch = useDispatch();
//     const {coin} = useSelector(store => store);
//     const [activeLabel, setActiveLabel] = React.useState(timeSeries[0]);
//     const searies=[
//         {
//             data:coin.marketChart.data,
//             }
//     ];
//     const options = {
//         chart: {
//             id:'area-datetime',
//             type: 'area',
//             height: 350,
//             zoom: {
//                 autoScaleYaxis: true
//             }           
//         },
//         dataLabels: {
//             enabled: false
//         },
//         xaxis:{
//             type: 'datetime',
//             tickAmount: 6
//         },
//         colors: ['#FF4560'],
//         markers:{
//             colors: ['#FF4560'],
//             strokeColors: ['#FF4560'],
//             size:0,
//             strokeWidth: 1,
//             style: 'hollow'

//         },
//         tooltip: {
//             theme: 'dark',
//         },
//         fill:{
//             type: 'gradient',
//             gradient: {
//                 shadeIntensity: 1,
//                 opacityFrom: 0.7,
//                 opacityTo: 0.9,
//                 stops: [0, 100]
//             }
//         },
//         grid: {
//             borderColor: '#e0e0e0',
//             strokeDashArray: 4,
//             show: true
//         },
//     };

//     const handleActiveLabel = (value) => {
//         setActiveLabel(value);
//     }

//     useEffect(() => {
//         dispatch(fetchMarketChart({coinId, days:activeLabel.value, jwt:localStorage.getItem("jwt")}));
//     }, [dispatch,coinId, activeLabel]);

//     return (
//         <div >
//             <div className="space-x-3">
//                 {timeSeries.map((item) => <Button
//                     variant={activeLabel.label === item.label ? "default" : "outline"}
//                     className="rounded-full"
//                  onClick={() => handleActiveLabel(item)} key={item.label}>
//                     {item.label}
//                 </Button>)}
//             </div>
//             <div id="chart-timelines">
//                 <ReactApexChart 
//                 key={activeLabel.label}
//                 options={options} 
//                 series={searies}
//                 height={550}
//                 type="area" />
//             </div>
//         </div>
//     );
// }

// export default StockChart;   






import { Button } from "@/components/ui/button";
import { fetchMarketChart } from "@/state/coin/Action";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";

const timeSeries = [
    { keyword: "DIGITAL CURRENCY_DAILY", key: "Time Series (Daily)", label: "1 Day", value: 1 },
    { keyword: "DIGITAL CURRENCY_WEEKLY", key: "Weekly Time Series", label: "1 Week", value: 7 },
    { keyword: "DIGITAL CURRENCY_MONTHLY", key: "Monthly Time Series", label: "1 Month", value: 30 },
    { keyword: "DIGITAL CURRENCY_YEARLY", key: "Yearly Time Series", label: "1 Year", value: 365 },
];

const StockChart = ({ coinId }) => {
    const dispatch = useDispatch();
    const { coin } = useSelector(store => store);

    const [activeLabel, setActiveLabel] = useState(timeSeries[0]);
    const [series, setSeries] = useState([{ data: [] }]);

    const options = {
        chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: { autoScaleYaxis: true },
        },
        dataLabels: { enabled: false },
        xaxis: { type: 'datetime', tickAmount: 6 },
        colors: ['#FF4560'],
        markers: {
            colors: ['#FF4560'],
            strokeColors: ['#FF4560'],
            size: 0,
            strokeWidth: 1,
            style: 'hollow'
        },
        tooltip: { theme: 'dark' },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
        grid: {
            borderColor: '#e0e0e0',
            strokeDashArray: 4,
            show: true
        },
    };

    // Trigger API on activeLabel/coinId change
    useEffect(() => {
        dispatch(fetchMarketChart({ coinId, days: activeLabel.value, jwt: localStorage.getItem("jwt") }));
    }, [dispatch, coinId, activeLabel]);

    // Update chart series when Redux data changes
    useEffect(() => {
        if (coin.marketChart?.data) {
            setSeries([{ data: coin.marketChart.data }]);
        }
    }, [coin.marketChart]);

    const handleActiveLabel = (value) => {
        setActiveLabel(value);
    };

    return (
        <div>
            <div className="space-x-3">
                {timeSeries.map((item) => (
                    <Button
                        variant={activeLabel.label === item.label ? "default" : "outline"}
                        className="rounded-full"
                        onClick={() => handleActiveLabel(item)}
                        key={item.label}
                    >
                        {item.label}
                    </Button>
                ))}
            </div>
            <div id="chart-timelines">
                <ReactApexChart
                    key={activeLabel.label}
                    options={options}
                    series={series}
                    height={550}
                    type="area"
                />
            </div>
        </div>
    );
};

export default StockChart;
