
import { Button } from "@/components/ui/button";
import React from "react";
import ReactApexChart from "react-apexcharts";

const timeSeries = [
    {
        keyword: "DIGITAL CURRENCY_DAILY",
        key: "Time Series (Daily)",
        label: "1 Day",
        value: 1,
    },
    {
        keyword: "DIGITAL CURRENCY_WEEKLY",
        key: "Weekly Time Series",
        label: "1 Week",
        value: 7,
    },
    {
        keyword: "DIGITAL CURRENCY_WEEKLY",
        key: "Monthly Time Series",
        label: "1 Month",
        value: 30,
    },
];

const StockChart = () => {
    const [activeLabel, setActiveLabel] = React.useState("1 Day");
    const searies=[
        {
            data:
            [[1743941034727, 82806.5759445734],
            [1743944682431, 82640.5340466118],
            [1743948294271, 82259.2156816377],
            [1743951879677, 82583.1163330594],
            [1743955536876, 82409.4842439885],
            [1743959015595, 81902.0770178864],
            [1743962987199, 80308.2045662943],
            [1743966578060, 78970.0132766352],
            [1743970169486, 79727.0241571191],
            [1743973483760, 78831.6104565125],
            [1743977074872, 78898.1641753405],
            [1743980977698, 77918.7919500168],
            [1743984265632, 78366.8321237895],
            [1743988176560, 78387.6912670073],
            [1743993811760, 78393.6027269291],
            [1743996473990, 78102.0875366474],
            [1743998432190, 77583.1355433265],
            [1744002424098, 76710.5650840036],
            [1744005841885, 76867.8291057247],
            [1744009491241, 74773.2587934775],
            [1744013097434, 75161.9488757392],
            [1744016694764, 76178.3544899548],
            [1744020074412, 76233.2318758808],
            [1744023843946, 76919.887473884],
            [1744027491597, 76790.2560920861],]
        }
    ];
    const options = {
        chart: {
            id:'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
                autoScaleYaxis: true
            }           
        },
        dataLabels: {
            enabled: false
        },
        xaxis:{
            type: 'datetime',
            tickAmount: 6
        },
        colors: ['#FF4560'],
        markers:{
            colors: ['#FF4560'],
            strokeColors: ['#FF4560'],
            size:0,
            strokeWidth: 1,
            style: 'hollow'

        },
        tooltip: {
            theme: 'dark',
        },
        fill:{
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

    const handleActiveLabel = (value) => {
        setActiveLabel(value);
    }

    return (
        <div >
            <div className="space-x-3">
                {timeSeries.map((item) => <Button
                    variant={activeLabel === item.label ? "default" : "outline"}
                    className="rounded-full"
                 onClick={() => handleActiveLabel(item.label)} key={item.label}>
                    {item.label}
                </Button>)}
            </div>
            <div id="chart-timelines">
                <ReactApexChart 
                options={options} 
                series={searies}
                height={550}
                type="area" />
            </div>
        </div>
    );
}

export default StockChart;    