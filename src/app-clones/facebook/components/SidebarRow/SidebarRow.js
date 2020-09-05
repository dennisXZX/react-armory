import React from 'react';
import './SiderbarRow.scss';
import { Avatar } from '@material-ui/core';

const SidebarRow = (props) => {
    const { src, Icon, title } = props;

    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4 className="title">{title}</h4>
        </div>
    );
};

export default SidebarRow;
