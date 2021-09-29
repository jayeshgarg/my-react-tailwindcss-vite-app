import React from 'react';
import {Message, NotificationsNone, Settings} from "@mui/icons-material";

const TopBarRightMenu = ({enableNoti, enableMessage, enableSettings}) => {
    return (
        <>
            {enableNoti && <div className='relative cursor-pointer mr-2.5 text-gray-800'>
                <NotificationsNone/>
                <span
                    className='absolute -top-0.5 -right-1 bg-red-pure text-white w-4 h-4 rounded-full flex items-center justify-center text-sm'>2</span>
            </div>}
            {enableMessage && <div className='relative cursor-pointer mr-2.5 text-gray-800'>
                <Message/>
                <span
                    className='absolute -top-0.5 -right-1 bg-red-pure text-white w-4 h-4 rounded-full flex items-center justify-center text-sm'>5</span>
            </div>}
            {enableSettings && <div className='relative cursor-pointer mr-2.5 text-gray-800'>
                <Settings/>
            </div>}
        </>
    );
};

export default TopBarRightMenu;
