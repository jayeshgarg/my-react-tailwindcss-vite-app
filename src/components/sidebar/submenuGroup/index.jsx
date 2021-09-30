import React from 'react';
import Log from "../../util/logging";
import {Link} from "react-router-dom";

const SidebarMenuGroup = ({data}) => {

    Log.debug("SidebarMenuGroup", "Menu Data", data)

    return (
        <div className='mb-2.5'>{/* sidebarMenu */}
            <h3 className='text-xl text-gray-500 font-bold'>{data.title}</h3>{/* sidebarTitle */}
            <ul className='p-1.5'>{/* sidebarList */}
                {
                    data.items.map((item, index) => {
                        const style = 'p-1.5 cursor-pointer flex items-center hover:bg-red-200 text-xl text-gray-800' + (item.active ? "bg-red-200" : "")
                        return (
                            <li key={index} className={style}>{/* sidebarListItem */}
                                <Link to={item.link}><span className='mr-2'>{item.icon}</span> <span>{item.name}</span></Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SidebarMenuGroup;
