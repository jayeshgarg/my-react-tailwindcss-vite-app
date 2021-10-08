import React from 'react';
import {Visibility} from "@mui/icons-material";
import Log from "../../util/logging";
import './smallWidget.css';

const WidgetSmall = () => {
    const data = {
        title: "New Members",
        members: [
            {
                id: 1,
                pic: "http://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic-2.jpg",
                name: "John Doe",
                title: "Software Engineer"
            },
            {
                id: 2,
                pic: "https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg",
                name: "Jane Doe",
                title: "Software Tester"
            },
            {
                id: 3,
                pic: "http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg",
                name: "Jonny Doe",
                title: "Scrum Master"
            },
            {
                id: 4,
                pic: "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
                name: "Jackson VeryLongName Doe",
                title: "Delivery Lead"
            },
            {
                id: 5,
                pic: "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg",
                name: "Jennifer Doe",
                title: "Product Owner"
            },
        ]
    }

    const onClickViewHandler = (id) => {
        Log.info("WidgetSmall", "View button CLicked", "id=" + id)
    }

    return (
        <div className='widget-container'>
            <span className='widget-title'>{data.title}</span>
            <table className='grid-view'>
                <tbody>
                {data.members.map((member) => {
                    return (
                        <tr key={member.id} className='grid-row'>
                            <td className='image-container'>
                                <img src={member.pic} className='image-icon'
                                     alt={member.name}/>
                            </td>
                            <td className='info-container'>
                                <div className='info-flexer'>
                                    <span className='info-title'>{member.name}</span>
                                    <span className='info-description'>{member.title}</span>
                                </div>
                            </td>
                            <td className='view-container'>
                                <button onClick={() => {
                                    onClickViewHandler(member.id)
                                }} className='view-button'><Visibility/></button>
                            </td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>
        </div>
    );
};

export default WidgetSmall;
