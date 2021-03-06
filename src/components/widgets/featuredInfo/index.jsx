import React from 'react';
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";
import TextFormatter from "../../util/textFormater";

const FeaturedInfo = ({data}) => {


    return (
        <div className='my-0 p-8 rounded-xl cursor-pointer shadow-around'>
            <span className='text-2xl font-bold mt-52'>{data.title}</span>
            <div className='my-0 mx-0 flex items-center '>
                <span
                    className='text-5xl font-medium'>{TextFormatter.formatCurrency(data.currentValue, data.currencySymbol)}</span>
                <span
                    className={`flex items-center ml-5 text-xl ${data.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {data.change}
                    {data.change > 0 ? <ArrowUpward className='h-5 ml-0'/> : <ArrowDownward className='h-5 ml-0'/>}
                </span>
            </div>
            <span className='text-gray-600 text-sm'>{data.footer}</span>
        </div>
    );
};

export default FeaturedInfo;
