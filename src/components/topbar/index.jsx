import React from 'react';
import {NotificationsNone, Message, Settings} from '@material-ui/icons';
import Logo from "./logo";
import Profile from "./profile";
import TopBarRightMenu from "./rightMenu";
import ToggleDarkMode from "./toggleDarkMode";

const TopNavigation = ({darkModeClickHandler, initialDarkModeState}) => {

    const profilePic = 'https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg';

    return (
        <div className='w-full h-12 bg-white sticky top-0 bg-green-100 dark:bg-green-700 z-top'>
            <div className='h-full flex py-0 px-5 items-center justify-between'>
                <Logo/>
                <div className='flex items-center'>
                    <TopBarRightMenu enableNoti={true} enableMessage={true} enableSettings={true}/>
                    <Profile profilePicUrl={profilePic}/>
                    <div className='pl-2.5'>
                        <ToggleDarkMode showLabel={false} onClickHandler={darkModeClickHandler} initialDarkModeState={initialDarkModeState}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;
