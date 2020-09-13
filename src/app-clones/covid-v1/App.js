import React from 'react';
import styles from './App.module.scss';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';

const App = () => {
    return (
        <div className={styles.app}>
            {/*<div className="app__header">*/}
                <h1>COVID-19 Tracker</h1>
                {/*<FormControl className="app__dropdown">*/}
                    {/*<Select*/}
                        {/*variant="outlined"*/}
                        {/*value={country}*/}
                        {/*onChange={onCountryChange}*/}
                    {/*>*/}
                        {/*<MenuItem value="worldwide">Worldwide</MenuItem>*/}
                        {/*{countries.map((country) => (*/}
                            {/*<MenuItem value={country.value}>{country.name}</MenuItem>*/}
                        {/*))}*/}
                    {/*</Select>*/}
                {/*</FormControl>*/}
            {/*</div>*/}
        </div>
    );
};

export default App;
