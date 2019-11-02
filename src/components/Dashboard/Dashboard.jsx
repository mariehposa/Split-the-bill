import React, { useState } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { useStyles } from '../Layout';
import { Grid, Paper, } from '@material-ui/core';
import { Button } from './dashboardStyle'

export const Dashboard = ({ debt, bills }) => {
  const classes = useStyles();
  const styles = { height: '130px', backgroundColor: '#FFB884' }
  const styles2 = { backgroundColor: '#FFB884', padding: '20px' }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const eachDebt = debt.map(d => Number(d.amount))
  console.log(debt);

  const allDebts = debt.map(d => {
    return {
      amount: d.amount,
      title: d.bill.title
    }
  })

  console.log(allDebts);


  const totalDebt = eachDebt.reduce((a, acc) => {
    return a + acc;
  }, 0)

  const billsAmount = bills
    .map(b => Number(b.amount))
    .reduce((d, acc) => d + acc, 0)

  const expectedAmount = billsAmount - totalDebt;

  const totalBalance = totalDebt + expectedAmount;

  const [debtShowing, setDebtShowing] = useState(false)

  return (
    <Grid container spacing={3}>
      <Grid item xs={8} md={4} lg={4}>
        <Paper className={fixedHeightPaper} style={styles}>
          Total Balance
              <h4>{totalBalance.toFixed(2)}</h4>
        </Paper>
      </Grid>
      <Grid item xs={8} md={4} lg={4}>
        <Paper className={fixedHeightPaper} style={styles}>
          Total Debt
              <h4>{totalDebt.toFixed(2)}</h4>
        <Button>View</Button>
        </Paper>
      </Grid>
      <Grid item xs={8} md={4} lg={4}>
        <Paper className={fixedHeightPaper} style={styles}>
          Expected Amount
              <h4>{expectedAmount.toFixed(2)}</h4>
        <Button>View</Button>
        </Paper>
      </Grid>
      <Grid item xs={8} md={12} lg={4}>
        <Paper style={styles2}>
          List
              {
            debtShowing ?
              allDebts.map(d => <div>
                <h4>{`${d.amount} `} from {` ${d.title}`}</h4>
              </div>) :
              allDebts.map(d => <div>
                <h4>{`${d.amount} `} from {` ${d.title}`}</h4>
              </div>)
          }
        </Paper>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => ({
  debt: state.lumpState.currentUser.splits,
  bills: state.lumpState.currentUser.bills,
  DebtList: state.lumpState.currentUser.splits.bill,
})

export default connect(mapStateToProps)(Dashboard);