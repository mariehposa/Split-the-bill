import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { useStyles } from '../Layout';
import { Grid, Paper, } from '@material-ui/core';

export const Dashboard = ({ debt, bills }) => {
    const classes = useStyles();
    const styles = {height: '100px', backgroundColor: '#FFB884'}
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const eachDebt = debt.map(d => Number(d.amount))
    const totalDebt = eachDebt.reduce((a, acc) => {
      return a + acc;
    }, 0)

    const billsAmount = bills
      .map(b => Number(b.amount))
      .reduce((d, acc) => d + acc ,0)

    const expectedAmount = billsAmount - totalDebt;
    return (
        <Grid container spacing={3}>
            <Grid item xs={8} md={4} lg={4}>
                <Paper className={fixedHeightPaper} style={styles}>
                Total Balance
              </Paper>
            </Grid>
            <Grid item xs={8} md={4} lg={4}>
              <Paper className={fixedHeightPaper} style={styles}>
                Total Debt:
                <h4>{totalDebt.toFixed(2)}</h4>
              </Paper>
            </Grid>
            <Grid item xs={8} md={4} lg={4}>
              <Paper className={fixedHeightPaper} style={styles}>
                Expected Amount
                <h4>{expectedAmount.toFixed(2)}</h4>
              </Paper>
            </Grid>
            <Grid item xs={8} md={12} lg={4}>
              <Paper className={classes.paper} style={styles}>
                List
              </Paper>
            </Grid>
          </Grid>
    )
}
const mapStateToProps = state => ({
  debt: state.lumpState.currentUser.splits,
  bills: state.lumpState.currentUser.bills,
})

export default connect(mapStateToProps, )(Dashboard);