import React from 'react';
import styles from './InfoBox.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const InfoBox = ({ title, cases, total, active, isRed, ...props }) => {
    return (
        <div className={styles.infoBox}>
            <Card
                onClick={props.onClick}
                className={`
                    ${styles.infoBox}
                    ${active && styles['infoBox--selected']}
                    ${isRed && styles['infoBox--red']}
                `}
            >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <h2 className={
                        `${styles.infoBox__cases}
                        ${!isRed && styles['infoBox__cases--green']}`}
                    >
                        {cases}
                    </h2>

                    <Typography className={styles.infoBox__total} color="textSecondary">
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default InfoBox;
