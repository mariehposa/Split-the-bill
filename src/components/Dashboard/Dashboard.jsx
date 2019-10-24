import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { useStyles } from '../Layout';
import { Grid, Paper, } from '@material-ui/core';

export const Dashboard = ({ debt }) => {
    const classes = useStyles();
    const styles = {height: '100px', backgroundColor: '#FFB884'}

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={4}>
                <Paper className={fixedHeightPaper} style={styles}>
                Total Balance
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={4}>
              <Paper className={fixedHeightPaper} style={styles}>
                Owing
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper} style={styles}>
                Owed
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                Orders
              </Paper>
            </Grid>
          </Grid>
    )
}
const mapStateToProps = state => ({
  debt: state.lumpState.currentUser.splits,
})
export default connect(mapStateToProps, )(Dashboard);