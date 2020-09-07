import React, { useState } from 'react';
import styles from './Datepicker.module.scss';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from "@material-ui/icons/People";
import Button from '@material-ui/core/Button';

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    };

    const handleSelect = ranges => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    return (
        <div className={styles.datepicker}>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />

            <h2>Number of guests <PeopleIcon /></h2>

            <input min={0} defaultValue={2} type="number" />

            <Button>
                Search Airbnb
            </Button>
        </div>
    );
};

export default Datepicker;
