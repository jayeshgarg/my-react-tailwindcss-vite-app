import React from 'react';

const Profile = ({profilePicUrl}) => {

    return (
        <div>
            <img src={profilePicUrl} alt='' className='w-10 h-10 rounded-full cursor-pointer'/>
        </div>
    );
};

export default Profile;
