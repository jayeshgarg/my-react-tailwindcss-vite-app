import React from 'react';
import {LineStyle, Timeline, TrendingUp} from '@material-ui/icons';
import SidebarMenuGroup from "./menuGroup";

const Sidebar = () => {

    const data = [
        {
            title: "Dashboard1",
            items: [
                {
                    name: "Home",
                    icon: "LineStyle",
                    link: "#"
                },
                {
                    name: "Analytics",
                    icon: "Timeline",
                    link: "#",
                    active: true
                },
                {
                    name: "Sales",
                    icon: "TrendingUp",
                    link: "#"
                }
            ]
        }, {
            title: "Dashboard2",
            items: [
                {
                    name: "Home",
                    icon: "LineStyle",
                    link: "#",
                },
                {
                    name: "Analytics",
                    icon: "Timeline",
                    link: "#"
                },
                {
                    name: "Sales",
                    icon: "TrendingUp",
                    link: "#",
                }
            ]
        }
    ]

    return (
        <div className='flex-1 h-sidebar sticky top-12'>
            {
                data.map((grp, index) => {
                    return <SidebarMenuGroup key={index} data={grp}/>
                })
            }
        </div>
    );
};

export default Sidebar;
