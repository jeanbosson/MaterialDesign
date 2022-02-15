import React from 'react';
import CoffeCard from './CoffeCard';
import { Grid } from '@material-ui/core';

const Content = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <CoffeCard
                    title={"jean bosson"}
                    subtitle={2000}
                    avatarSrc="https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png"
                    imgSrc={"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg"}
                    description="Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296"

                />
            </Grid>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
        </Grid>
    );
};


export default Content;