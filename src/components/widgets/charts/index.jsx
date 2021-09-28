import React from 'react';
import {LineChart as Chart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const LineChart = ({data}) => {
    const formatLegends = (value, entry) => {
        const {color} = entry;
        return <span style={{color}} className='text-base pr-8'>{value}</span>;
    }

    const keys = Object.keys(data.data[0]).filter(i => {
        return i != 'name';
    });

    return (
        <div className='m-5 p-5 rounded-xl cursor-pointer shadow-around'>
            <h3 className='mb-5 text-2xl font-semibold'>{data.title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <Chart data={data.data} margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
                    {data.showGrid && <CartesianGrid strokeDasharray="3 3"/>}
                    <XAxis dataKey="name" stroke={data.xAxisColor}/>
                    <Tooltip/>
                    <Legend formatter={formatLegends}/>
                    {
                        keys.map((key, idx) => {
                            const color = data.lineColors[key]
                            return <Line type="monotone" dataKey={key} name={data.legendLabel[key]} stroke={color}
                                         key={idx} activeDot={{r: 8}}/>
                        })
                    }
                </Chart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;
