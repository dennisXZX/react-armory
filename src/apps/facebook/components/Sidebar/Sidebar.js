import React from 'react';
import './Siderbar.scss';
import SidebarRow from '../SidebarRow/SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import { ExpandMoreOutlined } from '@material-ui/icons';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src="https://media-exp1.licdn.com/dms/image/C4D03AQGGD4xRF4xpoA/profile-displayphoto-shrink_100_100/0?e=1604534400&v=beta&t=K4tCIl-UmXUuWb6qhgJ3H_lInMGNgUQXcmsgM6PgkR4" title="Dennis Xiao" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="See More" />
        </div>
    );
};

export default Sidebar;
