import React from 'react';
import SidebarMenuGroup from "./submenuGroup";
import {
    BarChart,
    ChatBubbleOutlineOutlined,
    DynamicFeed,
    EuroSymbol,
    LineStyle,
    MailOutlined,
    PeopleOutlined,
    Report,
    Storefront,
    Timeline,
    TrendingUp,
    WorkOutline
} from "@mui/icons-material";

import './sidebar.css'

const Sidebar = () => {

    const data = [
        {
            title: "Dashboard",
            items: [
                {
                    name: "Home",
                    icon: <LineStyle/>,
                    link: "/"
                },
                {
                    name: "Analytics",
                    icon: <Timeline/>,
                    link: "#",
                    active: true
                },
                {
                    name: "Sales",
                    icon: <TrendingUp/>,
                    link: "#"
                }
            ]
        }, {
            title: "Quick Menu",
            items: [
                {
                    name: "Users",
                    icon: <PeopleOutlined/>,
                    link: "/users",
                },
                {
                    name: "Products",
                    icon: <Storefront/>,
                    link: "#"
                },
                {
                    name: "Transactions",
                    icon: <EuroSymbol/>,
                    link: "#",
                },
                {
                    name: "Reports",
                    icon: <BarChart/>,
                    link: "#",
                }
            ]
        }, {
            title: "Quick Menu",
            items: [
                {
                    name: "Mail",
                    icon: <MailOutlined/>,
                    link: "#",
                },
                {
                    name: "Feedback",
                    icon: <DynamicFeed/>,
                    link: "#"
                },
                {
                    name: "Messages",
                    icon: <ChatBubbleOutlineOutlined/>,
                    link: "#",
                }
            ]
        }, {
            title: "Staff",
            items: [
                {
                    name: "Manage",
                    icon: <WorkOutline/>,
                    link: "#",
                },
                {
                    name: "Analytics",
                    icon: <Timeline/>,
                    link: "#"
                },
                {
                    name: "Reports",
                    icon: <Report/>,
                    link: "#",
                }
            ]
        }
    ]

    return (
        <div className='sidebar-container'>
            {
                data.map((grp, index) => {
                    return <SidebarMenuGroup key={index} data={grp}/>
                })
            }
        </div>
    );
};

export default Sidebar;
