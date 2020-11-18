import React from 'react';
import styles from './SiderbarRow.module.scss';
import { Avatar } from '@material-ui/core';

const SidebarRow = (props) => {
    const { src, Icon, title } = props;

    return (
        <div className={styles.sidebarRow}>
            {src && <Avatar src={src} className={styles.avatar} />}
            {Icon && <Icon className={styles.icon} />}

            <h4 className={styles.title}>{title}</h4>
        </div>
    );
};

export default SidebarRow;
