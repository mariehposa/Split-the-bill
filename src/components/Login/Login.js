import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import * as actionCreators from '../../state/actionCreators';
import axios from 'axios';
import { OuterDiv, InnerDiv, StyledInnerDiv, FontDiv, Styledfont, Surround, Button } from './LoginStyles'

const loginURL = 'https://split-the-bill-api.herokuapp.com/api/auth/login';

const initialValues = {
    email: '', 
    password: ''
}

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('email not valid')
        .required('An email is required'),
    password: yup.string()
        .required('a password is required'),
});

export const Login = (props) => {

    const onLogin = (formValues, actions) => {
        const details = {
            email: formValues.email,
            password: formValues.password
        }

        axios.post(loginURL, details)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                actions.resetForm();
                props.history.push('/dashboard')
            })
            .catch(error => {
                localStorage.clear();
                alert(error.response.data.message || error.message);
            });
    };

    const styles2 = {
        margin: '0.5em',
        width: '20em',
        height: '1.8em',
        borderRadius: '0.2em',
        fontSize: '1em',
        textAlign: 'center',
        border: '0',
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onLogin}
            validationSchema={validationSchema}
            render={(props) => (
                <OuterDiv>
                    <InnerDiv>
                        <FontDiv>
                            <Styledfont>Please log in!</Styledfont>
                        </FontDiv>
                        <Surround>
                            <Form className='login'>
                                <StyledInnerDiv>
                                    <Field style={styles2} name='email' type="text" placeholder='Email' />
                                    <ErrorMessage name='email' component='div'/>
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Field style={styles2} name='password' type="password" placeholder='Password' />
                                    <ErrorMessage name='password' component='div'/>
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <section>
                                        <Button type='submit'>Sign In</Button>
                                        <Link to='/signup'>                                            
                                            <Button type='button'>Sign Up</Button>
                                        </Link>
                                    </section>                                    
                                </StyledInnerDiv>
                            </Form>
                        </Surround>
                    </InnerDiv>
                </OuterDiv>
            )}
        />
    );
}

export default connect(
    state => state, 
    actionCreators
)(Login);