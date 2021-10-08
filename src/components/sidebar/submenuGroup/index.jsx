import React from 'react';
import Log from "../../util/logging";
import {Link} from "react-router-dom";
import './submenuGroup.css'

const SidebarMenuGroup = ({data}) => {

    Log.debug("SidebarMenuGroup", "Menu Data", data)

    return (
        <div className='submenu-container'>
            <h3 className='submenu-title'>{data.title}</h3>
            <ul className='submenu-list'>
                {
                    data.items.map((item, index) => {
                        const style = 'submenu-list-item ' + (item.active ? "active" : "")
                        return (
                            <li key={index} className={style}>
                                <Link to={item.link}><span className='submenu-item-link-icon'>{item.icon}</span> <span>{item.name}</span></Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SidebarMenuGroup;
