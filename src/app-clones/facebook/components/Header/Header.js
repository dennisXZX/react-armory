import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/fb-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../../store/StateProvider';
import Count from '../Count/Count';

const Header = () => {
    const [{ user }] = useStateValue();

    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <img src={logo} alt="Facebook Logo" className={styles.logo} />

                <div className={styles.header__input}>
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className={styles.header__center}>
                <div className={`${styles.header__option} ${styles['header__option--active']}`}>
                    <HomeIcon fontSize="large" />
                </div>
                <div className={styles.header__option}>
                    <FlagIcon fontSize="large" />
                </div>
                <div className={styles.header__option}>
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className={styles.header__option}>
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className={styles.header__option}>
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className={styles.header__right}>
                <div className={styles.header__info}>
                    <Avatar src={user.photoURL} />
                    <h4 className={styles.username}>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                    <Count count={2} />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Header;
