import React from 'react';
import {Visibility} from "@material-ui/icons";
import Log from "../../util/logging";

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
                name: "Jackson VeryLongName Doe dxcJackson VeryLongName Doe dxc",
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
        <div className='shadow-around p-5 rounded-xl w-full'>
            <span className='text-2xl font-semibold'>{data.title}</span>
            <table className='w-full'>
                <tbody>
                {data.members.map((member) => {
                    return (
                        <tr key={member.id} className='bg-red-100 items-center'>
                            <td className='py-1.5 pr-1.5 '>
                                <img src={member.pic} className='h-12 w-12 rounded-full object-cover'
                                     alt={member.name}/>
                            </td>
                            <td className='py-1.5 pr-1.5'>
                                <div className='flex flex-col'>
                                    <span className='font-semibold'>{member.name}</span>
                                    <span className='font-extralight'>{member.title}</span>
                                </div>
                            </td>
                            <td className='py-1.5'>
                                <button onClick={() => {
                                    onClickViewHandler(member.id)
                                }} className='px-2.5 py-2 text-gray-600'><Visibility/></button>
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
