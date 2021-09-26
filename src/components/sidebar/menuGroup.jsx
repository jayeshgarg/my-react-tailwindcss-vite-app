import React from 'react';
import Icon from "../util/icon";
import Log from "../util/logging";

const SidebarMenuGroup = ({data}) => {

    Log.debug("SidebarMenuGroup","Menu Data", JSON.stringify(data))

    return (
        <div className='mb-2.5'>{/* sidebarMenu */}
            <h3 className='text-base text-gray-500 font-bold'>{data.title}</h3>{/* sidebarTitle */}
            <ul className='p-1.5'>{/* sidebarList */}
                {
                    data.items.map((item, index) => {
                        const style = 'p-1.5 cursor-pointer flex items-center hover:bg-red-200 text-lg ' + (item.active ? "bg-red-200" : "")
                        return (
                            <li key={index} className={style}>{/* sidebarListItem */}
                                <Icon name={item.icon}/> {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SidebarMenuGroup;
