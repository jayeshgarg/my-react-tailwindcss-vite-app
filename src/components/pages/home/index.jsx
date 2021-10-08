import React from 'react'
import FeaturedInfo from "../../widgets/featuredInfo";
import LineChart from "../../widgets/charts";
import WidgetSmall from "../../widgets/small";
import WidgetLarge from "../../widgets/large";

const Home = () => {
    const widgetData = [
        {
            title: "Revenue",
            currencySymbol: "€",
            currentValue: 20415.00,
            change: "-11.4",
            footer: "Compared to last month"
        }, {
            title: "Sales",
            currencySymbol: "$",
            currentValue: 4415.00,
            change: "-1.4",
            footer: "Compared to last month"
        }, {
            title: "Expenditure",
            currencySymbol: "€",
            currentValue: 2225.00,
            change: "+2.4",
            footer: "Compared to last month"
        }
    ]
    const lineChartData = {
        title: "Overall Analytics",
        data: [
            {name: 'Jan', rev: 4000, sales: 2400, exp: 2400,},
            {name: 'Feb', rev: 3000, sales: 1398, exp: 2210,},
            {name: 'Mar', rev: 2000, sales: 9800, exp: 2290,},
            {name: 'Apr', rev: 2780, sales: 3908, exp: 2000,},
            {name: 'May', rev: 1890, sales: 4800, exp: 2181,},
            {name: 'Jun', rev: 2390, sales: 3800, exp: 2500,},
            {name: 'Jul', rev: 4000, sales: 2400, exp: 2400,},
            {name: 'Aug', rev: 3000, sales: 1398, exp: 2210,},
            {name: 'Sep', rev: 2000, sales: 9800, exp: 2290,},
            {name: 'Oct', rev: 2780, sales: 3908, exp: 2000,},
            {name: 'Nov', rev: 1890, sales: 4800, exp: 2181,},
            {name: 'Dec', rev: 2390, sales: 3800, exp: 2500,},
        ],
        lineColors: {rev: '#0f0', sales: '#00f', exp: '#f00'},
        legendLabel: {rev: 'Revenue', sales: 'Sales', exp: 'Expenditure'},
        xAxisColor: "#888",
        showGrid: true
    }

    const widgetLargeData = {
        title: 'Latest Transactions',
        transactions: [
            {id: 1, name: "Jane Doe", date: "2021-09-29", amt: 1000.00, status: "Pending"},
            {id: 2, name: "John Doe", date: "2020-04-20", amt: 1500.00, status: "Approved"},
            {id: 3, name: "Jonny Doe", date: "2018-01-05", amt: 100.00, status: "Approved"},
            {id: 4, name: "Jennifer Doe", date: "2019-02-29", amt: 1000000.00, status: "Declined"},
        ],
        columnNames: [
            {id: 'id', headerName: 'Customer ID', width: 10},
            {id: 'name', headerName: 'Customer Name', width: 100},
            {id: 'date', headerName: 'Transaction Date', width: 50, isNumber: true},
            {id: 'amt', headerName: 'Transaction Amount', width: 50, isCurrency: true, currencySymbol: '€'},
            {id: 'status', headerName: 'Status', width: 100, isColoredStatus: true},
        ],
        statusValues: {
            Pending: 0,
            Approved: 1,
            Declined: -1
        }
    }

    return (
        <div className="w-full pb-5">
            <div className='w-full flex flex-wrap justify-between'>
                <div className='flex-1-3 mx-5 mt-5'><FeaturedInfo data={widgetData[0]}/></div>
                <div className='flex-1-3 mx-5 mt-5'><FeaturedInfo data={widgetData[1]}/></div>
                <div className='flex-1-3 mx-5 mt-5'><FeaturedInfo data={widgetData[2]}/></div>
            </div>
            <div className='mx-5 mt-5'>
                <LineChart data={lineChartData}/>
            </div>
            <div className='flex flex-nowrap flex-row mx-5 mt-5'>
                <div className='flex-1-3 min-w-0 mr-5'><WidgetSmall/></div>
                <div className='flex-2-3 min-w-0'><WidgetLarge data={widgetLargeData} checkbox/></div>
            </div>
        </div>
    )
}

export default Home
