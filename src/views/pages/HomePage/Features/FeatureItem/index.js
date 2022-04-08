import React from 'react';
import { Grid, Typography } from "@material-ui/core";

const FeatureItem = ({svg,title,desc})=>{
    return(
        <Grid item container sm={6} lg={4} md={4} justifyContent="space-around" flexDirection="row" alignItems="center" p={2}>
            <Grid item alignItems="center" justifyContent="space-around" mb={2}>
                <img src = {svg} alt="f1" />
            </Grid>
            <Grid item sm={12} xs={12} mb={1}>
                <Typography variant = "h5" textAlign="center">
                    <b>{title}</b>
                </Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography variant = "body1" textAlign="center">
                    {desc}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default FeatureItem;