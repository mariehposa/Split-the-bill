import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as creators from '../../../state/actionCreators';
import AxiosAuth from '../../../axios/AxiosAuth';
import { OuterDiv, InnerDiv, Card, ParentDiv, Button } from './DebtStyles'

const initalSplit = ''
const patchURL = 'https://split-the-bill-api.herokuapp.com/api/splits'

export function SplitsPage (props) {
    const {getSplits, splits} = props;
    const [editing, setEditing] = useState(false);
    const [splitToSettle, setSplitToSettle] = useState(initalSplit)

    const settle = (formValues) => {
        const payload = {amount: formValues.amount}

        AxiosAuth().patch(`${patchURL}/${splitToSettle}/settleUp?au&=`, payload)
            .then(res => {
                // console.log(res.data.message)
                setEditing(false);
                getSplits();
            })
            .catch(err => {
                // console.log(err.message)
            })
    }

    const settleUp = (id) => {
        setEditing(true);
        setSplitToSettle(id)
    }

    useEffect(() => {
        getSplits();
    }, [getSplits]);

    const styles2 = {
        margin: '5px',
        width: '200px',
        height: '50px',
        borderRadius: '10px',
      };

    const unpaidBills = splits.filter(split => split.amount > 0);
    
    if(unpaidBills.length) {
        return (
            <OuterDiv>
                <InnerDiv>
                <ParentDiv>
                    {
                        unpaidBills.map(split => (
                            <Splits key={split.id} split={split} settleUp={settleUp}/>
                        ))
                    }
                </ParentDiv>
                    {
                        editing && (
                            <Formik
                            initialValues={{amount: ''}}
                            onSubmit={settle}
                            render={() => (
                                <Form>
                                    <h2>Enter amount to be paid</h2>
                                <div>
                                    <Field style={styles2} name='amount' type="text" placeholder='Amount' />
                                </div>
                                <div>
                                <Button type='submit'>save</Button>
                                <Button onClick={() => setEditing(false)}>cancel</Button>
                                </div>
                                </Form>
                            )}
                        />
                        )
                    }
                </InnerDiv>
            </OuterDiv>
        )
    }
    return <div>No Unpaid Bills</div>
}


function Splits(props) {
    const {split, settleUp} = props;
    
    return (
        <Card>
            <h2>{split.bill.title}</h2>
            <div>Amount: {split.amount}</div>
            <Button onClick={() => settleUp(split.id)}>Settle</Button>
        </Card>
    )
}

const mapStateToProps = state => ({
    splits: state.splits,
})

export default connect(
    mapStateToProps,
    creators,
)(SplitsPage);